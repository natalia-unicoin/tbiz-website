import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'tbiz-website'; // GitHub repo name

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
