import type { Metadata } from "next";
import Link from "next/link";

import AppNav from "@/components/app/AppNav";
import SignOutButton from "@/components/app/SignOutButton";
import WordMark from "@/components/WordMark";
import { requireSession } from "@/lib/session";

export const metadata: Metadata = {
  title: { default: "Dashboard", template: "%s · Glisten AI" },
  robots: { index: false },
};

/** Signed-in shell: top bar with the account, sidebar nav, page content. */
export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await requireSession();

  return (
    <div className="min-h-dvh">
      <header className="border-b border-slate-100/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link
            href="/app"
            aria-label="Glisten AI dashboard"
            className="shrink-0"
          >
            <WordMark />
          </Link>
          <div className="flex min-w-0 items-center gap-3">
            <span className="hidden truncate text-sm text-slate-400 sm:block">
              {user.email}
            </span>
            <SignOutButton />
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 md:grid-cols-[12rem_1fr] md:gap-10 md:px-6 md:py-10">
        <aside className="min-w-0">
          <AppNav />
        </aside>
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
