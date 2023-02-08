/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'https://banglar-big-store.onrender.com/',
      'localhost',
      "banglar-big-store.s3.amazonaws.com",
      "encrypted-tbn0.gstatic.com",
<<<<<<< HEAD
      "www.transparentpng.com",
      "freepngimg.com"
=======
      "banglar-big-store.s3.ap-northeast-1.amazonaws.com"
>>>>>>> 1d1e4f07ebd5e7ec02545ff5dce9643fbd61fa70
    ],
  },
};

module.exports = nextConfig;
