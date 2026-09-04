/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "seal-alaskaoregonwesternwashington.bbb.org",
         },
      ],
   },
};

export default nextConfig;
