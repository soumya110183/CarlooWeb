
import ContainerSolution from "@/app/solutions/_components/ContainerSolution";
import { FaCheckCircle, FaShieldAlt, FaGlobe, FaUsers, FaRocket } from "react-icons/fa";

export default function WhyLaunchWithUs() {
  const launchBenefits = [
    {
      icon: <FaShieldAlt className="text-blue-500 text-4xl" />,
      title: "All-in-One Setup",
      description: "Incorporate + start ethical compliance in one streamlined process.",
    },
    {
      icon: <FaCheckCircle className="text-green-500 text-4xl" />,
      title: "Exclusive Free Compliance Tools",
      description: "Start with a lifetime badge and snapshot reports for your project.",
    },
    {
      icon: <FaGlobe className="text-yellow-500 text-4xl" />,
      title: "Global Standards Alignment",
      description: "Align with Rome Call, GDPR, EU AI Act, UAE Data Laws, Sharia Law.",
    },
    {
      icon: <FaUsers className="text-red-500 text-4xl" />,
      title: "Investor Ready",
      description: "Showcase trust and transparency from Day One to investors.",
    },
    {
      icon: <FaRocket className="text-purple-500 text-4xl" />,
      title: "Faster to Market",
      description: "Benefit from RAK DAO’s rapid registration and our platform onboarding.",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col flex-row-reverse max-lg:gap-20 items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-center mb-8">
          Why Launch With Us?
        </h2>
        <ContainerSolution array={launchBenefits} />
      </div>
    </section>
  );
}
