import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [new URL('https://res.cloudinary.com/**')],
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
