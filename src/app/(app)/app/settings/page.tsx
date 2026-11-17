import type { Metadata } from "next";

import SignOutButton from "@/components/app/SignOutButton";
import { requireSession } from "@/lib/session";

export const metadata: Metadata = { title: "Settings" };

export default async function SettingsPage() {
  const { user } = await requireSession("/app/settings");

  const rows = [
    { label: "Name", value: user.name || "Not set" },
    { label: "Email", value: user.email },
    {
      label: "Member since",
      value: new Date(user.createdAt).toLocaleDateString("en", {
        dateStyle: "medium",
      }),
    },
  ];

  return (
    <section>
      <h1 className="text-3xl font-medium md:text-4xl">Settings</h1>
      <dl className="mt-8 max-w-2xl divide-y divide-slate-100/10 rounded-xl border border-blue-100/15 bg-slate-950/60">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr]"
          >
            <dt className="text-sm text-slate-400">{row.label}</dt>
            <dd className="break-words text-white">{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 max-w-2xl text-sm text-slate-400">
        Billing, API keys and team settings arrive in later updates.
      </p>
      <SignOutButton className="mt-6" />
    </section>
  );
}
