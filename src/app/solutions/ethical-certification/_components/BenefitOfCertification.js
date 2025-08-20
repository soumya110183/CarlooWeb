import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

import ButtonPimary from "@/app/_subcomponents/ButtonPrimary";
import PointsContainer from "@/app/About-us/_components/PointsContainer";

export default function BenefitsOfCertification() {
  const benefits = [
    {
      title: "Investor Readiness",
      para: "Accelerate fundraising by offering transparent risk disclosures.",
    },
    {
      title: "Regulatory Proof",
      para: "Demonstrate global compliance readiness proactively.",
    },
    {
      title: "Market Trust",
      para: "Gain user confidence through verifiable integrity.",
    },
    {
      title: "Differentiation",
      para: "Stand out in crowded markets by leading with ethical credibility.",
    },
    {
      title: "Thought Leadership",
      para: "Establish your role in shaping the future of responsible tech.",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] max-lg:flex-col max-lg:gap-20 flex flex-row-reverse items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      
      {/* Left Image */}
      <div>
        <Image
          width={500}
          height={580}
          src="/benefit.png"
          alt="carlo-certification-benefits"
          className="w-[500px] rounded-2xl"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse heading={"Benefits of Carlo Certification"} />

      

        <div className="flex flex-col gap-3.5 mt-5 text-foreground">
          {benefits.map((item, index) => (
            <PointsContainer key={index} title={item.title} para={item.para} />
          ))}
        </div>

        
      </div>
    </section>
  );
}
