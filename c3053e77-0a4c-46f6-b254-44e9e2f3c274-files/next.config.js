/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['mapbox.com', 'api.mapbox.com'],
  },
};

module.exports = nextConfig;