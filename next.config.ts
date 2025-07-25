const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  output: 'export',
  images: { unoptimized: true },
  basePath: '/sydenham', // this is your repo name
  assetPrefix: '/sydenham', // <-- this is the key
};
export default nextConfig;
