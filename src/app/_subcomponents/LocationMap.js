"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
});

export default function OfficeMap() {
  const locations = [
    {
      name: "India – Bengaluru - Fairway Technologies",
      coords: [12.9716, 77.5946],
      address: " Level 14, UB City, Concorde Towers, 24, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001",
      phone: "+91 91 4897-4612",
    },
    {
      name: "USA – Fort Lauderdale - Algorethics INC",
      coords: [26.1224, -80.1373],
      address: "333 Sunset Drive, Fort Lauderdale, FL 33301, USA",
      phone: "+1 929-400-3096",
    },
    {
      name: "UAE – Dubai -  Algorethics LLC",
      coords: [25.2048, 55.2708],
      address: "101 Raina Business Center, Behind Mall of the Emirates, Al Barsha, Dubai, UAE",
      phone: "+971 50 268 2270",
    },
    {
      name: "Georgia – Tbilisi - Algorethics AI",
      coords: [41.7151, 44.8271],
      address: "9 Petritsi Street, 0132, Tbilisi, Georgia",
      phone: "+995 598 50 25 55",
    },
  ];

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc, idx) => (
        <Marker key={idx} position={loc.coords}>
          <Popup>
            <strong>{loc.name}</strong>
            <br />
            {loc.address}
            <br />
            📞 {loc.phone}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
