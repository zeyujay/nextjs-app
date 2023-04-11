/** @type {import('next').NextConfig} */
const fs = require("fs");
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponents: true,
  },
  output: "standalone",
};

module.exports = nextConfig;
