import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true, // Helps with routing in GitHub Pages or Netlify
  images: {
    unoptimized: true, // Disable next/image optimization for static
  },
};

export default nextConfig;
