"use client";

import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { authClient } from "@/lib/auth-client";
import type { SocialProvider } from "@/lib/auth-providers";

const inputClass =
  "mt-2 block min-h-11 w-full rounded-lg border border-slate-100/20 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:border-yellow-200/60 focus:outline-none focus:ring-2 focus:ring-yellow-300/40";

const buttonClass =
  "relative inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors hover:border-yellow-200/40 hover:text-yellow-300 focus-visible:ring-2 disabled:opacity-60";

const providerIcons: Record<SocialProvider, React.ReactNode> = {
  github: <FaGithub aria-hidden />,
  google: <FaGoogle aria-hidden />,
};

/** Better Auth sends these codes back in ?error= when a link fails. */
const linkErrors: Record<string, string> = {
  INVALID_TOKEN: "That sign-in link is invalid. Request a new one below.",
  EXPIRED_TOKEN: "That sign-in link has expired. Request a new one below.",
};

type Props = {
  next: string;
  providers: { id: SocialProvider; label: string }[];
  linkError?: string;
};

export default function SignInForm({ next, providers, linkError }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState(
    linkError
      ? (linkErrors[linkError] ?? "Sign-in failed. Please try again.")
      : "",
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("sending");
    const { error } = await authClient.signIn.magicLink({
      email: email.trim(),
      callbackURL: next,
      errorCallbackURL: `/sign-in?next=${encodeURIComponent(next)}`,
    });
    if (error) {
      setStatus("idle");
      setError(error.message ?? "We couldn't send the link. Please try again.");
      return;
    }
    setStatus("sent");
  }

  async function onSocial(provider: SocialProvider) {
    setError("");
    const { error } = await authClient.signIn.social({
      provider,
      callbackURL: next,
      errorCallbackURL: `/sign-in?next=${encodeURIComponent(next)}`,
    });
    if (error) setError(error.message ?? "Sign-in failed. Please try again.");
  }

  if (status === "sent") {
    return (
      <div role="status" className="mt-8 text-center">
        <p className="text-lg text-white">Check your inbox</p>
        <p className="mt-2 text-slate-300">
          We sent a sign-in link to{" "}
          <span className="text-yellow-200">{email.trim()}</span>. It expires in
          10 minutes.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-blue-200 underline hover:text-yellow-300"
        >
          Use a different email
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <form onSubmit={onSubmit} className="grid gap-4">
        <label className="block">
          <span className="text-sm text-slate-300">Email</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </label>
        <button
          type="submit"
          disabled={status === "sending"}
          className={buttonClass}
        >
          {status === "sending" ? "Sending…" : "Email me a sign-in link"}
        </button>
      </form>

      {providers.length > 0 && (
        <>
          <div className="my-6 flex items-center gap-3 text-sm text-slate-500">
            <span className="h-px flex-1 bg-slate-100/15" />
            or
            <span className="h-px flex-1 bg-slate-100/15" />
          </div>
          <div className="grid gap-3">
            {providers.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => onSocial(p.id)}
                className={buttonClass}
              >
                {providerIcons[p.id]}
                Continue with {p.label}
              </button>
            ))}
          </div>
        </>
      )}

      {error && (
        <p role="alert" className="mt-4 text-center text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
