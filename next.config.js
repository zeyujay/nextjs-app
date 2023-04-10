/** @type {import('next').NextConfig} */
const fs = require("fs");
const nextConfig = {
  experimental: {
    appDir: true,
    externalResolver: true,
  },
  output: "standalone",
};

module.exports = nextConfig;
