import { createMarker } from 'src/components/General/MapHelper/createMarker';
import { threeWordsFromCoords } from 'src/components/General/MapHelper/threeWords';

export const searchAddress = ({
  addressRef,
  map,
  searchService,
  setLongitude,
  setLatitude,
  setThreeWords,
}) => {
  const address = addressRef.current.value;
  if (searchService) {
    searchService.current.findPlaceFromQuery(
      { query: address, fields: ['name', 'geometry'] },
      (
        results: google.maps.places.PlaceResult[] | null,
        status: google.maps.places.PlacesServiceStatus
      ) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          for (let i = 0; i < results.length; i++) {
            createMarker(
              map.current,
              results[i],
              async (marker: google.maps.Marker) => {
                const lng = marker?.position?.lng();
                const lat = marker?.position?.lat();
                setLongitude(lng);
                setLatitude(lat);

                const threeWords = await threeWordsFromCoords({
                  lat,
                  lng,
                });
                setThreeWords(threeWords.words);
              }
            );
          }

          console.log(results);

          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          map.current.setCenter(results[0]!.geometry!.location!);
        }
      }
    );
  }
};
