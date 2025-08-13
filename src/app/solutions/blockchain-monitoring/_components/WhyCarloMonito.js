import { featuresCompliance } from "@/app/_data/data";
import FeatureAccordions from "@/app/_subcomponents/Accordion";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import PointsContainer from "@/app/About-us/_components/PointsContainer";
import Image from "next/image";

export default function WhyCarloMonito() {
    const cryptoProtocols = [
  {
    title: "Decentralized Exchanges (DEXs)",
    para: "Track liquidity manipulation, sudden volume spikes, flash-loan attacks, and front-running behavior."
  },
  {
    title: "Lending, Yield Farming, and Staking Protocols",
    para: "Assess protocol sustainability, collateral risks, and validator fairness."
  },
  {
    title: "DAOs and Governance Models",
    para: "Audit proposal creation, voter engagement, power concentration, and procedural fairness."
  },
  {
    title: "NFT Projects and Royalties",
    para: "Check contract transparency, creator payout logic, and metadata permanence."
  },
  {
    title: "Tokenomics & Launches",
    para: "Evaluate token supply structures, deflation/inflation mechanics, and wallet concentration."
  },
  {
    title: "Cross-Chain Intelligence",
    para: "Track bridges, inter-chain transactions, and behavioral patterns across Ethereum, Solana, Polygon, Avalanche, and others."
  }
];

  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col flex-row-reverse max-lg:gap-16 items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      {/* Left: Accordion Features */}

      {/* Right: Heading + Description */}
      <div className="w-full ">
        <HeadingReuse heading={"What Carlo Monitors Across Web3"} />
        
        <p className="font-normal text-[20px] leading-relaxed text-justify mt-6">
         Our DeFi Monitoring system applies to a wide range of decentralized platforms and use cases:
        </p>
      <div className="flex flex-col gap-3.5 mt-10 text-foreground">
           {cryptoProtocols.map((industries,index)=>(
             <PointsContainer
                        title={industries.title}
                        para={
                         industries.para
                        }
                        key={index}
                      />
           ))}
            </div>
      </div>
    </section>
  );
}
