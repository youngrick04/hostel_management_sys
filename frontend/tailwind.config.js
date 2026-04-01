/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0f1729',
          800: '#1a2540',
          700: '#1e2d4d',
        },
        brand: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
        }
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
