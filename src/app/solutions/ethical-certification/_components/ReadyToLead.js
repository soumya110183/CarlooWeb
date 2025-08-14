import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

export default function ReadyToLead() {
  return (
    <section className="w-full max-w-[1200px] flex flex-row-reverse items-center gap-16 lg:gap-24 mx-auto text-foreground lg:pb-32 pb-16 ">
      
      {/* Text Content */}
      <div className="w-full ">
        <HeadingReuse heading={"Ready to Lead Ethically?"} />
        
        <p className="font-normal text-[20px] leading-relaxed mt-4">
          Ethical excellence isn’t optional in today’s global digital economy. Get certified. Get trusted. Get ahead.
        </p>

        <div className="mt-6 space-y-2">
          <p>Email: <a href="mailto:steve@algorethics.ai" className="text-[#651FFF] underline">steve@algorethics.ai</a></p>
          <p>Platform: <a href="https://policyenforcement.com" target="_blank" className="text-[#651FFF] underline">https://policyenforcement.com</a></p>
        </div>
      </div>

      {/* Image */}
      <div className="w-full ">
        <Image
          src="/vision.png"
          alt="ready-to-lead-ethically"
          width={500}
          height={580}
          className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}
