const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: { unoptimized: true },
  basePath: '/sydenham', // Replace with your repo name if needed
};

// CommonJS export is required
module.exports = nextConfig;
