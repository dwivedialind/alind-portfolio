import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/alind-portfolio",
  assetPrefix: "/alind-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
