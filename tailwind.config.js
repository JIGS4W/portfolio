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
        bg: '#e9e7e1',
        accent: '#f5e642',
        blue: '#2563eb',
        pink: '#f472b6',
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        display: ['Bebas Neue', 'Impact', 'sans-serif'],
      },
      boxShadow: {
        brutal: '6px 6px 0px #000',
        'brutal-sm': '4px 4px 0px #000',
        'brutal-lg': '8px 8px 0px #000',
      },
    },
  },
  plugins: [],
}
