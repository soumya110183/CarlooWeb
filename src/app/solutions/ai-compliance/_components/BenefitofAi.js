import FeatureAccordions from "@/app/_subcomponents/Accordion";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import PointsContainer from "@/app/About-us/_components/PointsContainer";
import Image from "next/image";
import {
  FaBalanceScale,
  FaGavel,
  FaHandshake,
  FaGlobe,
  FaHeart
} from "react-icons/fa";

export default function BenefitOfAi() {
const benefit = [
  {
    icon: <FaBalanceScale className="text-blue-500 text-4xl" />,
    title: "Regulatory Readiness",
    description:
      "Stay ready for changing AI laws with built-in compliance mappings."
  },
  {
    icon: <FaGavel className="text-red-500 text-4xl" />,
    title: "Reduced Risk of Litigation",
    description:
      "Avoid lawsuits from data misuse, bias, or unintended harm."
  },
  {
    icon: <FaHandshake className="text-green-500 text-4xl" />,
    title: "Accelerated Funding & Partnerships",
    description:
      "Ethical proof speeds up investor trust and partnership opportunities."
  },
  {
    icon: <FaGlobe className="text-yellow-500 text-4xl" />,
    title: "ESG & DEI Alignment",
    description:
      "Track and prove ESG compliance and DEI commitments effectively."
  },
  {
    icon: <FaHeart className="text-purple-500 text-4xl" />,
    title: "Customer Loyalty & Brand Equity",
    description:
      "Ethical AI builds lasting trust with customers and stakeholders."
  }
];

  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col flex-row-reverse max-lg:gap-20 items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      <div className="w-full ">
        <HeadingReuse
          heading={
            "Carlo’s AI Compliance Suite: Integrated, Intelligent, and Scalable"
          }
        />
         <div className="max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-10  mt-10">
        {benefit.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 bg-white "
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold text-black">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground text-black">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      </div>
        
    </section>
  );
}
