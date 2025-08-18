import Image from "next/image";
import TrustSteps from "../Why-carlo/_subcomp/TrustSteps";
import HeadingReuse from "../_subcomponents/HeadingReuse";
import { aiEthicsPrinciples } from "../_data/data";
import FeatureAccordions from "../_subcomponents/Accordion";
import ParagraphReUse from "../_subcomponents/ParagraphReUse";

export default function page() {
  return (
    <div className="mt-50">
      <section className="w-full max-w-[1200px] flex items-center mx-auto justify-between text-foreground pb-32 max-lg:flex-col sm:px-10 px-5 ">
        <div className="w-full max-w-[570px]">
          <HeadingReuse
            heading={
              "Data Protection Laws: Ensuring Data Privacy Across Borders"
            }
          />
          <ParagraphReUse paragraph={" Carlo PEaaS ensures compliance with the most stringent global data protection regulations. Each compliance is represented with a Unicode icon for better visualization and organization."} />
          <div className="mt-7">
            <FeatureAccordions features={aiEthicsPrinciples} />
          </div>
        </div>
        <div>
          <Image
            src="/machine-ai 1.png"
            alt="robot-validator"
            className="w-[500px]"
            width={500}
            height={500}
          />
        </div>
      </section>
    </div>
  );
}
