// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    experimental: {
      search: {
        indexed: true,
        options: {
          fields: ['title'],
          storeFields: ['title'],
          searchOptions: {
            prefix: true,
            fuzzy: 0.2,
            boost: {
              title: 4,
            }
          }
        }
      },
    },
    navigation: {
      fields: ['title', 'create_time', 'cover', 'des']
    },
    highlight: {
      theme: 'github-light',
      preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml'],
    },
  },
})
