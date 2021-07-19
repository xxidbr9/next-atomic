module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['@babel/preset-typescript', 'next/babel'],
    plugins: [
      'babel-plugin-twin',
      'babel-plugin-macros',
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx'],
          alias: {
            '@assets/images': './src/assets/images',
            '@assets/css': './src/assets/css',
            '@assets/scss': './src/assets/scss',
            '@assets/svg': './src/assets/svg',
            '@assets/font': './src/assets/font',
            '@components/atoms': './src/components/atoms',
            '@components/molecules': './src/components/molecules',
            '@components/organisms': './src/components/organisms',
            '@components/templates': './src/components/templates',
            '@network': './src/network',
            '@features': './src/redux-state/features',
            '@redux-state': './src/redux-state',
            '@styles': './src/styles',
            '@utils/configs': './src/utils/configs',
            '@utils/constants': './src/utils/constants',
            '@utils/contexts': './src/utils/contexts',
            '@utils/libs': './src/utils/libs',
            '@utils/helpers': './src/utils/helpers',
            '@utils/mocks': './src/utils/mocks',
            '@utils/hooks': './src/utils/hooks',
            '@utils/types': './src/utils/types',
            '@base': '.',
            '@app': './src',
          },
        },
      ],
    ],
  }
}
