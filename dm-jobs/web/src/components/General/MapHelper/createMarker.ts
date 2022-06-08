const infowindow: google.maps.InfoWindow = new google.maps.InfoWindow();

export interface MarkerCallbackInterface {
  (marker: google.maps.Marker): void;
}

export const createMarker = (
  map: google.maps.Map,
  place: google.maps.places.PlaceResult,
  customCallback: MarkerCallbackInterface | null = null
) => {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, 'click', () => {
    if (customCallback) {
      customCallback(marker);
      return;
    }

    infowindow.setContent(place.name || '');
    infowindow.open(map);
  });
};
