/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
    domains: ["img.clerk.com"], // اضافه کردن دامنه مورد نظر
  },
};

module.exports = nextConfig;
