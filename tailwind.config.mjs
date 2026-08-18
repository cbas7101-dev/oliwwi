/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#e92672',
          dark: '#bf1455',
          soft: '#f8a8c7',
          pale: '#ffe3ed'
        },
        cream: '#fff8f5',
        blush: '#fceef1',
        ink: '#21171b',
        muted: '#74666c'
      },
      fontFamily: {
        display: ['Fredoka Variable', 'Arial Rounded MT Bold', 'sans-serif'],
        body: ['Nunito Sans Variable', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 16px 40px -20px rgba(151, 24, 76, 0.34)',
        card: '0 26px 70px -38px rgba(100, 20, 54, 0.42)'
      }
    }
  },
  plugins: []
};
