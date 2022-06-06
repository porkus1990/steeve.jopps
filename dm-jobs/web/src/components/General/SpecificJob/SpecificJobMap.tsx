import { Fragment, useEffect } from 'react';

const SpecificJobMap = ({ coordinates }) => {
  const mapRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mapRef.current) return;
    // eslint-disable-next-line no-new
    new google.maps.Map(mapRef.current, {
      center: { lat: coordinates.latitude, lng: coordinates.longitude },
      zoom: 13,
      mapTypeId: 'roadmap',
    });
  }, [mapRef.current]);
  return (
    <Fragment>
      <div
        ref={mapRef}
        style={{
          height: '500px',
        }}
      />
    </Fragment>
  );
};

export default SpecificJobMap;
