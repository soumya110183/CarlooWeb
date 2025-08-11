"use client";
import dynamic from "next/dynamic";

const OfficeMap = dynamic(() => import("../../_subcomponents/LocationMap"), {
  ssr: false,
});

export default function ContactMap({reach,locations,setCurrentLoc}) {
  return (
    <section className="flex justify-center items-center py-10">
      <OfficeMap  reach={reach} locations={locations}  setCurrentLoc={setCurrentLoc}/>
    </section>
  );
}
