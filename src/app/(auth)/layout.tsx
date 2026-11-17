import Link from "next/link";

import StarGrid from "@/components/StarGrid";
import WordMark from "@/components/WordMark";

/** Sign-in pages: a centred card over the star grid, without the site chrome. */
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative grid min-h-dvh place-items-center overflow-hidden px-4 py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-24 grid place-items-center"
      >
        <StarGrid />
      </div>
      <div className="relative w-full max-w-md">
        <Link
          href="/"
          aria-label="Glisten AI home"
          className="mx-auto mb-8 block w-fit"
        >
          <WordMark />
        </Link>
        {children}
      </div>
    </main>
  );
}
