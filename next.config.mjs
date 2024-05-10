/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.ltwebstatic.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
