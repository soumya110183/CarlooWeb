import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import Image from "next/image";

export default function BookCarloAudit() {
  return (
    <section className="w-full max-w-[1200px] flex flex-row-reverse max-lg:flex-col items-center gap-16 lg:gap-24 mx-auto text-foreground lg:pb-32 pb-16 ">
      {/* Text Content */}
      <div className="w-full">
        <HeadingReuse heading={"Book Your Carlo Smart Contract Audit"} />

        <ParagraphReUse
          paragraph={
            "Whether you're preparing for launch, targeting listing on an exchange, or submitting to VCs, a Carlo audit can give you the security and credibility you need to move forward with confidence."
          }
        />

        <p className="font-normal text-[20px] max-sm:text-base leading-relaxed mt-6">
          Request a Quote or Consultation
        </p>
      </div>

      {/* Image */}
      <div className="w-full">
        <Image
          src="/bookyourCarlo.png"
          alt="book-carlo-audit"
          width={500}
          height={580}
          className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}
