import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // App Hosting expects a server build. Use standalone output so the adapter
  // can find the Next.js server in .next/standalone.
  output: 'standalone',
  // Keep trailingSlash to preserve existing URLs. You can set this to false
  // if you prefer non-slashed URLs; both work with SSR.
  trailingSlash: true,
  // You can keep unoptimized images or switch to default optimization.
  images: {
    unoptimized: true
  }
};

export default nextConfig;
