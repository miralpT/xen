import { NextConfig } from "next";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/xen" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/xen/" : "",
};

export default nextConfig;
