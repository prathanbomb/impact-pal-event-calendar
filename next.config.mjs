/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Firebase hosting will handle trailing slashes
  trailingSlash: true,
};

export default nextConfig;
