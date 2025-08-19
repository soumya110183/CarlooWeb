import Underline from "@/app/_subcomponents/UnderLine";
import BlockchainDeFiMonitoring from "./_components/BlockchainDeFiMonitoring";
import WhyCarloMonito from "./_components/WhyCarloMonito";
import KeyFeaturesBlockChain from "./_components/KeyFeaturesBlockChain";
import RealTimeDashboards from "./_components/RealTimeDashboards";
import BlockchainDeFiUseCases from "./_components/BlockchainDeFiUseCases";
import HowItWorks from "./_components/HowitWorks";
import GetStartedCarlo from "./_components/GetStartedCarlo";

export default function page() {
  return (
    <div className="mt-50 w-full max-w-[1200px] text-foreground overflow-hidden lg:px-10 px-5 mx-auto">
      {/* Hero / Intro Section */}
      <h2 className=" lg:text-[48px] text-[28px] sm:text-[32px] font-bold text-center ">
        Web3 Risk Intelligence: Real-Time Blockchain & DeFi Monitoring with
        Carlo
      </h2>
      <Underline />
      <p className=" md:text-[22px] text-base sm:text-[18px] lg:mt-6 mt-4  max-w-[1200px] mx-auto text-foreground lg:pb-30 pb-15 text-justify">
        As decentralized technologies move from experimental to essential, the
        landscape of blockchain and DeFi (Decentralized Finance) is rapidly
        evolving. Yet with that evolution comes mounting scrutiny from
        regulators, heightened expectations from investors, and growing pressure
        for transparency from users. From the collapse of unsound token
        economies to DAO proposals hijacked by whales, the consequences of
        unchecked blockchain activity are very real.
        <br /> <br />
        Carlo&apos;s Blockchain & DeFi Monitoring system is built for this
        moment. Designed to give developers, investors, and compliance teams
        full-spectrum visibility into on-chain ethics and operations, our
        platform provides continuous insights that bridge the trust gap between
        innovation and accountability.
        <br /> <br />
        Whether you&apos;re launching a new governance token, managing a
        decentralized exchange, or building NFT ecosystems—Carlo keeps your
        on-chain activity aligned with fairness, security, and long-term
        legitimacy
      </p>
      <BlockchainDeFiMonitoring />
      <WhyCarloMonito />
      <KeyFeaturesBlockChain />
      <RealTimeDashboards />
      <BlockchainDeFiUseCases />
      <HowItWorks />
      <GetStartedCarlo />
    </div>
  );
}
