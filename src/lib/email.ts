/**
 * Sends a plain-text email through Resend's HTTP API (no SDK).
 * Returns false when RESEND_API_KEY isn't set so callers can decide what to do.
 */
export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY);
}

export async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    signal: AbortSignal.timeout(10_000),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.AUTH_FROM_EMAIL ??
        process.env.CONTACT_FROM_EMAIL ??
        "Glisten AI <onboarding@resend.dev>",
      to: [to],
      subject,
      text,
    }),
  });

  if (!res.ok) throw new Error(`Resend responded ${res.status}`);
  return true;
}
