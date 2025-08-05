"use client";
import dynamic from "next/dynamic";

const OfficeMap = dynamic(() => import("../../_subcomponents/LocationMap"), {
  ssr: false,
});

export default function ContactMap({ locations }) {
  return (
    <section className="flex justify-center items-center py-10">
      <OfficeMap locations={locations} />
    </section>
  );
}
