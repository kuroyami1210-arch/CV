/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#141414',
        coal: '#161616',
        card: '#1c1c1e',
        accent: '#ff5e00',
        accentLight: '#ff8c00',
        muted: '#9c9c9c',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
