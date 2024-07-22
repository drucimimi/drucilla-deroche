/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "api.github.com",
            pathname: '/images/**'
          },
          {
            protocol: "https",
            hostname: "api.linkedin.com",
            pathname: '/images/**'
          }
        ]
      },
};

export default nextConfig;
