/** @type {import('next').NextConfig} */
const nextConfig = {
   poweredByHeader: false,
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
