import { featuresCompliance } from "@/app/_data/data";
import FeatureAccordions from "@/app/_subcomponents/Accordion";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import Image from "next/image";

export default function CarloCompliance() {
  return (
    <section className="w-full max-w-[1200px] flex  gap-10 max-lg:flex-col-reverse  max-lg:gap-16  mx-auto justify-between text-foreground lg:pb-32 pb-15">
      {/* Left: Accordion Features */}
      <div className="w-full lg:max-w-[570px] lg:h-[400px] h-full lg:mt-15">
        <FeatureAccordions features={featuresCompliance} />
      </div>

      {/* Right: Heading + Description */}
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse
          heading={
            "Carlo’s AI Compliance Suite: Integrated, Intelligent, and Scalable"
          }
        />

        <ParagraphReUse
          paragraph={
            "Algorethics Carlo delivers a powerful, scalable compliance system that integrates seamlessly into your AI development lifecycle. From prototype to production, Carlo validates every layer of your AI stack — models, data pipelines, user interfaces, and feedback loops."
          }
        />
      </div>
    </section>
  );
}
