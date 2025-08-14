import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";
import { FaCloud, FaShieldAlt, FaGlobe, FaSyncAlt, FaPlug } from "react-icons/fa";

export default function ComplianceAsAService() {
  const steps = [
    {
      icon: <FaCloud size={20} />,
      title: "Secure Cloud Hosting",
      text: "Fully managed, safe, and scalable hosting environment."
    },
    {
      icon: <FaShieldAlt size={20} />,
      title: "Data Protection",
      text: "Encryption and anonymization for privacy compliance."
    },
    {
      icon: <FaGlobe size={20} />,
      title: "Region-Specific Compliance",
      text: "Configurations tailored to local regulations."
    },
    {
      icon: <FaSyncAlt size={20} />,
      title: "Regulatory Updates",
      text: "Always synced with the latest frameworks and laws."
    },
    {
      icon: <FaPlug size={20} />,
      title: "Simple Integration",
      text: "Plug in your models and receive actionable insights."
    }
  ];

  return (
    <section className="w-full max-w-[1200px] flex items-center justify-between mx-auto lg:pb-32 pb-15 text-foreground px-6">
      {/* Heading */}
      <div className="lg:max-w-[570px]">

      
      <HeadingReuse heading={"Compliance-as-a-Service: Your Always-On AI Ethics Guardian"} />

      {/* Intro Text */}
      <p className="font-normal text-[22px] text-justify mt-6 leading-relaxed max-w-[570px]">
        Algorethics offers Carlo as PEaaS (Platform for Ethics as a Service). 
        This means no infrastructure overhead on your end. We handle:
      </p>

      <div className="flex max-lg:flex-col-reverse gap-10 lg:gap-16 mt-12">
        {/* Left: Timeline */}
        <div className="relative flex-1">
          {/* Vertical Gradient Line */}
          <div className="absolute left-[14px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#5d3fd3] via-purple-400 to-[#5d3fd3]"></div>

          {/* Steps */}
          <ul className="space-y-8 relative z-10">
            {steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-4">
                {/* Icon Circle */}
                <div className="w-8 h-8 flex items-center justify-center bg-[#5d3fd3] text-white rounded-full flex-shrink-0 shadow-lg">
                  {step.icon}
                </div>
                <div>
                  <p className="font-semibold text-lg">{step.title}</p>
                  <p className="text-foreground/80">{step.text}</p>
                </div>
              </li>
            ))}
          </ul>
          </div>
        </div>

        {/* Right: Image */}
      </div>
           <div>
        <Image
          width={500}
          height={580}
          src="/vision.png"
          alt="carlo-pipeline-integration"
          className="w-[500px] object-contain"
        />
      </div>
    </section>
  );
}
