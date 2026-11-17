import type { MetadataRoute } from "next";

import { posts } from "@/content/blog";
import { docs } from "@/content/docs";
import { site } from "@/content/site";
import { useCases } from "@/content/use-cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/features",
    "/pricing",
    "/docs",
    "/blog",
    "/changelog",
    "/use-cases",
    "/about",
    "/contact",
    "/terms",
    "/privacy",
    "/refunds",
  ];

  return [
    ...staticPaths.map((path) => ({ url: `${site.url}${path}` })),
    ...docs.map((doc) => ({ url: `${site.url}/docs/${doc.slug}` })),
    ...useCases.map((u) => ({ url: `${site.url}/use-cases/${u.slug}` })),
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: post.date,
    })),
  ];
}
