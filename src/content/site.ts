import type { ImageAsset, NavItem } from "./types";

export const site = {
  name: "Glisten.AI",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://glisten-ai-dark.vercel.app",
  description:
    "Glisten AI critiques your UI screenshots and turns the fixes into clean React and Tailwind code.",
  ogImage: {
    src: "/images/og-image.png",
    alt: "Glisten.AI - an AI design critic and UI generator",
    width: 778,
    height: 454,
  } satisfies ImageAsset,
  /** Header links. "Get Started" points to pricing until sign-up exists (phase 3). */
  navigation: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "Get Started", href: "/pricing", cta: true },
  ] satisfies NavItem[],
  footerNavigation: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "Changelog", href: "/changelog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Refunds", href: "/refunds" },
  ] satisfies NavItem[],
};

/** Shown on pages that describe the product before it launches. */
export const launchNotice =
  "Glisten AI is in development. These pages describe the product as it will work at launch, and they change as features ship.";
