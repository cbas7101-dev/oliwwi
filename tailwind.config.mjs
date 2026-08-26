/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
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
        soft: '0 10px 30px -14px rgba(74, 14, 150, 0.28)',
        card: '0 22px 60px -30px rgba(74, 14, 150, 0.38)'
      }
    }
  },
  plugins: []
};
