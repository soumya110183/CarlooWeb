import Image from "next/image";
import { featuresInterActive } from "@/app/_data/data";

import FeatureAccordions from "@/app/_subcomponents/Accordion";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";

export default function TrustandTransparency() {
  return (
    <div
      className={`w-full max-w-[1200px] max-lg:flex-col flex items-center mx-auto justify-between text-foreground lg:pb-32 pb-15`}
    >
      <div>
        <Image
          width={500}
          height={500}
          src="/robot-interactive-explainer.png"
          alt="robot-validator"
        />
      </div>
      <div className="w-full lg:max-w-[570px]">
       <HeadingReuse heading={"2. How Carlo Seamlessly Integrates into Your AI Project Effortless Ethical Compliance, Built for Developers"} />
      <ParagraphReUse paragraph={"Carlo integrates seamlessly into your AI workflow, providing real-time monitoring, policy enforcement, feedback, and compliance assurance. With an intuitive UI and developer-ready APIs, its plug-and-play modules adapt to any architecture—LLMs, computer vision, predictive models, or multi-modal systems."} />
        <div className="mt-4 lg:h-[300px] h-full">
          <FeatureAccordions features={featuresInterActive} />
        </div>
      </div>
    </div>
  );
}
