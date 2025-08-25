import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  reactStrictMode:true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hiboy.com.au',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  }
};

export default nextConfig;
