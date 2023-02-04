/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'http://localhost:3000/',
      'localhost',
      "banglar-big-store.s3.amazonaws.com",
      "encrypted-tbn0.gstatic.com",
      "banglar-big-store.s3.ap-northeast-1.amazonaws.com"
    ],
  },
};

module.exports = nextConfig;
