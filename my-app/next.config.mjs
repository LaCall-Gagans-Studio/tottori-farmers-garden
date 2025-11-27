import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 外部ドメインを許可する設定
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // ここで Unsplash のホスト名を許可
        // pathname: '/**', // 必要に応じてパスを制限することもできますが、今回は不要
      },
    ],
  },
  // Your Next.js config here
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
