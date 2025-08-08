"use client";

import ContactMap from "@/app/Contact/Contactcomp/MapContainer";

import SubHeading from "../_subcomp/Subheading";
import LawList from "../_subcomp/LawList";

// import WorldMap from "../_subcomp/WorldMap";

export default function GlobalReach() {


 


  return (
    <div className={`w-full max-w-[1280px]  mx-auto flex flex-col lg:flex-row justify-between  gap-10 lg:pb-32 pb-15 text-foreground items-center`}>
      {/* Left Side: Text */}
      <div className="w-full lg:max-w-[500px]">
        <h2 className="text-[40px] font-bold">1. Global Reach</h2>
        <div className="flex gap-2">
          <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
          <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
        </div>
        <SubHeading heading={"Ensuring Compliance Across Continents"} />
        <p className="font-normal text-[22px] mt-3">
          Carlo simplifies compliance for enterprises and developers by automatically adapting to regional laws and standards.
        </p>
   <LawList />
       <p className="font-normal text-[22px] mt-3">With Carlo, compliance is no longer a barrier—it&apos;s your global advantage</p>
      </div>

      <div className="w-full">
        <ContactMap  reach={true} />
      </div>
    </div>
  );
}
