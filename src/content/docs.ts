/**
 * Docs pages. The body of each lives in src/content/docs/<slug>.mdx;
 * add an entry here (in sidebar order) when you add a file.
 */
export type DocEntry = { slug: string; title: string; description: string };

export const docs: DocEntry[] = [
  {
    slug: "getting-started",
    title: "Getting started",
    description: "Create a project and run your first critique and generation.",
  },
  {
    slug: "critic",
    title: "The critic",
    description: "Upload or capture a UI and read the pinned issues and score.",
  },
  {
    slug: "generator",
    title: "The generator",
    description: "Generate React + Tailwind code, iterate in chat and export.",
  },
  {
    slug: "credits",
    title: "Plans and credits",
    description: "What each action costs and how credits renew.",
  },
  {
    slug: "byok",
    title: "Bring your own key",
    description: "Use your own Claude or OpenAI API key on the free plan.",
  },
  {
    slug: "faq",
    title: "FAQ",
    description: "Privacy, accuracy, supported formats and more.",
  },
];

export function getDoc(slug: string) {
  return docs.find((doc) => doc.slug === slug);
}
