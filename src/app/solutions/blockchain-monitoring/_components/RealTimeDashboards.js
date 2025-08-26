import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import Image from "next/image";

export default function RealTimeDashboards() {
  return (
    <section className="w-full max-w-[1200px] flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 mx-auto text-foreground lg:pb-32 pb-16 ">
      {/* Text Content */}
      <div className="w-full ma ">
        <HeadingReuse heading={"Real-Time Dashboards Built for Action"} />

        <ParagraphReUse
          paragraph={"With Carlo’s unified interface, you gain:"}
        />

        <ul className="mt-4 space-y-3 list-disc list-inside text-lg max-sm:text-base leading-relaxed">
          <li>
            <strong>Governance Health Scores:</strong> Voting participation,
            proposal throughput, and voter diversity indicators.
          </li>
          <li>
            <strong>Whale Risk Analytics:</strong> Wallet concentration maps and
            voting power exposure.
          </li>
          <li>
            <strong>Compliance Heatmaps:</strong> Geographies and jurisdictions
            of user wallets and smart contract deployments.
          </li>
          <li>
            <strong>Cross-Chain Visualizations:</strong> Interactive graphs
            showing behavior across supported chains.
          </li>
        </ul>

      <ParagraphReUse paragraph={"All insights are digestible, filterable, and backed by exportable audit trails."} />
      </div>

      {/* Image */}
      <div className="w-full  flex justify-center">
        <Image
          src="/realtimeDashboard.png"
          alt="real-time-dashboards"
          width={500}
          height={580}
          className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}
