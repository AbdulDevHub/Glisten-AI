"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { docs } from "@/content/docs";

/** Docs sidebar: a column on desktop, a wrapping row of links on mobile. */
export default function DocsNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Docs" className="md:sticky md:top-8 md:self-start">
      <Link href="/docs" className="text-lg font-medium text-yellow-500">
        Docs
      </Link>
      <ul className="mt-2 flex flex-wrap gap-x-4 md:flex-col">
        {docs.map((doc) => {
          const href = `/docs/${doc.slug}`;
          const active = pathname === href;
          return (
            <li key={doc.slug}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "inline-flex min-h-11 items-center transition-colors hover:text-white",
                  active ? "text-white" : "text-slate-400",
                )}
              >
                {doc.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
