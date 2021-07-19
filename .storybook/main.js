module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@react-theming/storybook-addon',
    // '@storybook/addon-postcss',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  typescript: {
    reactDocgen: 'none',
  },
}
