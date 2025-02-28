import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "encrypted-tbn0.gstatic.com"],
  },
};

export default nextConfig;
