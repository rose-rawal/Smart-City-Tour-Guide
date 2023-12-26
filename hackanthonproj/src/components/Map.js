import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const defaultCenter = {
    lat: 10.99835602,
    lng: 77.01502627,
  };

  const defaultProps = {
    center: defaultCenter,
    zoom: 11,
  };

  useEffect(() => {
    const createMarker = (map, maps) => {
      const marker = new maps.Marker({
        position: defaultCenter,
        map,
      });
    };

    const loadMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: defaultCenter,
        zoom: defaultProps.zoom,
      });

      const markerScript = document.createElement('script');
      markerScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDUXR8DqW6aFdu5wwy7osB0eb4NTrOVhfQ&callback=createMarker`;
      document.head.appendChild(markerScript);
      window.createMarker = () => createMarker(map, window.google.maps);
    };

    if (!window.google) {
      const mapScript = document.createElement('script');
      mapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDUXR8DqW6aFdu5wwy7osB0eb4NTrOVhfQ&callback=loadMap`;
      document.head.appendChild(mapScript);
    } else {
      loadMap();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div id="map" style={{ height: '100vh', width: '100%' }} />;
};

export default Map;
