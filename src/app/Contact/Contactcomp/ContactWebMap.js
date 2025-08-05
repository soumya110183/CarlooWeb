import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ContactMap from "./MapContainer";

export default function ContactWebMap() {
  const locations = [
    {
      name: "India – Bengaluru - Fairway Technologies",
      coords: [12.9716, 77.5946],
      address:
        " Level 14, UB City, Concorde Towers, 24, Vittal Mallya Rd, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru, Karnataka 560001",
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
      address:
        "101 Raina Business Center, Behind Mall of the Emirates, Al Barsha, Dubai, UAE",
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
    <section className="w-full max-w-[1200px] flex items-center mx-auto justify-between text-white pb-32 mt-10">
      <div className="w-full max-w-[570px]">
        <HeadingReuse heading={"Explore Our Worldwide Offices"} />

        <div className="flex gap-2 items-start">
          <p className="font-normal text-[22px] mt-6">
            Carlo is committed to empowering organizations with compliance
            solutions across the globe. Our interactive map below highlights our
            key international offices. Click on each pin to reveal detailed
            office addresses and contact information.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[500px]">
        <ContactMap locations={locations} />
      </div>
    </section>
  );
}
