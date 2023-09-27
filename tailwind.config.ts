import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "Bg_Features": "url(/Images/BG_Features.png)",
        "Image_Rating_Grill": "url(/Images/Image_Rating_Grill.png)",
        "Subscribe_Bg_Iconssss": "url(/Icons/Subscribe_Bg_Iconssss.png)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xxs': { 'max': '375px' },
        'xs': { 'min': '375px', 'max': '576px' },
        'sm': { 'min': '576px', 'max': '768px' },
        'md': { 'min': '768px', 'max': '992px' },
        'lg': { 'min': '992px', 'max': '1200px' },
        'xl': { 'min': '1200px', 'max': '1400px' },
        'xxl': { 'min': '1400px', },
      },
    },
    fontFamily: {
      'poppins': ['Manrope-400', './public/Fonts/Manrope/static/Manrope-Regular.ttf', ],
      'raleway': ['Raleway-500', './public/Fonts/Raleway/static/Raleway-Medium.ttf', ],
      'quicksand': ['Quicksand-500', './public/Fonts/Quicksand/static/Quicksand-Medium.ttf', ],
      'inter-400': ['Inter-400', './public/Fonts/Inter/static/Inter-Regular.ttf', ],
      'inter-500': ['Inter-500', './public/Fonts/Inter/static/Inter-Medium.ttf', ],
      'inter-700': ['Inter-700', './public/Fonts/Inter/static/Inter-Bold.ttf', ],
      'mPLUS1p-400': ['MPLUS1p-400', './public/Fonts/M_PLUS_1p/MPLUS1p-Regular.ttf', ],
      'mPLUS1p-500': ['MPLUS1p-500', './public/Fonts/M_PLUS_1p/MPLUS1p-Medium.ttf', ],
      'mPLUS1p-700': ['MPLUS1p-700', './public/Fonts/M_PLUS_1p/MPLUS1p-Bold.ttf', ],
      'poppins-400': ['Poppins-400', './public/Fonts/Poppins/Poppins-Regular.ttf', ],
      'poppins-500': ['Poppins-500', './public/Fonts/Poppins/Poppins-Medium.ttf', ],
      'poppins-600': ['Poppins-600', './public/Fonts/Poppins/Poppins-SemiBold.ttf', ],
      'poppins-700': ['Poppins-700', './public/Fonts/Poppins/Poppins-Bold.ttf', ],
      
    }
  },
  plugins: [],
}
export default config
