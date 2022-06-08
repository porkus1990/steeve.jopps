export interface CoordinatesInterface {
  readonly lat: string;
  readonly lng: string;
}

export const threeWordsFromCoords = async (
  coordinates: CoordinatesInterface
) => {
  const resp = await fetch(
    `https://api.what3words.com/v3/convert-to-3wa?coordinates=${coordinates.lat}%2C${coordinates.lng}&key=O29MMPI1`
  );

  const data = await resp.json();

  return data;
};
