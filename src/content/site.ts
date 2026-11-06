import type { ImageAsset, NavItem } from "./types";

export const site = {
  name: "Glisten.AI",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://glisten-ai-dark.vercel.app",
  description:
    "With Glisten.AI you save hours of time on wireframes, mockups, and final designs.",
  ogImage: {
    src: "/images/og-image.png",
    alt: "Glisten.AI - The Design Assistant of the Future",
    width: 778,
    height: 454,
  } satisfies ImageAsset,
  navigation: [
    { label: "Features", href: "/features" },
    { label: "Get Started", href: "/features", cta: true },
  ] satisfies NavItem[],
};
