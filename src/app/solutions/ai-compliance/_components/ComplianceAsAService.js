import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import Image from "next/image";
import {
  FaCloud,
  FaShieldAlt,
  FaGlobe,
  FaSyncAlt,
  FaPlug,
} from "react-icons/fa";
import StepsList from "./StepsList";

export default function ComplianceAsAService() {
  const steps = [
    {
      icon: <FaCloud size={20} />,
      title: "Secure Cloud Hosting",
      text: "Fully managed, safe, and scalable hosting environment.",
    },
    {
      icon: <FaShieldAlt size={20} />,
      title: "Data Protection",
      text: "Encryption and anonymization for privacy compliance.",
    },
    {
      icon: <FaGlobe size={20} />,
      title: "Region-Specific Compliance",
      text: "Configurations tailored to local regulations.",
    },
    {
      icon: <FaSyncAlt size={20} />,
      title: "Regulatory Updates",
      text: "Always synced with the latest frameworks and laws.",
    },
    {
      icon: <FaPlug size={20} />,
      title: "Simple Integration",
      text: "Plug in your models and receive actionable insights.",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col items-center justify-between mx-auto lg:pb-32 pb-15 text-foreground ">
 
      <div className="lg:max-w-[570px]">
        <HeadingReuse
          heading={"Compliance-as-a-Service: Your Always-On AI Ethics Guardian"}
        />

        <ParagraphReUse
          paragraph={
            "Algorethics offers Carlo as PEaaS (Platform for Ethics as a Service). This means no infrastructure overhead on your end. We handle:"
          }
        />

        <div className="flex max-lg:flex-col-reverse gap-10 lg:gap-16 mt-12">
         
      <StepsList steps={steps} />
        </div>

      
      </div>
      <div>
        <Image
          width={500}
          height={580}
          src="/bookrobot.png"
          alt="carlo-pipeline-integration"
          className="w-[500px] object-contain"
        />
      </div>
    </section>
  );
}
