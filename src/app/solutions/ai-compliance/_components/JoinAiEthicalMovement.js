import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

export default function JoinEthicalAIMovement() {
  return (
    <section className="w-full max-w-[1200px] flex flex-row items-center gap-16 lg:gap-24 mx-auto text-foreground lg:pb-32 pb-16 px-4">

      {/* Text Content */}
      <div className="w-full lg:max-w-[600px]">
        <HeadingReuse heading={"Join the Ethical AI Movement"} />

        <p className="font-normal text-[20px] leading-relaxed mt-4">
          Over 200 companies globally are using Carlo to build responsible, transparent, and compliant AI. From seed-stage startups to enterprise-scale tech firms, our tools adapt to meet your current and future risk posture.
        </p>

        <h3 className="mt-6 text-[20px] font-semibold">
          Ready to embed trust in your technology?
        </h3>

        <p className="font-normal text-[20px] leading-relaxed mt-4">
          Book a demo. Test your first model. Join the ecosystem shaping the future of AI.
        </p>

  
      </div>

      {/* Image */}
      <div className="w-full lg:max-w-[500px]">
        <Image
          src="/vision.png"
          alt="ethical-ai-join"
          width={500}
          height={580}
          className="w-full h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}
