import FeatureAccordions from "@/app/_subcomponents/Accordion";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import PointsContainer from "@/app/about/_components/PointsContainer";
import Image from "next/image";
import {
  FaBalanceScale,
  FaGavel,
  FaHandshake,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";
import ContainerSolution from "../../_components/ContainerSolution";

export default function BenefitOfAi() {
  const benefit = [
    {
      icon: <FaBalanceScale className="text-blue-500 text-4xl" />,
      title: "Regulatory Readiness",
      description:
        "Stay ready for changing AI laws with built-in compliance mappings.",
    },
    {
      icon: <FaGavel className="text-red-500 text-4xl" />,
      title: "Reduced Risk of Litigation",
      description: "Avoid lawsuits from data misuse, bias, or unintended harm.",
    },
    {
      icon: <FaHandshake className="text-green-500 text-4xl" />,
      title: "Accelerated Funding & Partnerships",
      description:
        "Ethical proof speeds up investor trust and partnership opportunities.",
    },
    {
      icon: <FaGlobe className="text-yellow-500 text-4xl" />,
      title: "ESG & DEI Alignment",
      description:
        "Track and prove ESG compliance and DEI commitments effectively.",
    },
    {
      icon: <FaHeart className="text-purple-500 text-4xl" />,
      title: "Customer Loyalty & Brand Equity",
      description:
        "Ethical AI builds lasting trust with customers and stakeholders.",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col flex-row-reverse max-lg:gap-20 items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      <div className="w-full ">
        <h2 className=" lg:text-[48px] text-[28px] sm:text-[32px] font-bold text-center">
          Carlo’s AI Compliance Suite: Integrated, Intelligent, and Scalable
        </h2>
        <ContainerSolution array={benefit} />
      </div>
    </section>
  );
}
