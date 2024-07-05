// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxtjs/leaflet",
    "@vueuse/nuxt",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  compatibilityDate: "2024-07-04",
  runtimeConfig: {
    googleMapsApiKey: process.env.NUXT_GOOGLE_MAPS_API_KEY,
    googleMapsApiBaseUrl: process.env.NUXT_GOOGLE_MAPS_API_BASE_URL,
    difyApiKey: process.env.NUXT_DIFY_API_KEY,
    difyBaseUrl: process.env.NUXT_DIFY_BASE_URL,
    difyProjectName: process.env.NUXT_DIFY_PROJECT_NAME,
    public: {
      publicGMapsApiKey: process.env.NUXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    },
  },
});
