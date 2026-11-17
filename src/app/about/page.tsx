import type { Metadata } from "next";

import Highlight from "@/components/Highlight";
import ProsePage from "@/components/ProsePage";
import About from "@/content/about.mdx";

export const metadata: Metadata = {
  title: "About",
  description: "Who builds Glisten AI, and the principles behind it.",
};

export default function AboutPage() {
  return (
    <ProsePage
      eyebrow="About"
      heading={
        <>
          A sharper eye for <Highlight>every UI</Highlight>
        </>
      }
      intro={<p>Why Glisten exists and how we build it.</p>}
    >
      <About />
    </ProsePage>
  );
}
