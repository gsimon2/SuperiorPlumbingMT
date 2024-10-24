/** @type {import('next').NextConfig} */
const nextConfig = {
   // output: 'export'
   compiler: {
      emotion: true,
   },
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "seal-alaskaoregonwesternwashington.bbb.org",
         },
      ],
   },
   transpilePackages: ["mui-tel-input"],
};

export default nextConfig;
