import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/personal-website",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
