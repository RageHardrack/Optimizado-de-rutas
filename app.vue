<script setup lang="ts">
import { marked } from "marked";
const mapStore = useMapStore();

const difyRes = ref("")
const isLoading = ref(false);

const setPlace = (e: any) => {
  mapStore.updateUserMarker({
    address: e.formatted_address,
    coords: {
      lat: e.geometry.viewport.Wh.hi,
      lng: e.geometry.viewport.Gh.hi,
    },
  });
};

const askDify = async () => {
  isLoading.value = true;
  const response = await $fetch<any>("/api/dify", {
    method: "POST",
    body: {
      origen: mapStore.userMarker.address,
      destinos: mapStore.getNearbyAddresses,
    },
  });

  difyRes.value = await marked(response.data.outputs.text);
  isLoading.value = false;
};

useHead({
  title: "Optimizado de Rutas | Daniel Colmenares",
});
</script>

<template>
  <main>
    <section class="grid w-screen h-screen grid-cols-4">
      <ClientOnly>
        <GoogleMap class="col-span-3" />
      </ClientOnly>

      <div class="flex flex-col col-span-1 gap-4 p-4">
        <UCard>
          <template #header>Origen</template>
          <GMapAutocomplete
            placeholder="Ingresa aquí tu dirección de origen"
            @place_changed="setPlace"
            class="w-full p-2 rounded"
          >
          </GMapAutocomplete>
        </UCard>

        <Markers />
        <UButton :loading="isLoading" block @click="askDify">Enviar</UButton>
        <MarkersOptimized :markdown="difyRes" />
      </div>
    </section>
  </main>
</template>
