import { Fragment, useEffect } from 'react';

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

    // eslint-disable-next-line no-new
    new google.maps.Marker({
      position,
      map,
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
