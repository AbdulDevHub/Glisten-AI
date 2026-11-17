import type { Metadata } from "next";
import Link from "next/link";

import { docs } from "@/content/docs";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "How to use Glisten AI: the critic, the generator, credits and bringing your own API key.",
};

export default function DocsIndexPage() {
  return (
    <>
      <h1 className="mt-10 text-5xl font-medium md:text-7xl">Docs</h1>
      <p className="mt-6 max-w-xl text-lg text-slate-300">
        Everything you need to critique, generate and ship with Glisten.
      </p>
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {docs.map((doc) => (
          <div
            key={doc.slug}
            className="glass-container relative rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-4 transition-opacity hover:opacity-100 md:opacity-85"
          >
            <h2 className="text-xl">
              <Link
                href={`/docs/${doc.slug}`}
                className="after:absolute after:inset-0 hover:underline"
              >
                {doc.title}
              </Link>
            </h2>
            <p className="mt-2 text-slate-300">{doc.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
