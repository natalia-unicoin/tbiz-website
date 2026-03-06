const { i18n } = require('./next-i18next.config');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  i18n,
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  poweredByHeader: false,
  async redirects() {
    return []
  },
  async rewrites() {
    return [
      {
        source: '/en/:path*',
        destination: '/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.unicorns.news',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        pathname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(audio|fonts|images|videos)/:path*',
        headers: [
          {
            key: 'cache-control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  }
});

module.exports = nextConfig;
