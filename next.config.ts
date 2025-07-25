const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: { unoptimized: true },
  basePath: '/your-repo-name', // Replace with your repo name
};

export default nextConfig;
