/* eslint-disable @typescript-eslint/no-unused-vars */
import * as ReactGoogleMaps from '@react-google-maps/api';
export function initMap(mapRef: { current: HTMLElement }) {
  if (mapRef.current && window.google) {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });

    const center = { lat: -34.397, lng: 150.644 };
    const radius = 100000;

    new window.google.maps.Marker({
      position: center,
      map: map,
      title: 'Centro de Atendimento',
    });

    new window.google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: center,
      radius: radius,
    });
  }
}
