/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: false,
  },
  images: {
    domains: ["loremflickr.com"],
  },
};

module.exports = nextConfig;
