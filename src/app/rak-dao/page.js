import ContactSetupTeam from "./_components/ContactSetupTeam";
import GetStartedTimeline from "./_components/GetStartedTmeLine";
import PremiumPlansTable from "./_components/PremiumPlansTable";
import RAKDAOBenefits from "./_components/RakDaoBenefits";
import WhoisThis from "./_components/WhoisThis";
import WhyLaunchWithUs from "./_components/WhyLaunchWithUS";

export default function page() {
  return (
    <div>
      <div className="w-full max-w-[1200px] mx-auto mt-35 text-foreground overflow-y-hidden lg:px-10 px-5">
        <h2 className="text-[48px] font-bold text-center">
          Build Ethically from Day One - In the UAE&apos;s First Digital Assets
          Free Zone
        </h2>
        <p className="text-[22px] text-justify max-w-[1200px] mx-auto text-foreground mt-10">
          Algorethics, in strategic collaboration with RAK Digital Assets Oasis
          (RAK DAO), enables startups and digital ventures to seamlessly
          establish their legal entity in the UAE—while embedding
          next-generation AI and Web3 compliance from the ground up.
          <br />
          <br />
          Through our integrated offering, you gain the benefits of setting up
          in the world’s first free zone dedicated to digital and virtual
          assets, combined with access to Carlo PEaaS, Algorethics’
          industry-leading ethical compliance platform.
          <br />
          <br />
          Whether you&apos;re launching a DeFi protocol, building a responsible
          AI SaaS product, or scaling a blockchain-based digital community, this
          solution ensures your project meets global compliance, transparency,
          and trust standards—right from incorporation.
        </p>
        <WhoisThis />
        <RAKDAOBenefits />
        <PremiumPlansTable />
        <WhyLaunchWithUs />
        <GetStartedTimeline />
        <ContactSetupTeam />
      </div>
    </div>
  );
}
