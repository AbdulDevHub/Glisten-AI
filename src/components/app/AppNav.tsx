"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { appNav } from "@/content/app";

/** App sidebar links: a wrapping row on phones, a column on larger screens. */
export default function AppNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="App">
      <ul className="flex flex-wrap gap-1 md:flex-col">
        {appNav.map((item) => {
          const active =
            item.href === "/app"
              ? pathname === "/app"
              : pathname.startsWith(item.href);
          return (
            <li key={item.href} className="shrink-0">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "block rounded-lg px-2.5 py-2 text-sm outline-none ring-yellow-300 transition-colors focus-visible:ring-2 md:px-3",
                  active
                    ? "bg-blue-200/10 text-yellow-300"
                    : "text-slate-300 hover:bg-slate-100/5 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
