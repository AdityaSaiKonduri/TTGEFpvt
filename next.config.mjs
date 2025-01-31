/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/home',
          destination: '/',
          permanent: true, // You can set it to false if it's a temporary redirect
        },
      ]
    },
  };
  
  export default nextConfig;
  