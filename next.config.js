const nextCompose = require('next-compose-plugins')
const { withFonts } = require('@moxy/next-common-files')
const TerserPlugin = require('terser-webpack-plugin')

const config = {
  // target: "serverless",
  images: {
    domains: [
      'source.unsplash.com',
      'ella-production-5ju3drtb2a-et.a.run.app',
      'storage.googleapis.com',
      'global-cdn.shipper.id',
    ],
  },
  // reactStrictMode: true,

  webpack: config => {
    const newConfig = config

    newConfig.resolve.alias = {
      ...config.resolve.alias,
    }

    if (process.env.NODE_ENV === 'production') {
      newConfig.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ]
    }

    return newConfig
  },
}
module.exports = nextCompose([withFonts()], config)
