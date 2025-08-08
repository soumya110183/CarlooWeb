import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ContactMap from "./MapContainer";

export default function ContactWebMap() {
  
  return (
    <section className="w-full max-w-[1200px] max-lg:flex-col max-lg:gap-20 flex items-center mx-auto justify-between text-foreground lg:pb-32 pb-15 mt-10">
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
        <ContactMap  />
      </div>
    </section>
  );
}
