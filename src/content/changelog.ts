/** Shipped changes, newest first. Only list things that are actually live. */
export type ChangelogEntry = {
  /** ISO date (YYYY-MM-DD). */
  date: string;
  title: string;
  changes: string[];
};

export const changelog: ChangelogEntry[] = [
  {
    date: "2026-11-08",
    title: "The marketing site",
    changes: [
      "New pages: Features, Pricing, Docs, Blog (with an RSS feed), Changelog, About, Contact, and the Terms, Privacy and Refund policies.",
      "Rewrote the homepage copy around the critic and the generator.",
      "Replaced the placeholder case studies with example workflows, and the integration logos with the tools Glisten actually works with.",
    ],
  },
  {
    date: "2026-11-06",
    title: "A new foundation",
    changes: [
      "Moved to Next.js 16 and React 19.",
      "Removed the headless CMS: site content now lives in the codebase, so pages build without network calls.",
      "Fixed the homepage hero staying invisible for visitors who prefer reduced motion.",
    ],
  },
];
