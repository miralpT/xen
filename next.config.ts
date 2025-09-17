import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/REPO_ADIN' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/REPO_ADIN/' : '',
};

export default nextConfig;
