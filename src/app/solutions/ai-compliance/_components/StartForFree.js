import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import Image from "next/image";

export default function StartForFree() {
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col flex-row-reverse max-lg:gap-20 items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse heading={"Start for Free. Scale with Confidence."} />
        <ParagraphReUse
          paragraph={
            "We offer a Free Tier for startups and open-source projects to begin their ethical AI journey. This includes:"
          }
        />
        <ul className="mt-6 space-y-4 list-disc list-inside text-lg max-sm:text-base">
          <li>
            <strong>Bias & Explainability Dashboard:</strong> Access for one
            model.
          </li>
          <li>
            <strong>Monthly Compliance Summary:</strong> Regular reports to
            track AI ethics.
          </li>
          <li>
            <strong>Ethical AI Starter Badge:</strong> Show your commitment to
            responsible AI.
          </li>
        </ul>

        <ParagraphReUse
          paragraph={
            "For scaling businesses, our subscription tiers (Innovator Essentials, Blockchain Guardian, Ethical Pinnacle) offer:"
          }
        />
        <ul className="mt-6 space-y-4 list-disc list-inside text-lg max-sm:text-base">
          <li>
            <strong>Advanced Audit Logs:</strong> Deep tracking of AI activity
            and compliance.
          </li>
          <li>
            <strong>Cross-Chain AI Compliance:</strong> Compliance support
            across blockchain integrations.
          </li>
          <li>
            <strong>Dedicated Compliance Officer:</strong> Direct expert support
            for your AI systems.
          </li>
          <li>
            <strong>Investor-Grade Reporting:</strong> Professional compliance
            reports for stakeholders.
          </li>
        </ul>
      </div>
      <div>
        <Image
          width={500}
          height={580}
          src="/startforFree.png"
          alt="start-for-free"
          className="w-[500px]"
        />
      </div>
    </section>
  );
}
