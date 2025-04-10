/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/blw',
  assetPrefix: '/blw/',
};

module.exports = nextConfig;
