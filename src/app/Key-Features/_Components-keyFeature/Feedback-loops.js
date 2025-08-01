import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

export default function Feedback() {
  <section className="w-full max-w-[1200px] flex items-center mx-auto justify-between text-white pb-32">
    <div>
      <Image
        src="/machine-ai 1.png"
        alt="robot-validator"
        className="w-[500px]"
        width={500}
        height={500}
      />
    </div>
    <div className="w-full max-w-[570px]">
      <HeadingReuse heading={"Feedback Loops"} />
      <div className="flex gap-2 items-start">
        <p className="font-medium text-[22px] mt-6">
          Carlo PEaaS is more than a compliance platform—it&apos;s your partner
          in building trust, mitigating risks, and ensuring that every algorithm
          aligns with global ethical and legal standards. Whether you’re
          developing AI for healthcare, finance, retail, or IoT, Carlo adapts to
          your needs and ensures your projects are always compliant and
          transparent.
        </p>
      </div>
    </div>
  </section>;
}
