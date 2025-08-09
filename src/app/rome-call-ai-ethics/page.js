import Image from "next/image";
import TrustSteps from "../Why-carlo/_subcomp/TrustSteps";
import HeadingReuse from "../_subcomponents/HeadingReuse";
import {containerData } from "../_data/data";
import ContainerProvier from "../About-us/_components/ContainerProvider";
import Underline from "../_subcomponents/UnderLine";
import RomeCallContent from "./RomeCallContent";

export default function page() {
  return (
    <div className="mt-50 text-foreground overflow-y-hidden px-10 ">
      <h2 className="text-[48px] font-bold text-center">
        Carlo PEaaS: Enforcing Rome Call for <br /> AI Ethics in Every AI
        Project
      </h2>
      <Underline />
      <p className="text-[22px] text-center w-full max-w-[800px] mx-auto">
        Carlo PEaaS: Ethical AI and Data Protection Compliance with Global
        Standards like GDPR, CCPA, and the EU AI Act.
      </p>
      <section className="w-full max-w-[1200px]  mx-auto justify-between text-foreground pb-32 pt-20">
        <div className="w-full ">
          <HeadingReuse heading={"Introduction: The Rome Call for AI Ethics"} />
          <p className="font-normal text-[22px] mt-6">
            The Rome Call for AI Ethics is a landmark declaration initiated by
            the Pontifical Academy for Life, endorsed by global tech leaders and
            institutions including Microsoft, IBM, and the FAO. It lays the
            foundation for a shared commitment to ensuring AI technologies
            respect human dignity, promote the common good, and operate within
            ethical and legal boundaries. Carlo PEaaS (Policy Enforcement as a
            Service) by Algorethics is the first-of-its-kind AI compliance
            framework designed to enforce the Rome Call&apos;s principles across
            AI applications—whether in healthcare, finance, education, robotics,
            or public policy. By monitoring, analyzing, and guiding AI systems
            in real time, Carlo bridges the gap between idealistic ethical
            standards and day-to-day development.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-10">
       
             
      {containerData.map((item, index) => (
        <ContainerProvier
          key={index}
          title={item.title}
          icon={item.icon}
          paragraph={item.paragraph}
        />
      ))}
   
          </div>
          <RomeCallContent />
        </div>
      </section>
    </div>
  );
}
