import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

export default function GetStartedCarlo() {
  return (
    <section className="w-full max-w-[1200px] flex flex-row-reverse items-center gap-16 lg:gap-24 mx-auto text-foreground lg:pb-32 pb-16 px-4">
      
      {/* Text Content */}
      <div className="w-full ">
        <HeadingReuse heading={"Get Started with Carlo Blockchain Monitoring"} />
        
        <p className="font-normal text-[20px] leading-relaxed mt-2">
          We offer a <strong>Free Ethics Snapshot Report</strong> for qualifying projects. Within 14 days, receive:
        </p>

        <ul className="mt-4 space-y-3 list-disc list-inside text-lg leading-relaxed">
          <li><strong>DAO governance audit</strong></li>
          <li><strong>Smart contract transparency score</strong></li>
          <li><strong>Tokenomics risk profile</strong></li>
        </ul>

        <p className="font-normal text-[20px] leading-relaxed mt-4">
          Whether you’re a DAO steward, DeFi engineer, or NFT platform founder, Carlo gives you the tools to de-risk your operations and raise your ethical credibility in a trust-starved ecosystem.
        </p>

        <div className="mt-6 space-y-2">
          <p>Email: <a href="mailto:steve@algorethics.ai" className="text-[#651FFF] underline">steve@algorethics.ai</a></p>
          <p>Dashboard: <a href="https://policyenforcement.com" target="_blank" className="text-[#651FFF] underline">https://policyenforcement.com</a></p>
          <p>Learn More: <a href="https://www.algorethics.info" target="_blank" className="text-[#651FFF] underline">www.algorethics.info</a></p>
        </div>
      </div>

      {/* Image */}
      <div className="w-full ">
        <Image
          src="/vision.png"
          alt="get-started-carlo"
          width={500}
          height={580}
          className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}
