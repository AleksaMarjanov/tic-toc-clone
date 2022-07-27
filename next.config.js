/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
    'pbs.twimg.com', 
    'lh3.googleusercontent.com'],
  },
  swcMinify: true,
}

module.exports = nextConfig
