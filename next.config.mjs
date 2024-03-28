/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ldhemfpbwknhtdvndqqk.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
