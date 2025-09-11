import Image from "next/image";
import TrustSteps from "../why-carlo/_subcomp/TrustSteps";
import HeadingReuse from "../_subcomponents/HeadingReuse";
import { containerData } from "../_data/data";
import ContainerProvier from "../about/_components/ContainerProvider";
import Underline from "../_subcomponents/UnderLine";
import RomeCallContent from "./RomeCallContent";
import ParagraphReUse from "../_subcomponents/ParagraphReUse";

export const metadata = {
  title: "Carlo PEaaS: Enforcing Rome Call for AI Ethics in Every Project",
  description: "Carlo PEaaS ensures AI compliance with global ethical standards like GDPR, CCPA, and the Rome Call for AI Ethics by providing real-time monitoring, bias detection, and audit trails across industries.",
  keywords: "Carlo PEaaS, AI ethics, Rome Call, GDPR, CCPA, data protection, fairness, bias detection, privacy, compliance, healthcare AI, finance AI, education AI",
};

export default function page() {
  return (
    <div className="mt-50 text-foreground overflow-y-hidden px-10 max-sm:px-5 ">
      <h2 className=" lg:text-[48px] text-[28px] sm:text-[32px] font-bold text-center">
        Carlo PEaaS: Enforcing Rome Call for <br /> AI Ethics in Every AI
        Project
      </h2>
      <Underline />
      <ParagraphReUse
        paragraph={
          "Carlo PEaaS: Ethical AI and Data Protection Compliance with Global Standards like GDPR, CCPA, and the EU AI Act."
        }
        center={true}
      />
      <section className="w-full max-w-[1200px]  mx-auto justify-between text-foreground lg:pb-32 pb-15 pt-20">
        <div className="w-full ">
          <HeadingReuse heading={"Introduction: The Rome Call for AI Ethics"} />
          <ParagraphReUse
            paragraph={
              "The Rome Call for AI Ethics is a landmark declaration initiated by the Pontifical Academy for Life, endorsed by global tech leaders and institutions including Microsoft, IBM, and the FAO. It lays the foundation for a shared commitment to ensuring AI technologies respect human dignity, promote the common good, and operate within ethical and legal boundaries. Carlo PEaaS (Policy Enforcement as a Service) by Algorethics is the first-of-its-kind AI compliance framework designed to enforce the Rome Call's principles across AI applications—whether in healthcare, finance, education, robotics, or public policy. By monitoring, analyzing, and guiding AI systems in real time, Carlo bridges the gap between idealistic ethical standards and day-to-day development."
            }
          />
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-8 mt-10">
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
