import type { Metadata } from "next";

import ProsePage from "@/components/ProsePage";
import { formatDate } from "@/content/blog";
import { legalPages, type LegalPage as LegalPageData } from "@/content/legal";

export function legalMetadata(slug: LegalPageData["slug"]): Metadata {
  const page = legalPages[slug];
  return { title: page.title, description: page.description };
}

/** Renders one legal page from src/content/legal/<slug>.mdx. */
export default async function LegalPage({
  slug,
}: {
  slug: LegalPageData["slug"];
}) {
  const page = legalPages[slug];
  const { default: Content } = await import(`@/content/legal/${slug}.mdx`);

  return (
    <ProsePage
      eyebrow="Legal"
      heading={page.title}
      intro={
        <p>
          Last updated{" "}
          <time dateTime={page.updated}>{formatDate(page.updated)}</time>
        </p>
      }
    >
      <Content />
    </ProsePage>
  );
}
