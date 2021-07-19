const setting = {
  purge: ['*/pages/**/*.{js,ts,jsx,tsx}', '*/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        LOW_GOLD: '#F2ECE4',
        FIXED_WHITE_1: '#FFF',
        primary: {
          600: '#C86B64',
          500: '#D87C74',
          400: '#D19391',
          200: '#F4ACB4',
          100: '#FAC8C9',
        },
        'info-500': '#FFB400',
        accent_orange: '#DC551B',
        gray: {
          700: '#403837',
          500: '#7D7D7D',
          300: '#A9A9A9',
        },
        broken_white: '#F5F5F5',
        text_brown: '#2E201A',
        success: {
          500: '#15CF74',
        },
        danger: {
          500: '#C52A2A',
        },
      },
      screens: {
        mobile: '320px',
        tablet: '630px',
        laptop: '1024px',
        desktop: '1280px',
      },
      container: {
        center: true,
      },
      height: {
        half: '50vh',
        100: '35rem',
      },
      boxShadow: {
        flat: '2px 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = setting
