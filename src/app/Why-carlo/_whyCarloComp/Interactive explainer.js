import Image from "next/image";
import { featuresInterActive } from "@/app/_data/data";

import FeatureAccordions from "@/app/_subcomponents/Accordion";

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
        <h2 className="text-[40px] font-bold">
          2. How Carlo Seamlessly Integrates into Your AI Project Effortless
          Ethical Compliance, Built for Developers
        </h2>
        <div className="flex gap-2">
          <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>

          <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
        </div>
        <p className="font-normal text-[22px] mt-6">
          Carlo integrates seamlessly into your AI workflow, providing real-time
          monitoring, policy enforcement, feedback, and compliance assurance.
          With an intuitive UI and developer-ready APIs, its plug-and-play
          modules adapt to any architecture—LLMs, computer vision, predictive
          models, or multi-modal systems.
        </p>
        <div className="mt-4 h-[300px]">
          <FeatureAccordions features={featuresInterActive} />
        </div>
      </div>
    </div>
  );
}
