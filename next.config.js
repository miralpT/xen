/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/xen" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/xen/" : "",
  experimental: {
    serverComponentsExternalPackages: [],
  },
};

module.exports = nextConfig;
