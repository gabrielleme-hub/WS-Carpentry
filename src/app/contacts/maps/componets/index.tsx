/* eslint-disable @typescript-eslint/no-require-imports */
'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React from 'react';

const OSMMapWithRadius = () => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && !mapRef.current) {
      const L = require('leaflet');

      L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.9.4/dist/images/';

      mapRef.current = L.map('map').setView([40.45527778, -74.3716667], 9);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current!);

      const center: [number, number] = [40.45527778, -74.3716667];
      L.marker(center).addTo(mapRef.current!);

      L.circle(center, { radius: 100000 }).addTo(mapRef.current!);

      mapRef.current!.setView(center);
    }
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default OSMMapWithRadius;
