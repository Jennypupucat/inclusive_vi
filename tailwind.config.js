/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#C7E5FF',
        'custom-purple': '#E5BEF0',
        'custom-yellow': '#FDF09F',
        'custom-green': '#90EE90'
      },
    },
  },
  plugins: [],
} 