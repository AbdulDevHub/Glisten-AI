import Link from "next/link";

import Notice from "@/components/Notice";
import { comingSoon } from "@/content/app";
import { requireSession } from "@/lib/session";

export default async function DashboardPage() {
  const { user } = await requireSession();
  const firstName = user.name?.split(" ")[0];

  return (
    <section>
      <h1 className="text-3xl font-medium md:text-4xl">
        Welcome{firstName ? `, ${firstName}` : ""}
      </h1>
      <p className="mt-3 max-w-2xl text-slate-300">
        Your account is ready. The critic and the generator arrive in the next
        updates; this dashboard will list your recent work.
      </p>
      <div className="max-w-2xl">
        <Notice />
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {(["critic", "generator"] as const).map((key) => (
          <li key={key}>
            <Link
              href={`/app/${key}`}
              className="block h-full rounded-xl border border-blue-100/15 bg-slate-950/60 p-5 outline-none ring-yellow-300 transition-colors hover:border-yellow-200/40 focus-visible:ring-2"
            >
              <h2 className="text-lg font-medium text-white">
                {comingSoon[key].title}
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                {comingSoon[key].body}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
