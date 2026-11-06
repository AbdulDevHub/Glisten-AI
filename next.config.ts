import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 only allows quality 75 by default; the design uses 90 and 100.
    qualities: [75, 90, 100],
  },
};

export default nextConfig;
