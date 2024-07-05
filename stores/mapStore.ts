type Coords = {
  lat: string | number;
  lng: string | number;
};

type Marker = {
  address: string;
  coords: Coords;
  distance?: string;
};

export const useMapStore = defineStore(
  "map",
  () => {
    const userMarker = ref<Marker>({
      address: "",
      coords: {
        lat: 0,
        lng: 0,
      },
      distance: "0km",
    });
    const nearbyMarkers = ref<Marker[]>([]);

    const getUserMarker = computed(() => {
      console.log({ marker: userMarker.value });
      return userMarker.value;
    });
    const getNearbyMarkers = computed(() => {
      return nearbyMarkers.value;
    });
    const getNearbyAddresses = computed(() => {
      const addressesText = nearbyMarkers.value.map((marker, idx) => {
        return `Parada ${idx + 1}: ${marker.address}. Distancia del origen: ${
          marker.distance
        }`;
      });

      return addressesText.join("\n");
    });

    const updateUserMarker = (dto: Marker) => {
      userMarker.value.address = dto.address;
      userMarker.value.coords.lat = dto.coords.lat;
      userMarker.value.coords.lng = dto.coords.lng;
    };

    const addMarker = (marker: Marker) => {
      nearbyMarkers.value.push(marker);
    };

    const deleteMarker = (index: number) => {
      nearbyMarkers.value.splice(index, 1);
    };

    return {
      userMarker,
      nearbyMarkers,
      getUserMarker,
      getNearbyMarkers,
      getNearbyAddresses,
      addMarker,
      updateUserMarker,
      deleteMarker,
    };
  },
  {
    persist: true,
  }
);
