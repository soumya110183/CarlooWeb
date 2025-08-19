import { featuresCompliance } from "@/app/_data/data";

import HeadingReuse from "@/app/_subcomponents/HeadingReuse";

import {
  FaExchangeAlt,
  FaPiggyBank,
  FaUsersCog,
  FaImage,
  FaCoins,
  FaProjectDiagram,
} from "react-icons/fa";
import ContainerSolution from "../../_components/ContainerSolution";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";

export default function WhyCarloMonito() {
  const cryptoProtocols = [
    {
      icon: <FaExchangeAlt className="text-blue-500 text-4xl" />,
      title: "Decentralized Exchanges (DEXs)",
      description:
        "Track liquidity manipulation, sudden volume spikes, flash-loan attacks, and front-running behavior.",
    },
    {
      icon: <FaPiggyBank className="text-green-500 text-4xl" />,
      title: "Lending, Yield Farming, and Staking Protocols",
      description:
        "Assess protocol sustainability, collateral risks, and validator fairness.",
    },
    {
      icon: <FaUsersCog className="text-purple-500 text-4xl" />,
      title: "DAOs and Governance Models",
      description:
        "Audit proposal creation, voter engagement, power concentration, and procedural fairness.",
    },
    {
      icon: <FaImage className="text-pink-500 text-4xl" />,
      title: "NFT Projects and Royalties",
      description:
        "Check contract transparency, creator payout logic, and metadata permanence.",
    },
    {
      icon: <FaCoins className="text-yellow-500 text-4xl" />,
      title: "Tokenomics & Launches",
      description:
        "Evaluate token supply structures, deflation/inflation mechanics, and wallet concentration.",
    },
    {
      icon: <FaProjectDiagram className="text-red-500 text-4xl" />,
      title: "Cross-Chain Intelligence",
      description:
        "Track bridges, inter-chain transactions, and behavioral patterns across Ethereum, Solana, Polygon, Avalanche, and others.",
    },
  ];

  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col flex-row-reverse max-lg:gap-16 items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      {/* Left: Accordion Features */}

      {/* Right: Heading + Description */}
      <div className="w-full ">
        <HeadingReuse heading={"What Carlo Monitors Across Web3"} />

        <ParagraphReUse
          paragraph={
            "Our DeFi Monitoring system applies to a wide range of decentralized platforms and use cases:"
          }
        />
        <ContainerSolution array={cryptoProtocols} />
      </div>
    </section>
  );
}
