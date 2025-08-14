"use client";

import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import { FaRobot, FaEthereum, FaPalette, FaUsers, FaCoins } from "react-icons/fa";
import ContainerSolution from "../../_components/ContainerSolution";

export default function WhoShouldApply() {
  const audience = [
    {
      icon: <FaRobot className="text-purple-500 text-4xl" />,
      title: "AI SaaS Startups",
      description: "Offering predictive models, NLP platforms, image recognition, or LLM APIs.",
    },
    {
      icon: <FaEthereum className="text-blue-500 text-4xl" />,
      title: "DeFi & Web3 Protocols",
      description: "Including staking, yield farming, and decentralized exchanges.",
    },
    {
      icon: <FaPalette className="text-red-500 text-4xl" />,
      title: "NFT Projects",
      description: "Platforms facilitating token issuance, royalty governance, and artist payments.",
    },
    {
      icon: <FaUsers className="text-green-500 text-4xl" />,
      title: "DAOs",
      description: "With governance mechanisms, voting smart contracts, and decentralized treasuries.",
    },
    {
      icon: <FaCoins className="text-yellow-500 text-4xl" />,
      title: "Token Ecosystems",
      description: "With tokenomics, smart contracts, and automated community governance.",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] mx-auto text-foreground lg:pb-32 pb-15 ">
      <div className="w-full lg:max-w-[570px] mb-10">
        <HeadingReuse heading={"Who Should Apply?"} />
        <p className="font-normal text-[20px] leading-relaxed mt-6 text-justify">
          The Carlo Badge is suitable for platforms, projects, and organizations aiming to demonstrate responsible and ethical AI and blockchain practices.
        </p>
      </div>

      <ContainerSolution array={audience} />
    </section>
  );
}
