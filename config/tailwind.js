//https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/stubs/defaultConfig.stub.js

module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false,
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      'max-2xl': { max: '1535px' },
      'max-xl': { max: '1279px' },
      'max-lg': { max: '1023px' },
      'max-md': { max: '767px' },
      'max-sm': { max: '639px' },
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#2F2F2F',
        blue: {
          50: '#0097CC',
          100: '#006E8C',
          300: '#013A46',
        },
        'strong-blue': {
          50: '#F1FBFF',
          100: '#D4F3FF',
          300: '#26BFF3',
          400: '#00A8E2',
          500: '#0180AD',
          600: '#025C7C',
        },
        green: {
          50: '#07BD89',
          100: '#079B71',
        },
        gray: {
          100: '#F2F4F7',
          200: '#DCE0E2',
          300: '#C0C0C0',
          400: '#AFAFAF',
          500: '#6B6B6B',
          600: '#4E4E4E',
          700: '#292929',
          800: '#111111',
        },

      },
      backgroundImage: {
        'linear-50': 'linear-gradient(180deg, #01566B 4.48%, rgba(61, 198, 124, 0) 100%);',
        'linear-2': 'linear-gradient(89.94deg, #07BD89 2.92%, #006E8C 79.81%, #014251 103.13%);',
        'linear-1': 'linear-gradient(91.74deg, #04D99C 4.6%, #07BD89 65.6%, #006E8C 202.26%);',
        linear:
          'linear-gradient(180.78deg, #07BD89 0.67%, #006E8C 38.39%, #013A46 73.81%, #013A46 91.71%);',
      },

      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: '#0000EE',
            },
          },
        },
      }),

      fontFamily: {
        display: ['Avo', 'sans-serif'],
        sans: [
          'Montserrat',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "2rem",
          xl: "1.75rem",
          '2xl': "6.75rem"
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
