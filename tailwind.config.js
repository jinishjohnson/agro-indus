/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      '1xl': ['1.2rem', {
        lineHeight: '1.8rem',
        letterSpacing: '-0.001em',
        fontWeight: '400',
      }],
      '2xl': ['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      '3xl': ['2rem', {
        lineHeight: '2.25rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
      '2.4xl': ['1.2rem', {
        lineHeight: '2.23rem',
        letterSpacing: '-0.01em',
        fontWeight: '400',
      }],

      '4xl': ['5rem', {
        lineHeight: '2.6rem',
        letterSpacing: '-0.02em',
        fontWeight: '600',
      }],
    },
    extend: {},    
  },
  plugins: [
    
  ],
}