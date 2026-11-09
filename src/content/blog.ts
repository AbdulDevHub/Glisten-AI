/**
 * Blog posts, newest first. The body of each lives in
 * src/content/blog/<slug>.mdx; add an entry here when you add a file.
 */
export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  author: string;
};

export const posts: BlogPost[] = [
  {
    slug: "pricing-without-a-free-tier",
    title: "Why Glisten has no free hosted tier",
    description:
      "Every AI run costs real money. Here's how BYOK and credits keep pricing honest.",
    date: "2026-11-08",
    author: "Abdul Khan",
  },
  {
    slug: "why-we-are-building-glisten",
    title: "Why we're building Glisten",
    description:
      "A design critic and a UI generator in one place, and the plan for getting there.",
    date: "2026-11-06",
    author: "Abdul Khan",
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
