import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

// 1. Define your TypeScript types & mock data
type PropertyListing = {
  id: string;
  price: string;
  position: [number, number]; // Leaflet uses [latitude, longitude] tuples
  title: string;
};

const listings: PropertyListing[] = [
   
  { id: '1', price: '$650K', position: [4.825707127564887, 7.0253655579771355], title: 'Selfcon' },
  { id: '2', price: '$400K', position: [4.725707127564887, 6.9253655579771355], title: '1 Bed' },
  { id: '3', price: '$350K', position: [4.625707127564887, 6.8253655579771355], title: '2 Bed' }
];

// 2. Helper to create a custom HTML marker using Tailwind


export default function PropertyMap() {

  const [show, setShow] = useState(false)

  const createCustomMarkerElement = (price: string) => {
  return L.divIcon({
    html: `<div onClick="${() => setShow(!show)}" class="relative bg-slate-900 w-max text-white px-3 py-1.5 rounded-full shadow-lg text-sm font-semibold border border-slate-700 whitespace-nowrap hover:bg-blue-600 transition-colors">
            ${price}
            ${show && <div className='-top-3 absolute border h-3 w-max'>
                        This House is Currently available at 650k
                      </div>}
           </div>`,
    className: 'custom-leaflet-marker', // Removes default Leaflet styles
    iconSize: [0, 0], // Prevents unexpected wrapping offsets
    iconAnchor: [25, 15] // Centers the text pill over the actual coordinate
  });
};

  return (
    // The container needs a defined height/width via Tailwind
    <div className="h-full w-full relative z-0">
      <MapContainer
        center={listings[0].position} // Miami coordinates
        zoom={30}
        className="h-full w-full"
        // layers={osm, cities}
        
      >
        {/* 3. Use a free, open-source tile layer provider (No API key required) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />

        {/* 4. Map over listings and apply the custom Tailwind icon */}
        {listings.map((property) => (
          <Marker
            key={property.id}
            position={property.position}
            icon={createCustomMarkerElement(property.price)}
          />
        ))}
      </MapContainer>
    </div>
  );
}