"use client";

import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import {
  FaShieldAlt,
  FaBalanceScale,
  FaLock,
  FaUsers,
  FaLeaf,
} from "react-icons/fa";
import { motion } from "framer-motion";
import ContainerSolution from "../../_components/ContainerSolution";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";

export default function EthicalCertification() {
  const features = [
    {
      icon: <FaShieldAlt className="text-purple-500 text-4xl" />,
      title: "Technical Risk Analysis",
      description:
        "Covers security vulnerabilities, smart contract logic, and infrastructure reliability.",
    },
    {
      icon: <FaBalanceScale className="text-blue-500 text-4xl" />,
      title: "Ethical Risk Review",
      description:
        "Examines bias, opacity, exclusion risks, user protections, and societal impact.",
    },
    {
      icon: <FaLock className="text-red-500 text-4xl" />,
      title: "Privacy & Compliance Audit",
      description:
        "Benchmarked against GDPR, UAE Data Law, CCPA, HIPAA, and other applicable jurisdictions.",
    },
    {
      icon: <FaUsers className="text-green-500 text-4xl" />,
      title: "Governance Evaluation",
      description:
        "For DAOs, includes analysis of voting mechanisms, token distributions, and decision transparency.",
    },
    {
      icon: <FaLeaf className="text-yellow-500 text-4xl" />,
      title: "ESG & DEI Alignment",
      description:
        "Tracks the project's efforts toward sustainability, diversity, equity, and inclusion.",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto text-foreground lg:pb-32 pb-15 ">
      <div className="w-full lg:max-w-[570px]   mb-10">
        <HeadingReuse
          heading={"What Is the Carlo Ethical Certification Badge?"}
        />
        <ParagraphReUse
          paragraph={
            "The Carlo Badge is a public-facing certification granted to platforms, applications, protocols, and companies that pass a rigorous ethics, fairness, compliance, and governance validation process."
          }
        />
      </div>

      <ContainerSolution array={features} />
    </section>
  );
}
