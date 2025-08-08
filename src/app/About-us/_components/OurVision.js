import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import QoutesContainer from "./QoutesContainer";
import Image from "next/image";

export default function OurVision() {
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col max-lg:gap-20 items-center mx-auto justify-between text-foreground pb-32">
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse heading={"Our Vision"} />
        <div className="mt-10">
          <QoutesContainer qoute="A future where AI systems empower humanity, not exploit it." />
        </div>

        <div className="flex gap-2 items-start">
          <p className="font-normal text-[22px] mt-6">
            We envision a global AI ecosystem where innovation and ethics
            coexist harmoniously, driving progress while respecting privacy,
            fairness, and accountability.
          </p>
        </div>
      </div>
      <div>
        <Image
          width={500}
          height={580}
          src="/WhyRobot.png"
          alt="robot-validator"
          className="w-[500px]"
        />
      </div>
    </section>
  );
}
