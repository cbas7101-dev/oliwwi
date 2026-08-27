/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        oliwwi: {
          50: '#FEF0F8',
          100: '#FDDDF0',
          200: '#FCBBE0',
          300: '#FA8FCC',
          400: '#F759B4',
          500: '#F641A9',
          600: '#F5299E',
          700: '#DB0A82',
          800: '#AB0865',
          900: '#7F064B',
          950: '#4E042E'
        },
        primary: {
          DEFAULT: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
          dark: 'rgb(var(--color-primary-dark-rgb) / <alpha-value>)',
          soft: 'rgb(var(--color-primary-soft-rgb) / <alpha-value>)',
          pale: 'rgb(var(--color-primary-pale-rgb) / <alpha-value>)'
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent-rgb) / <alpha-value>)',
          pale: 'rgb(var(--color-accent-pale-rgb) / <alpha-value>)'
        },
        bg: 'rgb(var(--color-bg-rgb) / <alpha-value>)',
        surface: 'rgb(var(--color-surface-rgb) / <alpha-value>)',
        ink: 'rgb(var(--color-text-rgb) / <alpha-value>)',
        muted: 'rgb(var(--color-text-muted-rgb) / <alpha-value>)',
        brand: {
          DEFAULT: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
          dark: 'rgb(var(--color-primary-dark-rgb) / <alpha-value>)',
          soft: 'rgb(var(--color-primary-soft-rgb) / <alpha-value>)',
          pale: 'rgb(var(--color-primary-pale-rgb) / <alpha-value>)'
        },
        cream: 'rgb(var(--color-bg-rgb) / <alpha-value>)',
        blush: 'rgb(var(--color-primary-pale-rgb) / <alpha-value>)'
      },
      fontFamily: {
        display: ['Fredoka Variable', 'Arial Rounded MT Bold', 'sans-serif'],
        body: ['Nunito Sans Variable', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px -14px rgba(127,6,75, 0.28)',
        card: '0 22px 60px -30px rgba(78,4,46, 0.32)'
      }
    }
  },
  plugins: []
};
