import React, { useRef, useEffect, useContext } from 'react';
import { PlaceContext } from 'Contexts/PlaceContext';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN + '';
mapboxgl.setRTLTextPlugin(
  'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
  (value)=>console.log(value),
  true // Lazy load the plugin
);

function MapPreview() {
  const { place } = useContext(PlaceContext);
  const mapContainerRef = useRef<any>(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: place?.center,
      zoom: 11,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    return () => map.remove();
  });

  return <div className="map-container" ref={mapContainerRef} />;
};

export default MapPreview;
