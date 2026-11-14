import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Modern format negotiation: AVIF offers 50% smaller sizes than JPEG, WebP as backup
    formats: ['image/avif', 'image/webp'],
    // 1-year client caching TTL for optimized immutable images
    minimumCacheTTL: 31536000,
    // Optimal device widths matching our Tailwind breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
