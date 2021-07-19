module.exports = {
  // Add your installed PostCSS plugins here:
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-custom-properties-fallback': {
      importFrom: require.resolve('react-spring-bottom-sheet/defaults.json'),
    },
  },
}
