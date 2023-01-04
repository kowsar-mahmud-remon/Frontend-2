/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "banglar-big-store.s3.amazonaws.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

module.exports = nextConfig;
