export const setGrid = (map: google.maps.Map) => {
  let gridData;

  map.addListener('bounds_changed', () => {
    const zoom = map.getZoom();
    const loadFeatures = zoom > 17;

    if (loadFeatures) {
      // Zoom level is high enough
      const ne = map.getBounds().getNorthEast();
      const sw = map.getBounds().getSouthWest();

      // Call the what3words Grid API to obtain the grid squares within the current visble bounding box
      what3words.api
        .gridSectionGeoJson({
          southwest: {
            lat: sw.lat(),
            lng: sw.lng(),
          },
          northeast: {
            lat: ne.lat(),
            lng: ne.lng(),
          },
        })
        .then((data) => {
          if (gridData !== undefined) {
            for (let i = 0; i < gridData.length; i++) {
              map.data.remove(gridData[i]);
            }
          }
          gridData = map.data.addGeoJson(data);
        })
        .catch(console.error);
    }

    // Set the grid display style
    map.data.setStyle({
      visible: loadFeatures,
      strokeColor: '#777',
      strokeWeight: 1.0,
      clickable: false,
    });
  });
};
