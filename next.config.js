/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "applore-dev-projects-1.s3.amazonaws.com",
            "applore-dev-projects-1.s3.ap-south-1.amazonaws.com",
            "i.postimg.cc",
            "localhost",
            // Add more domains if needed
        ],
    },

    env: {
        backendUrl: "https://ill-pink-jay-gown.cyclic.app/api",
        // backendUrl: "http://localhost:9000/api",
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
};



module.exports = nextConfig;
