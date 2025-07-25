const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/sydenham' : '',
  assetPrefix: isProd ? '/sydenham/' : '',
};

export default nextConfig;
