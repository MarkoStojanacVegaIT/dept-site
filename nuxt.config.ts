// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/google-fonts', ['@pinia/nuxt', {autoImports: ['defineStore, acceptHMRUpdate']}]],
  imports: {
    dirs: ['stores']
  },
  tailwindcss: {
    cssPath: '~/tailwind.css',
    injectPosition: 'last',
  }
})