import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import Image from "next/image";

export default function BlockchainDeFiMonitoring() {
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col max-lg:gap-16 items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse heading={"Why Blockchain & DeFi Monitoring Matters"} />

        <ParagraphReUse
          paragraph={
            "The promise of decentralization is freedom, but with freedom comes the need for self-regulation and demonstrable integrity. DeFi platforms and DAOs must prove:"
          }
        />

        <ul className="mt-6 space-y-3 list-disc list-inside text-lg max-sm:text-base leading-relaxed">
          <li>
            <strong>No Market Manipulation:</strong> Operate without insider
            control or unfair trading.
          </li>
          <li>
            <strong>Smart Contract Integrity:</strong> Ensure code behaves as
            intended and resists exploits.
          </li>
          <li>
            <strong>Fair Governance:</strong> Prevent dominance by a small group
            of token holders.
          </li>
          <li>
            <strong>Equitable Incentives:</strong> Avoid favoritism toward early
            actors or whales.
          </li>
        </ul>

        <ParagraphReUse
          paragraph={
            "Carlo empowers these entities with real-time tools to meet those demands and demonstrate ethical operational standards — think of it as an always-on due diligence system for decentralized environments."
          }
        />
      </div>

      <div className="flex justify-center">
        <Image
          width={500}
          height={580}
          src="/vision.png"
          alt="blockchain-defi-monitoring"
          className="w-[500px] rounded-2xl "
        />
      </div>
    </section>
  );
}
