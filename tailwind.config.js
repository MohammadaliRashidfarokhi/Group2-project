import { SCREEN_BREAKPOINTS } from './src/lib/theme/screenBreakpoints.ts'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      screens: SCREEN_BREAKPOINTS,
      colors: {
        'muted': {
          DEFAULT: '#f4f4f5',
          foreground: '#71717a',
        },
      },
    },
  },
  plugins: [],
}
