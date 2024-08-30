// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'], // Added a comma here
  tailwindcss: {  configPath: 'tailwind.config.js', // Custom config file path  viewer: false,                    // Disable Tailwind Viewer
    }
})
