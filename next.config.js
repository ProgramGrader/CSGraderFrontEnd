/** @type {import('next').NextConfig} */
const path = require("path");
require('@next/bundle-analyzer')
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  enabled: process.env.ANALYZE === 'true',
  experimental: {
    images: {
      unoptimized: true
    }
  }
}

module.exports = nextConfig
