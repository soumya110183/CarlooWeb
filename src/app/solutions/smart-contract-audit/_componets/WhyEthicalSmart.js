import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";

export default function WhyEthicalSmart() {
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col max-lg:gap-16 items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      {/* Text Content */}
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse heading="Why Ethical Smart Contract Audits Matter" />

        <ParagraphReUse
          paragraph={
            "Most audits today focus purely on technical correctness — checking for bugs, validating math, and securing functions. That’s essential, but in an era where decentralized platforms manage billions in value and touch millions of users, it’s not enough."
          }
        />

        <p className="font-normal text-[20px] max-sm:text-[18px] leading-relaxed text-justify mt-4">
          What if the code allows:
        </p>

        <ul className="mt-4 space-y-3 leading-relaxed">
          <li className="flex items-start gap-3">
            <FaExclamationTriangle className="text-red-500 mt-[4px]" />A founder
            to mint unlimited tokens post-launch
          </li>
          <li className="flex items-start gap-3">
            <FaExclamationTriangle className="text-red-500 mt-[4px]" />
            Withdrawal fees that silently drain user funds
          </li>
          <li className="flex items-start gap-3">
            <FaExclamationTriangle className="text-red-500 mt-[4px]" />
            Governance overridden by a centralized wallet
          </li>
        </ul>

        <p className="font-normal text-[20px] max-sm:text-base leading-relaxed text-justify mt-6">
          These aren’t just <strong>technical risks</strong> — they are{" "}
          <span className="text-primary font-semibold">ethical failures</span>{" "}
          waiting to happen.
        </p>

        <p className="font-normal text-[20px]  max-sm:text-base leading-relaxed text-justify mt-6">
          <strong>Carlo</strong> redefines the standard for smart contract
          auditing:
        </p>

        <ul className="mt-4 space-y-3 leading-relaxed">
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#651fff] mt-[4px]" />
            Ensuring contracts are technically secure and optimized
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#651fff] mt-[4px]" />
            Identifying ethical red flags in logic and intent
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#651fff] mt-[4px]" />
            Preparing regulatory compliance documentation
          </li>
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-[#651fff] mt-[4px]" />
            Certifying code as trustworthy, transparent, and compliant
          </li>
        </ul>
      </div>
      <div className="w-full  flex justify-center">
        <Image
          src="/vision.png"
          alt="real-time-dashboards"
          width={500}
          height={580}
          className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}
