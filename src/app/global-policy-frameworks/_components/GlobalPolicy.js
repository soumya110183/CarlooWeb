import TrustSteps from "@/app/Why-carlo/_subcomp/TrustSteps";
import Image from "next/image";
import { featuresInternational } from "@/app/_data/data";
import FeatureAccordions from "@/app/_subcomponents/Accordion";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";

export default function GlobalPolicy() {
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col items-center max-lg:gap-10 mx-auto justify-between text-foreground lg:pb-32 pb-15">
      <div className="w-full max-w-[570px]">
        <HeadingReuse
          heading={
            "Global Policy Frameworks: Navigating International AI Standards"
          }
        />
        <div className="mt-9 lg:h-[600px] h-full">
          <FeatureAccordions features={featuresInternational} />
        </div>
      </div>
      <div>
        <Image
          src="/global-policy.png"
          alt="robot-validator"
          width={700}
          height={700}
        />
      </div>
    </section>
  );
}
