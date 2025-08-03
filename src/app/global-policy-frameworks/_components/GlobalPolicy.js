import TrustSteps from "@/app/Why-carlo/_subcomp/TrustSteps";
import Image from "next/image";
import { featuresInternational } from "@/app/_data/data";
import FeatureAccordions from "@/app/_subcomponents/Accordion";

export default function GlobalPolicy() {
  return (
    <section className="w-full max-w-[1200px] flex items-center mx-auto justify-between text-white pb-32">
      <div className="w-full max-w-[570px]">
        <h2 className="text-[40px] font-bold">
          Global Policy Frameworks: Navigating International AI Standards
        </h2>
        <div className="flex gap-2">
          <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>

          <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
        </div>
        <div className="mt-9">
          <FeatureAccordions features={featuresInternational} />
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
  );
}
