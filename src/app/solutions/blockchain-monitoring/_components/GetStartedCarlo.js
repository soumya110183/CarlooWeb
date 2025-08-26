import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import Image from "next/image";

export default function GetStartedCarlo() {
  return (
    <section className="w-full max-w-[1200px] flex flex-row-reverse max-lg:flex-col items-center gap-16 lg:gap-24 mx-auto text-foreground lg:pb-32 pb-16 ">
      {/* Text Content */}
      <div className="w-full ">
        <HeadingReuse
          heading={"Get Started with Carlo Blockchain Monitoring"}
        />

        <ParagraphReUse
          paragraph={
            "We offer a Free Ethics Snapshot Report for qualifying projects. Within 14 days, receive:"
          }
        />

        <ul className="mt-4 space-y-3 list-disc list-inside text-lg max-sm:text-base leading-relaxed">
          <li>
            <strong>DAO governance audit</strong>
          </li>
          <li>
            <strong>Smart contract transparency score</strong>
          </li>
          <li>
            <strong>Tokenomics risk profile</strong>
          </li>
        </ul>

        <ParagraphReUse
          paragraph={
            "Whether you’re a DAO steward, DeFi engineer, or NFT platform founder, Carlo gives you the tools to de-risk your operations and raise your ethical credibility in a trust-starved ecosystem."
          }
        />
      </div>

      {/* Image */}
      <div className="w-full ">
        <Image
          src="/getStartedfor.png"
          alt="get-started-carlo"
          width={500}
          height={580}
          className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}
