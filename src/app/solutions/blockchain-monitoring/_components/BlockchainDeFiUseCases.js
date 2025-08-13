import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

export default function BlockchainDeFiUseCases() {
  return (
    <section className="w-full max-w-[1200px] flex flex-row-reverse items-center gap-16 lg:gap-24 mx-auto text-foreground lg:pb-32 pb-16 px-4">
      
      {/* Text Content */}
      <div className="w-full ">
        <HeadingReuse heading={"Use Cases for Blockchain & DeFi Monitoring"} />
        
        <ul className="mt-4 space-y-4 list-decimal list-inside text-lg leading-relaxed">
          <li>
            <strong>Pre-Token Launch Governance Assessment:</strong> Before going live, simulate DAO behavior and test governance flows under different participation models.
          </li>
          <li>
            <strong>Post-Launch Staking & Yield Monitoring:</strong> Keep real-time visibility into staking pool behaviors, slashing events, validator rotations, and APY shifts.
          </li>
          <li>
            <strong>Investor & Partner Due Diligence:</strong> Use Carlo’s dashboards as an ethical trust layer when presenting to VCs, exchanges, or institutional partners.
          </li>
          <li>
            <strong>Community Reputation Management:</strong> Showcase your project&apos;s ethical posture with verifiable metrics that reflect transparency, fairness, and security.
          </li>
        </ul>
      </div>

      {/* Image */}
      <div className="w-full ">
        <Image
          src="/vision.png"
          alt="blockchain-defi-use-cases"
          width={500}
          height={580}
          className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}
