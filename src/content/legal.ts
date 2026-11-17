/** Legal pages; each body lives in src/content/legal/<slug>.mdx. */
export type LegalPage = {
  slug: "terms" | "privacy" | "refunds";
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD) of the last change. Update it with every edit. */
  updated: string;
};

export const legalPages: Record<LegalPage["slug"], LegalPage> = {
  terms: {
    slug: "terms",
    title: "Terms of Service",
    description: "The terms for using Glisten AI.",
    updated: "2026-11-08",
  },
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    description:
      "What data Glisten AI collects, why, and who it's shared with.",
    updated: "2026-11-08",
  },
  refunds: {
    slug: "refunds",
    title: "Refund Policy",
    description: "How refunds work for Glisten AI plans, credits and top-ups.",
    updated: "2026-11-08",
  },
};
