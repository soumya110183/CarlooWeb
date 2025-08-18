import TrustSteps from "@/app/Why-carlo/_subcomp/TrustSteps";
import Image from "next/image";
import { featuresInternational } from "@/app/_data/data";
import FeatureAccordions from "@/app/_subcomponents/Accordion";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";

export default function GlobalPolicy() {
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      <div className="w-full max-w-[570px]">
      <HeadingReuse heading={"Global Policy Frameworks: Navigating International AI Standards"} />
        <div className="mt-9 h-[600px]">
          <FeatureAccordions features={featuresInternational} />
        </div>
      </div>
      <div>
        <Image
          src="/feature3_2x_idh2mq.png"
          alt="robot-validator"
          className="w-[500px]"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
