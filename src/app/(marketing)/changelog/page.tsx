import type { Metadata } from "next";

import Bounded from "@/components/Bounded";
import PageHeader from "@/components/PageHeader";
import { formatDate } from "@/content/blog";
import { changelog } from "@/content/changelog";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Everything that has shipped in Glisten AI, newest first.",
};

export default function ChangelogPage() {
  return (
    <Bounded>
      <PageHeader eyebrow="Changelog" heading="What's new">
        <p>Everything that has shipped, newest first.</p>
      </PageHeader>

      <ol className="mt-16 grid w-full max-w-3xl gap-12 border-l border-slate-100/20 pl-6 md:pl-10">
        {changelog.map((entry) => (
          <li key={entry.date} className="relative">
            <span
              aria-hidden
              className="absolute -left-[29px] top-2 size-2.5 rounded-full bg-yellow-300 md:-left-[45px]"
            />
            <time dateTime={entry.date} className="text-sm text-slate-400">
              {formatDate(entry.date)}
            </time>
            <h2 className="mt-1 text-3xl">{entry.title}</h2>
            <ul className="mt-4 grid list-disc gap-2 pl-5 text-slate-300 marker:text-slate-500">
              {entry.changes.map((change) => (
                <li key={change}>{change}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Bounded>
  );
}
