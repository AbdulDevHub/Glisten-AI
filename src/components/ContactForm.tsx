"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

import {
  contactLimits,
  contactTopics,
  type ContactTopic,
} from "@/content/contact";

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

const inputClass =
  "mt-2 block min-h-11 w-full rounded-lg border border-slate-100/20 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:border-yellow-200/60 focus:outline-none focus:ring-2 focus:ring-yellow-300/40";

export default function ContactForm() {
  const params = useSearchParams();
  const requested = params.get("topic");
  const initialTopic: ContactTopic = contactTopics.some(
    (t) => t.value === requested,
  )
    ? (requested as ContactTopic)
    : "general";
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ state: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus({
          state: "error",
          message: data.error ?? "Something went wrong. Please try again.",
        });
        return;
      }
      form.reset();
      setStatus({ state: "sent" });
    } catch {
      setStatus({
        state: "error",
        message:
          "Couldn't reach the server. Check your connection and try again.",
      });
    }
  }

  if (status.state === "sent") {
    return (
      <p
        role="status"
        tabIndex={-1}
        // Move focus here so screen readers announce the result.
        ref={(el) => el?.focus()}
        className="mt-12 text-center text-lg text-slate-300 outline-none"
      >
        Thanks, your message is on its way. We&rsquo;ll reply by email.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-12 grid w-full max-w-xl gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          Name
          <input
            name="name"
            required
            maxLength={contactLimits.name}
            autoComplete="name"
            className={inputClass}
          />
        </label>
        <label className="block">
          Email
          <input
            name="email"
            type="email"
            required
            maxLength={contactLimits.email}
            autoComplete="email"
            className={inputClass}
          />
        </label>
      </div>
      <label className="block">
        Topic
        <select
          name="topic"
          defaultValue={initialTopic}
          className={`${inputClass} [&>option]:bg-slate-900`}
        >
          {contactTopics.map((topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        Message
        <textarea
          name="message"
          required
          rows={6}
          maxLength={contactLimits.message}
          className={inputClass}
        />
      </label>
      {/* Honeypot for bots; hidden from people and screen readers. */}
      <div aria-hidden className="hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {status.state === "error" && (
        <p role="alert" className="text-red-300">
          {status.message}
        </p>
      )}
      <button
        type="submit"
        disabled={status.state === "sending"}
        className="relative inline-flex min-h-11 w-fit items-center rounded-full border border-blue-100/20 bg-blue-200/10 px-4 py-2 text-blue-200 outline-none ring-yellow-300 transition-colors hover:border-yellow-200/40 hover:text-yellow-300 focus:ring-2 disabled:opacity-60"
      >
        {status.state === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
