/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export için gerekli ayarlar
  images: {
    unoptimized: true, // Static export için image optimization kapatılmalı
  },
  trailingSlash: true, // Static hosting için URL'lerin sonuna / ekler
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
