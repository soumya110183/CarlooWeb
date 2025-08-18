import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";
import PointsContainer from "./PointsContainer";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";

export default function WhyChoose() {
  return (
    <section className="w-full max-w-[1200px] max-lg:flex-col max-lg:gap-20 flex items-center mx-auto justify-between text-white lg:pb-32 pb-15">
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse heading={"Why Choose Carlo PeaaS?"} />

        <div className="flex gap-2 items-start">
         <ParagraphReUse paragraph={"Your Trusted Partner in Ethical AI."} />
        </div>
        <div className="flex flex-col gap-3.5 mt-5">
          <PointsContainer
            title={"Global Expertise:"}
            para={"Decades of experience in compliance and AI ethics."}
          />
          <PointsContainer
            title={"Cutting-Edge Technology"}
            para={
              "Advanced tools for real-time compliance monitoring and enforcement."
            }
          />
          <PointsContainer
            title={"Collaborative Approach"}
            para={
              "Dedicated to supporting our partners and customers with tailored solutions."
            }
          />
        </div>
      </div>
      <div>
        <Image
          width={500}
          height={580}
          src="/WhychooseUs.png"
          alt="robot-validator"
          className="w-[500px]"
        />
      </div>
    </section>
  );
}
