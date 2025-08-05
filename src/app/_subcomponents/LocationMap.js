"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
});

export default function OfficeMap({ locations }) {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}
      className="rounded-xl shadow-lg overflow-hidden border border-gray-300  z-0"
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
