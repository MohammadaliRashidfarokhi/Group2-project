import { SCREEN_BREAKPOINTS } from './src/lib/theme/screenBreakpoints.ts'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      screens: SCREEN_BREAKPOINTS,
    },
  },
  plugins: [],
}
