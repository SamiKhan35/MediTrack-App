import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const GoogleMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const lineRef = useRef(null); // To store the polyline

  useEffect(() => {
    const branches = [
      {
        name: 'Main Hospital',
        lat: 33.6521752,
        lng: 73.0451993,
        address: '123 Main Street',
        doctors: [
          { id: 1, name: 'Dr. Jawad', specialty: 'Cardiologist' },
          { id: 2, name: 'Dr. Sahil', specialty: 'Dermatologist' },
        ],
      },
      {
        name: 'East Branch',
        lat: 33.6600,
        lng: 73.0500,
        address: '456 East Avenue',
        doctors: [
          { id: 3, name: 'Dr. Ali Khan', specialty: 'Pediatrician' },
        ],
      },
    ];

    if (!mapInstanceRef.current && mapRef.current) {
      mapInstanceRef.current = L.map(mapRef.current, {
        center: [33.6521752, 73.0451993],
        zoom: 13,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(mapInstanceRef.current);

      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });

      // Add markers and popups
      branches.forEach((branch, index) => {
        const marker = L.marker([branch.lat, branch.lng]).addTo(mapInstanceRef.current);

        const doctorList = branch.doctors
          .map(doc => `<li>${doc.name} - ${doc.specialty} <a href="/book/${doc.id}" target="_blank">Book</a></li>`)
          .join('');

        let distanceInfo = '';
        if (index > 0) {
          const mainBranch = branches[0];
          const distanceMeters = L.latLng(mainBranch.lat, mainBranch.lng)
            .distanceTo(L.latLng(branch.lat, branch.lng));
          const distanceKm = (distanceMeters / 1000).toFixed(2);
          distanceInfo = `<p>Distance from ${mainBranch.name}: ${distanceKm} km</p>`;

          // Add click event to show polyline only when marker is clicked
          marker.on('click', () => {
            // Remove existing line if any
            if (lineRef.current) {
              lineRef.current.remove();
            }

            // Draw new line from Main Hospital to clicked branch
            lineRef.current = L.polyline(
              [
                [mainBranch.lat, mainBranch.lng],
                [branch.lat, branch.lng],
              ],
              { color: 'blue', weight: 3, dashArray: '5,5' }
            ).addTo(mapInstanceRef.current);

            // Optionally, zoom/fit the line
            mapInstanceRef.current.fitBounds(lineRef.current.getBounds().pad(0.2));
          });
        }

        marker.bindPopup(`
          <div>
            <b>${branch.name}</b>
            <p>${branch.address}</p>
            ${distanceInfo}
            <ul>${doctorList}</ul>
          </div>
        `);
      });

      // Fit map to show all markers initially
      if (branches.length > 0) {
        const group = new L.featureGroup(
          branches.map(branch => L.marker([branch.lat, branch.lng]))
        );
        mapInstanceRef.current.fitBounds(group.getBounds().pad(0.2));
      }
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />;
};

export default GoogleMap;
