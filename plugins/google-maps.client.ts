import VueGoogleMaps from "@fawmi/vue-google-maps";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: config.public.publicGMapsApiKey,
      language: "es",
      libraries: "places", // necessary for places input
    },
  });
});
