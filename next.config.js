/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'https://banglar-big-store.onrender.com/',
      'localhost',
      "banglar-big-store.s3.amazonaws.com",
      "encrypted-tbn0.gstatic.com",
      "www.transparentpng.com",
      "freepngimg.com",
      "banglar-big-store.s3.ap-northeast-1.amazonaws.com"
      "freepngimg.com"
    ],
  },
};

module.exports = nextConfig;
