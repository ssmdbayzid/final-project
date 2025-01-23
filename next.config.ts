import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.ghoorilearning.com',

            },
            {
                protocol: 'https',
                hostname: 'api.ghoorilearning.com',
            }
        ],
    },
    env: {
        API_URL_Main: process.env.API_URL_Main ,
        DB_URL:process.env.DB_URL,
    },
};

export default nextConfig;
