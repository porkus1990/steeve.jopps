const infowindow: google.maps.InfoWindow = new google.maps.InfoWindow();

export const createMarker = (
  map: google.maps.Map,
  place: google.maps.places.PlaceResult
) => {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, 'click', () => {
    infowindow.setContent(place.name || '');
    infowindow.open(map);
  });
};
