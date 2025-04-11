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
      {
        protocol: "https",   
        hostname: "img.clerk.com",
      },
    ],
    domains: ["img.clerk.com"], 
  },
};

export default nextConfig;
