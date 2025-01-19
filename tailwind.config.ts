import type { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'sans-serif'],
      },
      colors: {
        'black-primary': '#363636',
        'gray-primary': '#828282',
      },
    },
  },
  plugins: [],
} satisfies Config;
