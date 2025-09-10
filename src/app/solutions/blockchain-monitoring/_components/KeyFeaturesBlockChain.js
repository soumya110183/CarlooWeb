import { cryptoComplianceData, featuresCompliance } from "@/app/_data/data";

import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import ContainerProvier from "@/app/about/_components/ContainerProvider";

export default function KeyFeaturesBlockChain() {
  return (
    <section className="w-full max-w-[1200px]  flex-row-reverse max-lg:gap-16 items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      {/* Left: Accordion Features */}

      {/* Right: Heading + Description */}
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse
          heading={"Key Features of Carlo for Blockchain Monitoring"}
        />

        <ParagraphReUse
          paragraph={
            "Algorethics Carlo delivers a powerful, scalable compliance system that integrates seamlessly into your AI development lifecycle. From prototype to production, Carlo validates every layer of your AI stack — models, data pipelines, user interfaces, and feedback loops."
          }
        />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-10">
        {cryptoComplianceData.map((item, index) => (
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
