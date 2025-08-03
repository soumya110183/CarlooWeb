import Image from "next/image";
import TrustSteps from "../Why-carlo/_subcomp/TrustSteps";
import HeadingReuse from "../_subcomponents/HeadingReuse";
import { featuresGlobalAI } from "../_data/data";
import FeatureAccordions from "../_subcomponents/Accordion";

export default function page() {
  return (
    <div className="mt-50">
      <section className="w-full max-w-[1200px] flex items-center mx-auto justify-between text-white pb-32">
        <div className="w-full max-w-[570px]">
          <HeadingReuse
            heading={"Ethical AI Guidelines: Building Responsible AI Systems"}
          />
          <div className="mt-7">
            <FeatureAccordions features={featuresGlobalAI} />
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
