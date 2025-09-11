import Underline from "@/app/_subcomponents/UnderLine";
import EthicalCertification from "./_components/EthicalCertification";
import WhoShouldApply from "./_components/WhoShouldApply";
import CarloBadgeLevels from "./_components/CarloBadgeLevels";
import CertificationProcess from "./_components/CertificationProcess";
import BenefitsOfCertification from "./_components/BenefitOfCertification";
import VerificationAndMeta from "./_components/VerficationAndMeta";
import HowToApply from "./_components/HowtoAplly";
import ReadyToLead from "./_components/ReadyToLead";

export const metadata = {
  title: "Carlo Ethical Certification: Build Trust and Lead with Integrity",
  description: "The Carlo Ethical Certification Badge provides AI and Web3 projects a verifiable way to demonstrate ethical practices, responsible innovation, and compliance, helping organizations build trust with regulators, investors, and users.",
  keywords: "Carlo Ethical Certification, AI ethics, Web3 ethics, ethical badge, responsible innovation, compliance, trust, digital ethics credential, DeFi certification, NFT ethics, machine learning compliance",
};


export default function Page() {
  return (
    <div className="mt-50 text-foreground overflow-hidden lg:px-10 px-5 mx-auto  ">
      <h2 className=" lg:text-[48px] text-[28px] sm:text-[32px] font-bold text-center ">
        Build Trust, Signal Ethics, and Lead with Integrity
      </h2>
      <Underline />
      <p className=" md:text-[22px] text-base sm:text-[18px] lg:mt-6 mt-4  max-w-[1200px] mx-auto text-foreground lg:pb-30 pb-15 text-justify">
        In today&apos;s AI- and blockchain-driven world, it&apos;s no longer
        enough to say your project is ethical—you need to prove it. The Carlo
        Ethical Certification Badge is the industry-first digital ethics
        credential for AI and Web3 companies committed to responsible
        innovation, data governance, and compliance.
        <br />
        <br />
        Whether you&apos;re launching a decentralized finance (DeFi) protocol,
        deploying a machine learning model in healthcare, or minting NFTs in a
        global digital marketplace, the Carlo Badge gives you a transparent,
        verifiable way to communicate your ethical standing to regulators,
        partners, investors, and users.
      </p>
      <EthicalCertification />
      <WhoShouldApply />
      <CarloBadgeLevels />
      <CertificationProcess />
      <BenefitsOfCertification />
      <VerificationAndMeta />
      <HowToApply />
      <ReadyToLead />
    </div>
  );
}
