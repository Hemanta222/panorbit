/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "panorbit.in",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
};

module.exports = nextConfig;
