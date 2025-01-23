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
};

export default nextConfig;
