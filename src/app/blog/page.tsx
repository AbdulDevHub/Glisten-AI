import type { Metadata } from "next";
import Link from "next/link";

import Bounded from "@/components/Bounded";
import PageHeader from "@/components/PageHeader";
import { formatDate, posts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on building Glisten AI, design critique and AI UI generation.",
  alternates: { types: { "application/rss+xml": "/blog/rss.xml" } },
};

export default function BlogIndexPage() {
  return (
    <Bounded>
      <PageHeader eyebrow="Blog" heading="Notes from the build">
        <p>
          What we&rsquo;re building, why, and what we learn along the way.{" "}
          <a href="/blog/rss.xml" className="underline hover:text-white">
            RSS feed
          </a>
        </p>
      </PageHeader>

      <div className="mt-16 grid w-full max-w-3xl gap-10">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="glass-container relative rounded-lg bg-gradient-to-b from-gray-900 to-gray-950 p-6"
          >
            <time dateTime={post.date} className="text-sm text-slate-400">
              {formatDate(post.date)}
            </time>
            <h2 className="mt-2 text-2xl md:text-3xl">
              <Link
                href={`/blog/${post.slug}`}
                className="after:absolute after:inset-0 hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mt-3 text-slate-300">{post.description}</p>
          </article>
        ))}
      </div>
    </Bounded>
  );
}
