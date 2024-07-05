<script lang="ts" setup>
const mapStore = useMapStore();

const updateMarkers = async (e: any) => {
  const response = await $fetch<any>('/api/distance-matrix', {
    method: 'POST',
    body: {
      origin: mapStore.getUserMarker.address,
      destination: e.formatted_address,}
  })

  mapStore.addMarker({
    address: e.formatted_address,
    coords: {
      lat: e.geometry.viewport.Wh.hi,
      lng: e.geometry.viewport.Gh.hi,
    },
    distance: response.rows[0].elements[0].distance.text,
  });
};
</script>

<template>
  <UCard>
    <template #header>Destinos</template>
    <GMapAutocomplete
      class="w-full p-2 rounded"
      placeholder="Ingresa aquí tu dirección destino"
      @place_changed="updateMarkers"
    >
    </GMapAutocomplete>
  </UCard>

  <UCard>
    <template #header>Mis marcadores</template>
    <ul
      class="flex flex-col w-full gap-4 overflow-x-hidden max-h-max overscroll-auto"
    >
      <li
        class="flex items-center justify-between gap-2 text-sm"
        v-for="(marker, idx) in mapStore.getNearbyMarkers"
        :key="idx"
      >
        <p>{{ marker.address }}</p>
        <UButton size="sm" color="red" @click="mapStore.deleteMarker(idx)">Borrar</UButton>
      </li>
    </ul>
  </UCard>
</template>
