import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  images: {
    // Next 16 only allows quality 75 by default; the design uses 90 and 100.
    qualities: [75, 90, 100],
  },
  async redirects() {
    return [
      // The old placeholder case studies became use-case stories in phase 2.
      {
        source: "/case-study/:slug*",
        destination: "/use-cases",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  // Plugins are named as strings so Turbopack can load them.
  options: { remarkPlugins: ["remark-gfm"] },
});

export default withMDX(nextConfig);
