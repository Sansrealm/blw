/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/blw',
  assetPrefix: '/blw/',
  // This is important - it tells Next.js to generate an index.html file
  trailingSlash: true,
};

module.exports = nextConfig;