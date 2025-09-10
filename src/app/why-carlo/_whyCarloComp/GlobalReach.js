"use client";

import ContactMap from "@/app/contact/Contactcomp/MapContainer";

import SubHeading from "../_subcomp/Subheading";
import LawList from "../_subcomp/LawList";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";

// import WorldMap from "../_subcomp/WorldMap";

export default function GlobalReach() {


 


  return (
    <div className={`w-full max-w-[1280px]  mx-auto flex flex-col lg:flex-row justify-between  gap-10 lg:pb-32 pb-15 text-foreground items-center`}>
      {/* Left Side: Text */}
      <div className="w-full lg:max-w-[500px]">
       <HeadingReuse heading={"1. Global Reach"} />
        <SubHeading heading={"Ensuring Compliance Across Continents"} />
        <ParagraphReUse paragraph={"Carlo simplifies compliance for enterprises and developers by automatically adapting to regional laws and standards."} />
   <LawList />
       <ParagraphReUse paragraph={"With Carlo, compliance is no longer a barrier—it's your global advantage"} />
      </div>

      <div className="w-full">
        <ContactMap  reach={true} />
      </div>
    </div>
  );
}
