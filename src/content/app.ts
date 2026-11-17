/** Signed-in app navigation and placeholder copy for features still being built. */
export const appNav = [
  { label: "Dashboard", href: "/app" },
  { label: "Projects", href: "/app/projects" },
  { label: "Critic", href: "/app/critic" },
  { label: "Generator", href: "/app/generator" },
  { label: "Settings", href: "/app/settings" },
] as const;

export const comingSoon = {
  projects: {
    title: "Projects",
    body: "Projects will group your critiques and generated components, with version history for each design.",
  },
  critic: {
    title: "Critic",
    body: "Upload a screenshot or paste a URL and get pinned, prioritised design feedback with a score. This is the next feature to ship.",
  },
  generator: {
    title: "Generator",
    body: "Describe a component or start from a critique, and get a streamed React + Tailwind file with a live preview. It ships after the critic.",
  },
} as const;
