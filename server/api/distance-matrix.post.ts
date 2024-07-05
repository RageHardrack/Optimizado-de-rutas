export default defineEventHandler(async (event) => {
  const { googleMapsApiKey, googleMapsApiBaseUrl } = useRuntimeConfig();
  const { origin, destination } = await readBody(event);

  try {
    const response = await $fetch("/", {
      baseURL: googleMapsApiBaseUrl,
      method: "GET",
      params: {
        key: googleMapsApiKey,
        origins: [origin],
        destinations: [destination],
        mode: "walking",
      },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
});
