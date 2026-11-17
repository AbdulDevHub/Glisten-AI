import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import { formatDate, getPost, posts } from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { default: Content } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <Bounded as="article">
      <header className="relative grid place-items-center text-center">
        <StarGrid />
        <p className="text-sm text-slate-400">
          <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
          {post.author}
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-5xl font-medium md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 max-w-xl text-balance text-lg text-slate-300">
          {post.description}
        </p>
      </header>
      <div className="prose prose-lg prose-slate prose-invert mt-12 prose-headings:font-medium prose-a:text-yellow-300">
        <Content />
      </div>
      <Link
        href="/blog"
        className="mt-12 inline-flex min-h-11 items-center text-slate-300 hover:text-white"
      >
        ← All posts
      </Link>
    </Bounded>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;
