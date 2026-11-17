import { contactLimits, contactTopics } from "@/content/contact";

/**
 * Sends contact-form messages through Resend's HTTP API.
 * Needs RESEND_API_KEY and CONTACT_TO_EMAIL (see .env.example). Until they're
 * set, it answers 503 so the form can tell visitors it isn't connected yet.
 */
const MAX_BODY_BYTES = 16_000;
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const recentByIp = new Map<string, number[]>();

/**
 * Best-effort per-IP limit. It lives in memory, so each serverless instance
 * counts separately; add Vercel BotID or Turnstile before launch.
 */
function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (recentByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT.windowMs,
  );
  recent.push(now);
  recentByIp.set(ip, recent);
  if (recentByIp.size > 10_000) recentByIp.clear();
  return recent.length > RATE_LIMIT.max;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return Response.json(
      {
        error: "The contact form isn't connected yet. Please try again later.",
      },
      { status: 503 },
    );
  }

  // Reject oversized bodies before reading them.
  const length = Number(request.headers.get("content-length") ?? 0);
  if (length > MAX_BODY_BYTES) {
    return Response.json({ error: "Message too long." }, { status: 413 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many messages. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = await request.json();
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      throw new Error("not an object");
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const field = (key: string) =>
    typeof body[key] === "string" ? (body[key] as string).trim() : "";
  const name = field("name");
  const email = field("email");
  const message = field("message");
  const topic = field("topic");

  // Honeypot: real visitors never fill the hidden "website" field.
  if (field("website")) return Response.json({ ok: true });

  const topicLabel = contactTopics.find((t) => t.value === topic)?.label;
  if (
    !name ||
    name.length > contactLimits.name ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > contactLimits.email ||
    !message ||
    message.length > contactLimits.message ||
    !topicLabel
  ) {
    return Response.json(
      { error: "Please check the form and try again." },
      { status: 400 },
    );
  }

  let res: Response;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      signal: AbortSignal.timeout(10_000),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.CONTACT_FROM_EMAIL ??
          "Glisten AI <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject: `[Glisten contact] ${topicLabel}: ${name.replace(/[\r\n]+/g, " ")}`,
        // Plain text only, so nothing a visitor types is rendered as HTML.
        text: `From: ${name} <${email}>\nTopic: ${topicLabel}\n\n${message}`,
      }),
    });
  } catch (error) {
    console.error("Contact email request failed", (error as Error).name);
    return Response.json(
      { error: "We couldn't send your message. Please try again later." },
      { status: 502 },
    );
  }

  if (!res.ok) {
    console.error("Contact email failed", res.status);
    return Response.json(
      { error: "We couldn't send your message. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
