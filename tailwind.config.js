import { SCREEN_BREAKPOINTS } from './src/lib/theme/screenBreakpoints.js'

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      screens: SCREEN_BREAKPOINTS,
    },
  },
  plugins: [],
}
