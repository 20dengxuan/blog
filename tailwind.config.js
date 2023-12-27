/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      typography: ({theme}) => ({
        DEFAULT: {
          css: {
            '--tw-prose-pre-bg': '#f1f5f9'
          }
        }
      })
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

