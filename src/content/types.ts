import type { ReactNode } from "react";

/** A local image in /public with its intrinsic size (keeps layout stable). */
export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type NavItem = LinkItem & {
  /** Render as the pill-shaped call-to-action button. */
  cta?: boolean;
};

/** Rich content is plain JSX (paragraphs, <em>, <br />), so slices stay presentational. */
export type Rich = ReactNode;
