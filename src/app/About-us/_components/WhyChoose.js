import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";
import PointsContainer from "./PointsContainer";

export default function WhyChoose() {
  return (
    <section className="w-full max-w-[1200px] flex items-center mx-auto justify-between text-white pb-32">
      <div className="w-full max-w-[570px]">
        <HeadingReuse heading={"Why Choose Carlo PeaaS?"} />

        <div className="flex gap-2 items-start">
          <p className="font-normal text-[22px] mt-6">
            Your Trusted Partner in Ethical AI.
          </p>
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
          src="/WhyRobot.png"
          alt="robot-validator"
          className="w-[500px]"
        />
      </div>
    </section>
  );
}
