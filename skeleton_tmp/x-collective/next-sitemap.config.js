/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  exclude: [
    '/404',
    '/es/404',
    '/about-us',
    '/es/about-us',
    '/partners',
    '/es/partners',
    '/swap',
    '/es/swap',
    '/_offline',
    '/es/_offline',
  ],
};

module.exports = config;
