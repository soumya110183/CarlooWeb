import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";
import PointsContainer from "./PointsContainer";
import ButtonPimary from "@/app/_subcomponents/ButtonPrimary";

export default function OurTeam() {
  return (
    <section className="w-full max-w-[1200px] max-lg:flex-col max-lg:gap-20 flex items-center mx-auto justify-between text-foreground lg:pb-32 pb-15 ">
      <div>
        <Image
          width={500}
          height={580}
          src="/teamrobo.png"
          alt="robot-validator"
          className="w-[500px]"
        />
      </div>
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse heading={"Our Team"} />
        <div className="flex gap-2 items-start">
          <p className="font-normal text-[22px] mt-6 text-foreground">
            We are a diverse team of technologists, ethicists, and industry
            experts who bring decades of combined experience in AI development,
            compliance, and regulation. From building cutting-edge AI systems to
            shaping global ethical frameworks, our team is dedicated to making
            compliance seamless for every AI practitioner.
          </p>
        </div>
        <div className="flex flex-col gap-3.5 mt-5 text-foreground">
          <PointsContainer
            title={"Founders"}
            para={"Experts in AI ethics and compliance technologies."}
          />
          <PointsContainer
            title={"Advisors"}
            para={
              "Leaders in global regulatory bodies and ethical AI organizations."
            }
          />
          <PointsContainer
            title={"Global Reach"}
            para={
              "Team members across multiple countries, ensuring deep knowledge of local compliance needs."
            }
          />
        </div>
        <div className="mt-5">
          <ButtonPimary buttonText={"Contact Us"} size="16" />
        </div>
      </div>
    </section>
  );
}
