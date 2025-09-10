import ButtonPimary from "@/app/_subcomponents/ButtonPrimary";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";

import Image from "next/image";
import { BsCheck } from "react-icons/bs";

export default function Introduction() {
  const features = [
    "Global Reach",
    "Trust and Transparency",
    "Real-Time Compliance Monitoring",
    "Multi-Framework Alignment (G7, UN, OECD, EU AI Act)",
    "Automated Bias & Risk Detection",
    "Seamless API Integration",
    "Scalable for Startups & Enterprises",
    "Continuous Updates with Global Standards",
  ];

  return (
    <div
      className={`w-full max-w-[1200px] flex max-lg:flex-col-reverse  items-center mx-auto justify-between text-foreground lg:pb-32 pb-15`}
    >
      <div>
        <Image
          width={500}
          height={580}
          src="/Why-carlo-robot.png"
          alt="robot-validator"
          className="w-[500px]"
        />
      </div>
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse heading={"Why Carlo"} />
        <ParagraphReUse
          paragraph={
            " Carlo PEaaS is more than a compliance platform—it's your partner in building trust, mitigating risks, and ensuring that every algorithm aligns with global ethical and legal standards. Whether you&apos;re developing AI for healthcare, finance, retail, or IoT, Carlo adapts to your needs and ensures your projects are always compliant and transparent."
          }
        />
        <div className="lg:mt-10 mt-5 grid sm:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-muted/40 rounded-2xl  hover:shadow-md transition-all duration-300"
            >
              <div className="lg:w-8 lg:h-8 w-6 h-6 rounded-full bg-[#651FFF] flex items-center justify-center shrink-0">
                <BsCheck className="text-white text-lg" />
              </div>
              <p className="font-semibold  text-base">{feature}</p>
            </div>
          ))}
        </div>
        <div className="lg:mt-10 mt-6">
          <ButtonPimary buttonText={"Read More"} href={"/About-us"} />
        </div>
      </div>
    </div>
  );
}
