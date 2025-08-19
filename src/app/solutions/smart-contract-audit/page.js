import Underline from "@/app/_subcomponents/UnderLine";
import WhyEthicalSmart from "./_componets/WhyEthicalSmart";
import WhatCarloAudits from "./_componets/WhatCarloAudits";
import KeyDeliverables from "./_componets/KeyDeliverables";
import SupportedBlockChains from "./_componets/SupportedBlockChains";
import UseCasesWhenToAudit from "./_componets/UseCasesWhenToAudit";
import AuditProcess from "./_componets/AuditProcess";
import PricingPackages from "./_componets/PricingPackages";
import WhyCarloAudits from "./_componets/WhyCarloAudits";
import BookCarloAudit from "./_componets/BookCarloAudit";

export default function page() {
  return (
    <div className="mt-50 w-full max-w-[1200px] text-foreground overflow-hidden lg:px-10 px-5 mx-auto">
      {/* Hero / Intro Section */}
      <h2 className=" lg:text-[48px] text-[28px] sm:text-[32px] font-bold text-center ">
        Unlock Confidence with Ethical Smart Contract Audits
      </h2>
      <Underline />
      <p className=" leading-relaxed font-normal text-foreground md:text-[20px] text-base sm:text-[18px] lg:mt-6 mt-4 pb-30 max-lg:pb-15 text-justify">
        Smart contracts are the foundational building blocks of Web3 ecosystems.
        They automate trust, enable decentralized finance, govern DAOs, and
        power everything from NFTs to cross-chain token swaps. Yet, with great
        power comes immense responsibility. A single vulnerability,
        misconfiguration, or malicious clause can result in catastrophic
        financial losses, exploitative behavior, or reputational collapse.
        <br /> <br />
        At Algorethics, we believe that smart contract security isn&apos;t just
        about technical soundness—it&apos;s also about ethical integrity. Our
        Carlo Smart Contract Audit solution goes beyond conventional audits by
        combining static and dynamic analysis with ethical impact scoring,
        governance fairness, and regulatory readiness
        <br /> <br />
        Whether you&apos;re launching a DeFi token, staking contract, NFT
        collection, or governance DAO, Carlo provides a comprehensive,
        compliance-aware, and values-driven audit designed to meet the
        expectations of developers, regulators, and investors alike.
      </p>
      <WhyEthicalSmart />
      <WhatCarloAudits />
      <KeyDeliverables />
      <SupportedBlockChains />
      <UseCasesWhenToAudit />
      <AuditProcess />
      <PricingPackages />
      <WhyCarloAudits />
      <BookCarloAudit />
    </div>
  );
}
