import { Fragment, useEffect } from 'react';
import { Grid } from '@mui/material';
import { setGrid } from './gridData';

const SpecificJobMap = ({ coordinates }) => {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const position = { lat: coordinates.latitude, lng: coordinates.longitude };
  useEffect(() => {
    if (!mapRef.current) return;
    // eslint-disable-next-line no-new
    const map = new google.maps.Map(mapRef.current, {
      center: position,
      zoom: 20,
      mapTypeId: 'roadmap',
    });

    setGrid(map);

    // eslint-disable-next-line no-new
    new google.maps.Marker({
      position,
      map,
    });
  }, [mapRef.current]);
  return (
    <Fragment>
      <Grid
        sx={{
          marginTop: 2,
          border: '1px dashed gray',
        }}
      >
        <div
          ref={mapRef}
          style={{
            height: '500px',
          }}
        />
      </Grid>
    </Fragment>
  );
};

export default SpecificJobMap;
