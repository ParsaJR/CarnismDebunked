import formsPlugin from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      textColor:{
        primary: "#42b883"
      }
    }
  },
  plugins: [formsPlugin]
}
