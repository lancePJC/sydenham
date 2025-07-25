const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: { unoptimized: true },
  basePath: '/sydenham', // Replace with your repo name
};

export default nextConfig;
