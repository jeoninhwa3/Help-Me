/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wxpzjwngrtftlrfliswe.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
