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
        // API_URL: process.env.API_URL || "http://localhost:3000",
        API_URL: process.env.API_URL_Main || "http://localhost:3000",
        DB_URL:process.env.DB_URL,
    },
};

export default nextConfig;
