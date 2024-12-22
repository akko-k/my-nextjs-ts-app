/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // appディレクトリを有効化
  },
  srcDir: 'src', // srcをプロジェクトのルートとして指定
  serverActions: true,
};

module.exports = nextConfig;
