/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "ehsuvlyzdsqrkdsucwiv.supabase.co",
      },
    ],
    domains: ["img.clerk.com"], // اضافه کردن دامنه مورد نظر
  },
};

export default nextConfig;
