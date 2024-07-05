<script lang="ts" setup>
const mapStore = useMapStore();

const zoom = ref(15);

const handleMarkerClick = () => {
  alert("Esta es tu ubicación.");
};
</script>

<template>
  <GMapMap :center="mapStore.getUserMarker.coords" :zoom="zoom" style="width: 100">
    <GMapMarker :position="mapStore.getUserMarker.coords" @click="handleMarkerClick" />

    <GMapMarker
      v-for="(marker, idx) in mapStore.getNearbyMarkers"
      :key="idx"
      :position="marker.coords"
    />
  </GMapMap>
</template>
