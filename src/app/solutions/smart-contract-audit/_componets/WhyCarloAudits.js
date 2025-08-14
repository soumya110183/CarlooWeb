import { FaGlobe, FaSearch, FaUsers, FaCode, FaShieldAlt } from "react-icons/fa";
import ContainerSolution from "../../_components/ContainerSolution";

export default function WhyCarloAudits() {
  const auditReasons = [
    {
      icon: <FaGlobe className="text-blue-500 text-4xl" />,
      title: "Global Framework Alignment",
      description:
        "Our methodology aligns with frameworks like ISO/IEC 38507, the Rome Call for AI Ethics, and the EU AI Act."
    },
    {
      icon: <FaSearch className="text-green-500 text-4xl" />,
      title: "Ethical-First Analysis",
      description:
        "Unique among auditors, we examine the spirit of your smart contract’s logic, not just the syntax."
    },
    {
      icon: <FaUsers className="text-purple-500 text-4xl" />,
      title: "Built for Founders & Funders",
      description:
        "Our reporting style is clear, narrative, and suitable for sharing with legal, compliance, and investor audiences."
    },
    {
      icon: <FaCode className="text-orange-500 text-4xl" />,
      title: "Multi-Chain & Multi-Standard",
      description:
        "Supports Solidity, Vyper, and Rust."
    },
    {
      icon: <FaShieldAlt className="text-red-500 text-4xl" />,
      title: "Backed by Algorethics",
      description:
        "A leader in responsible tech certification with real-time monitoring across AI and blockchain systems."
    }
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto lg:pb-32 pb-15 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">
        Why Carlo Audits Are Trusted
      </h2>
      <ContainerSolution array={auditReasons} />
    </section>
  );
}
