"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import Image from "next/image";

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
{
  locations[0].key === "contact" ? (
        locations.map((loc, idx) => (
        <Marker key={idx} position={loc.coords}>
          <Popup>
            <strong>{loc.name}</strong>
            <br />
            {loc.address}
            <br />
            📞 {loc.phone}
          </Popup>
        </Marker>
      ))
  ) : (
 locations.map((loc, idx) => (
        <Marker key={idx} position={loc.coords}>
          <Popup>
           <div className="flex items-center space-x-3">

  <Image
    src="/EU_AI-150x150.jpg" 
    alt="GDPR Badge"
    width={8}
    height={8}
    className="w-8 h-8 rounded-full object-cover"
  />


  <h4 className="text-lg font-semibold text-gray-800">
    Europe – GDPR & EU AI Act
  </h4>
</div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
  <li>
    <strong>GDPR:</strong> Real-time consent management, automated enforcement of privacy policies.
  </li>

</ul>
<p>Carlo enforces GDPR and EU AI Act compliance automatically, providing bias detection, consent tracking, and audit-ready reports tailored for European regulators</p>
<div className="flex items-center gap-3">
  <Link href={"#"}>
  View Compliance Details
  </Link>
  <Link href={"#"}>
  Request a Demo
  </Link>
</div>
        
          </Popup>
        </Marker>
      ))
  )
}

    
    </MapContainer>
  );
}
