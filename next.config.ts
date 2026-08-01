import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Reduced duplicate re-renders in dev
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
