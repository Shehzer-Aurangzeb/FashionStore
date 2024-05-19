import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
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
