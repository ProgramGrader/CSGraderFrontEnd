/** @type {import('next').NextConfig} */
const path = require("path");
require('@next/bundle-analyzer')
const nextConfig = {
  webpack: (config) => {
    // this will override the experiments
    config.experiments = { topLevelAwait: true };
    // this will just update topLevelAwait property of config.experiments
    // config.experiments.topLevelAwait = true
    return config;
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  enabled: process.env.ANALYZE === 'true',
  experiments: {
    topLevelAwait: true
  }
}

module.exports = nextConfig
