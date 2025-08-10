"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Link from "next/link";
import Image from "next/image";

const createHTMLRoundIcon = (imgSrc) => {
  return L.divIcon({
    html: `
      <div style="
        width:40px;
        height:40px;
        border-radius:50%;
        overflow:hidden;">
        <img src="${imgSrc}" style="width:100%;height:100%;object-fit:cover;" />
      </div>
    `,
    className: "",
    iconSize: [40, 40],
  });
};

export default function OfficeMap({ reach }) {
  const locations = [
    {
      name: "India – Bengaluru - Fairway Technologies",
      coords: [12.9716, 77.5946],
      address:
        " Level 14, UB City, Concorde Towers, 24, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001",
      phone: "+91 91 4897-4612",
      key: "contact",
      icon: "/1f1ee-1f1f3 1.svg",
    },
    {
      name: "USA – Fort Lauderdale - Algorethics INC",
      coords: [26.1224, -80.1373],
      address: "333 Sunset Drive, Fort Lauderdale, FL 33301, USA",
      phone: "+1 929-400-3096",
      icon: "/1f1fa-1f1f8 1.svg",
    },
    {
      name: "UAE – Dubai -  Algorethics LLC",
      coords: [25.2048, 55.2708],
      address:
        "101 Raina Business Center, Behind Mall of the Emirates, Al Barsha, Dubai, UAE",
      phone: "+971 50 268 2270",
      icon: "/1f1e6-1f1ea 1.svg",
    },
    {
      name: "Georgia – Tbilisi - Algorethics AI",
      coords: [41.7151, 44.8271],
      address: "9 Petritsi Street, 0132, Tbilisi, Georgia",
      phone: "+995 598 50 25 55",
      icon: "/1f1ec-1f1ea 1.svg",
    },
  ];

  const regionPopupData = {
    "North America": {
      coords: [37.0902, -95.7129],
      icon: "/Nau_flag.webp",
      title: "North American Regulations",
      frameworks: [
        { name: "CCPA", description: "California Consumer Privacy Act" },
        {
          name: "HIPAA",
          description: "Health Insurance Portability and Accountability Act",
        },
        {
          name: "Algorithmic Accountability Act",
          description: "A bill to regulate AI decision-making transparency",
        },
      ],
      howCarloHelps:
        "Carlo automates compliance with U.S. and Canadian data laws.",
    },
    Europe: {
      coords: [54.526, 15.2551],
      icon: "/european-union-logo-flag-european-union-with-eu-letters-middle_330426-575.avif",
      title: "European Compliance Laws",
      frameworks: [
        { name: "GDPR", description: "General Data Protection Regulation" },
        {
          name: "EU AI Act",
          description: "AI regulation proposed by the European Commission",
        },
        {
          name: "Ethics Guidelines for Trustworthy AI",
          description: "EU’s ethical framework for AI systems",
        },
      ],
      howCarloHelps:
        "Carlo ensures end-to-end compliance with GDPR and EU AI guidelines.",
    },
    "Asia-Pacific": {
      coords: [7.8731, 80.7718],
      icon: "/226681367_120292296987517_8521060763350313449_n.jpg",
      title: "Asia-Pacific Frameworks",
      frameworks: [
        {
          name: "PIPL",
          description: "China’s Personal Information Protection Law",
        },
        { name: "Singapore PDPA", description: "Personal Data Protection Act" },
        {
          name: "Japan AI Guidelines",
          description: "Governance framework for AI usage",
        },
      ],
      howCarloHelps:
        "Carlo localizes compliance to each country's data protection requirements.",
    },
    Africa: {
      coords: [-1.9579, 30.1127],
      icon: "/african-union-logo.jpg",
      title: "African Data Laws",
      frameworks: [
        {
          name: "POPIA",
          description: "Protection of Personal Information Act (South Africa)",
        },
        {
          name: "AU AI Strategy",
          description: "African Union Artificial Intelligence Strategy",
        },
      ],
      howCarloHelps:
        "Carlo supports privacy and AI governance across the African continent.",
    },
    "Latin America": {
      coords: [-14.235, -51.9253],
      icon: "/1200px-Flag_of_UNASUR.svg.png",
      title: "Latin American Regulations",
      frameworks: [
        {
          name: "LGPD",
          description: "Lei Geral de Proteção de Dados (Brazil)",
        },
        {
          name: "Mexico Data Laws",
          description: "Mexico’s Federal Data Protection Law",
        },
      ],
      howCarloHelps:
        "Carlo ensures seamless compliance with Latin American privacy laws.",
    },
    "Middle East": {
      coords: [25.276987, 55.296249],
      icon: "/tg7twp3sbd961.jpg",
      title: "Middle Eastern Principles",
      frameworks: [
        {
          name: "GCC Principles",
          description: "Gulf Cooperation Council Data Protection Principles",
        },
      ],
      howCarloHelps:
        "Carlo aligns AI and data practices with GCC privacy and data protection norms.",
    },
  };

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={true}
      style={{ height: "500px", width: "100%" }}
      className="rounded-xl shadow-lg overflow-hidden border border-gray-300 z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {!reach
        ? locations.map((loc, idx) => (
            <Marker
              key={idx}
              position={loc.coords}
              icon={createHTMLRoundIcon(loc.icon)}
            >
              <Popup>
                <div className="flex items-center space-x-3">
                  <Image
                    src={loc.icon}
                    alt="Region Icon"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <strong>{loc.name}</strong>
                </div>
                <br />
                {loc.address}
                <br />
                📞 {loc.phone}
              </Popup>
            </Marker>
          ))
        : Object.entries(regionPopupData).map(([regionName, popup], idx) => (
            <Marker
              key={idx}
              position={popup.coords}
              icon={createHTMLRoundIcon(popup.icon)}
            >
              <Popup>
                <div className="space-y-3 text-gray-800">
                  <div className="flex items-center space-x-3">
                    {/* <Image
                    src={popup.icon}
                    alt="Region Icon"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover"
                  /> */}
                    <h4 className="text-lg font-semibold">{popup.title}</h4>
                  </div>

                  <ul className="list-disc list-inside text-sm space-y-1">
                    {popup.frameworks.map((fw, idx) => (
                      <li key={idx}>
                        <strong>{fw.name}:</strong> {fw.description}
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm italic">{popup.howCarloHelps}</p>

                  <div className="flex items-center gap-4 text-sm text-blue-600">
                    <Link href="/global-policy-frameworks">
                      View Compliance Details →
                    </Link>
                    <Link href="/Contact">Request a Demo →</Link>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
    </MapContainer>
  );
}
