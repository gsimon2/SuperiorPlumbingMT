/** @type {import('next').NextConfig} */
const nextConfig = {
   // output: 'export'
   compiler: {
      emotion: true,
    },
    images: {
      domains: [
         'seal-alaskaoregonwesternwashington.bbb.org'
      ]
    }
};

export default nextConfig;
