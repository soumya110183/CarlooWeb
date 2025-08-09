import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ContainerProvier from "./ContainerProvider";
import { providersData } from "@/app/_data/data";

export default function PartnerShip() {
  return (
    <section className="w-full max-w-[1200px]  mx-auto  text-foreground pb-32">
      <div className="w-full max-w-[570px]">
        <HeadingReuse heading={"Partnership Opportunities"} />

        <div className="flex gap-2 items-start">
          <p className="font-normal text-[22px] mt-6">
            We believe in the power of collaboration to drive meaningful change.
            Carlo PEaaS offers partnership opportunities for:
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10">
       {providersData.map((item, index) => (
        <ContainerProvier
          key={index}
          title={item.title}
          paragraph={item.paragraph}
          icon={item.icon}
        />
      ))}
      </div>
    </section>
  );
}
