/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#313131',
        blue: '#1B6FE9',
        'dark-blue': '#1453C8',
        'white-chalk': '#E6EAF1',
        'blue-chalk': '#BAD3F8',
        'neon-blue': '#70FBF3',
      },
      fontFamily: {
        IBM: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
