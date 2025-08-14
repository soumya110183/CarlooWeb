import { certificationLevelsData, cryptoComplianceData, featuresCompliance } from "@/app/_data/data";

import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ContainerProvier from "@/app/About-us/_components/ContainerProvider";


export default function CarloBadgeLevels() {
  return (
    <section className="w-full max-w-[1200px]  flex-row-reverse max-lg:gap-16 items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      {/* Left: Accordion Features */}

      {/* Right: Heading + Description */}
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse heading={"Carlo Badge Levels"} />
        
        <p className="font-normal text-[20px] leading-relaxed text-justify mt-6">
          Carlo Badges come in 3 trust tiers:
        </p>
      </div>
       <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10">
             {certificationLevelsData.map((item, index) => (
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
