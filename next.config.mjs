/** @type {import('next').NextConfig} */
const nextConfig = {
       images: {
           remotePatterns: [
               {
                   protocol: 'https',
                   hostname: 'res.cloudinary.com',
                   port: ''
               },
               {
                   protocol: 'https',
                   hostname: 'previews.123rf.com',
                   port: ''
               },
               {
                   protocol: 'https',
                   hostname: 'icon-library.com',
                   port: ''
               },
   
           ]
       }
   };
   
   export default nextConfig;
   