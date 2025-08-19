import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

export default function RealTimeUseCases() {
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col max-lg:gap-16 items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      {/* Left: Text Content */}
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse heading={"Real-Time Use Case Snapshots"} />

        <ul className="mt-6 space-y-5 list-disc list-inside text-lg max-sm:text-base leading-relaxed">
          <li>
            <strong>Healthcare Diagnosis Platform:</strong> Regulators flagged a
            radiology AI for opaque predictions.
            <br />
            <strong>Carlo Solution:</strong> Added explainability scoring,
            real-time audits, and patient consent logs.
          </li>
          <li>
            <strong>Lending-as-a-Service Platform:</strong> Faced allegations of
            racial bias in loan approvals.
            <br />
            <strong>Carlo Solution:</strong> Implemented bias detection with
            demographic filters and realigned training data.
          </li>
          <li>
            <strong>EdTech Recommendation Engine:</strong> Favored urban over
            rural student profiles.
            <br />
            <strong>Carlo Solution:</strong> Introduced multi-factor fairness
            scoring and a stakeholder dashboard.
          </li>
        </ul>
      </div>

      {/* Right: Image */}
      <div>
        <Image
          width={500}
          height={580}
          src="/vision.png"
          alt="robot-validator"
          className="w-[500px] object-contain"
        />
      </div>
    </section>
  );
}
