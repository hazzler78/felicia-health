import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
