import formsPlugin from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      textColor: {
        primary: '#42b883'
      },
      backgroundColor: {
        section: '#6c757d',
        body: '#19191c'
      },
      screens: {
        'xs': '440px'
      }
    },
  },
  plugins: [formsPlugin]
}
