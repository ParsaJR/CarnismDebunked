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
      },
    },
    container: {
      padding: '1rem', 
      screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
          '2xl': '1200px', 
      },
      
  },
  plugins: [formsPlugin]
}
}