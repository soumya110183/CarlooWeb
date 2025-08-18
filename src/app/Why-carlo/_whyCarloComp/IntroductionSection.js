

import ButtonPimary from "@/app/_subcomponents/ButtonPrimary";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";

import Image from "next/image";
import { BsCheck } from "react-icons/bs";

export default function Introduction() {
  
  const features = [
  "Global Reach",
  "Trust and Transparency",
  "Interactive Explainer",
];


  return (
    <div className={`w-full max-w-[1200px] flex max-lg:flex-col-reverse  items-center mx-auto justify-between text-foreground lg:pb-32 pb-15`}>
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
        <ParagraphReUse paragraph={" Carlo PEaaS is more than a compliance platform—it&apos;s your partner in building trust, mitigating risks, and ensuring that every algorithm aligns with global ethical and legal standards. Whether you&apos;re developing AI for healthcare, finance, retail, or IoT, Carlo adapts to your needs and ensures your projects are always compliant and transparent."} />
         <div className="lg:mt-12 mt-5 flex flex-col sm:flex-row sm:flex-wrap lg:gap-6 gap-4">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <div className="lg:w-8 lg:h-8 w-5 h-5 rounded-full bg-[#651FFF] flex items-center justify-center shrink-0">
            <BsCheck className="text-white text-xl" size={25} />
          </div>
          <p className="font-bold lg:text-[20px] sm:text-[18px] text-base">{feature}</p>
        </div>
      ))}
    </div>
        <div className="lg:mt-12 mt-6">
          <ButtonPimary buttonText={"Read More"} href={"/About-us"} />
        </div>
      </div>
    </div>
  );
}
