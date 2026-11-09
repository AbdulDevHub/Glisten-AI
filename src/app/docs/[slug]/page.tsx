import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { docs, getDoc } from "@/content/docs";

type Props = { params: Promise<{ slug: string }> };

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  if (!getDoc(slug)) notFound();
  const { default: Content } = await import(`@/content/docs/${slug}.mdx`);

  return (
    <article className="prose prose-lg prose-slate prose-invert mt-10 max-w-none prose-headings:font-medium prose-a:text-yellow-300">
      <Content />
    </article>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();
  return { title: `${doc.title} · Docs`, description: doc.description };
}

export function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug }));
}

export const dynamicParams = false;
