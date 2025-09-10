import { targetAudienceData } from "@/app/_data/data";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import ContainerProvier from "@/app/about/_components/ContainerProvider";
import ContainerProvider2 from "@/app/about/_components/ContainerProvider2";

export default function WhoisThis() {
  return (
    <section className="w-full max-w-[1200px] flex  items-center gap-16 lg:gap-24 mx-auto text-foreground lg:pb-32 pb-16 lg:pt-32 pt-16 ">
      <div className="w-full ">
        <h2 className=" font-bold text-foreground lg:text-[38px] text-[28px] sm:text-[32px] ">
          Who Is This For?
        </h2>
        <div className="flex gap-2">
          <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>

          <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
        </div>

        <ParagraphReUse
          paragraph={"Our bundled RAK DAO + Algorethics offering is ideal for:"}
        />

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 max-sm:gap-5 lg:mt-10 mt-4">
          {targetAudienceData.map((item, index) => (
            <ContainerProvider2
              key={index}
              title={item.title}
              paragraph={item.paragraph}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
