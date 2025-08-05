"use client";

import ContactMap from "@/app/Contact/Contactcomp/MapContainer";
import { useState } from "react";
// import WorldMap from "../_subcomp/WorldMap";

const countryToRegion = {
  Australia: "Asia-Pacific",
  China: "Asia-Pacific",
  "South Korea": "Asia-Pacific",
  India: "Asia-Pacific",
  "United States of America": "North America",
  Canada: "North America",
};

const regionLaws = {
  "Asia-Pacific": ["PIPL", "PIPA", "Network Act", "Data Security Law"],
  "North America": ["GDPR", "CCPA", "HIPAA", "Algorithmic Accountability Act"],
  Europe: ["GDPR", "EUP AI ACT", "Ethics Guidelines for Trustworthy AI"],
  Asia: ["PIPL (China), Singapore PDPA, Japan's AI Governance Guidelines"],
  Africa: ["POPIA (South Africa), African Union AI Strategy"],
  "Latin America": ["Brazil's LGPD,, Mexico's Data Protection Laws"],
  "Middle East": ["Gulf Cooperation Council Data Protection Principles"],
};

export default function GlobalReach() {
  const regions = [
    {
      name: "North America",
      coords: [40.0, -100.0],
      description: "Offices across the US and Canada",
    },
    {
      name: "Europe",
      coords: [54.0, 15.0],
      description: "European presence across EU member states",
    },
    {
      name: "Asia Pacific",
      coords: [13.0, 100.0],
      description: "Headquarters in India and regional offices across APAC",
    },
    {
      name: "Africa",
      coords: [1.5, 17.5],
      description: "Expansion efforts underway across major African economies",
    },
    {
      name: "Latin America",
      coords: [-15.0, -60.0],
      description: "Serving Latin American countries with local partnerships",
    },
    {
      name: "Middle East",
      coords: [25.0, 45.0],
      description: "Strong footprint in the UAE and surrounding regions",
    },
  ];
  const [selectedCountry, setSelectedCountry] = useState("Australia");
  const region = countryToRegion[selectedCountry] || selectedCountry;

  return (
    <div className="w-full max-w-[1280px] px-4 mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 pb-32 text-white">
      {/* Left Side: Text */}
      <div className="w-full max-w-[500px]">
        <h2 className="text-[40px] font-bold">1. Global Reach</h2>
        <div className="flex gap-2">
          <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
          <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
        </div>
        <p className="font-normal text-[22px] mt-6">
          A visually engaging interactive world map highlights the regions where
          Carlo supports compliance. Each region is clickable, displaying the
          specific laws and frameworks Carlo adheres to.
        </p>
        <h3
          className="font-semibold text-[24px] bg-clip-text text-transparent mt-10"
          style={{
            background:
              "linear-gradient(183deg, rgba(182, 154, 239, 1) 0%, rgba(133, 81, 248, 1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Key Feature
        </h3>
        <p className="font-normal text-[22px] mt-2">
          Users can zoom into regions or countries to explore Carlo&apos;
          compliance solutions tailored to local laws.
        </p>
      </div>

      <div className="w-full">
        <ContactMap locations={regions} />
      </div>
    </div>
  );
}
