"use client";

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
        <p className="font-medium text-[22px] mt-6">
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
        <p className="font-medium text-[22px] mt-2">
          Users can zoom into regions or countries to explore Carlo&apos;
          compliance solutions tailored to local laws.
        </p>
      </div>

      {/* <div className="w-full max-w-[720px]">
      <div className="w-full max-w-[600px] h-[300px] bg-[#0F092A] rounded-[36px] p-6">
        <h4 className="text-[24px] font-bold mb-6">
          {region}
        </h4>
        <ul className="flex flex-col gap-6">
          {(regionLaws[region] || []).map((law, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#651FFF] flex items-center justify-center">
                <span className="text-white text-lg">✔️</span>
              </div>
              <p className="font-bold text-[20px]">{law}</p>
            </li>
          ))}
        </ul>

        
      </div>
      <div className="mt-10">
          <WorldMap onCountryClick={setSelectedCountry}  />
        </div>
      </div> */}
    </div>
  );
}
