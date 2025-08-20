import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import Image from "next/image";

export default function ReadyToLead() {
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col flex-row-reverse items-center gap-16 lg:gap-24 mx-auto text-foreground lg:pb-32 pb-16 ">
      {/* Text Content */}
      <div className="w-full ">
        <HeadingReuse heading={"Ready to Lead Ethically?"} />

        <ParagraphReUse
          paragraph={
            "Ethical excellence isn’t optional in today’s global digital economy. Get certified. Get trusted. Get ahead."
          }
        />
      </div>

      {/* Image */}
      <div className="w-full ">
        <Image
          src="/readytoLead.png"
          alt="ready-to-lead-ethically"
          width={500}
          height={580}
          className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}
