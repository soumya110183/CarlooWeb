"use client"

import ButtonPimary from "@/app/_subcomponents/ButtonPrimary";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import { useTheme } from "@/app/_subcomponents/ThemeContext";
import Image from "next/image";
import ProjectCards from "./ProjectCards";

export default function ProjectCount() {

  const {theme}=useTheme()
  return (
    <div className="relative lg:pb-32 pb-15">
      <Image
        width={1500}
        height={700}
        src="/parallax_zqaizh (1) 1.png"
        alt="background-image"
        className="absolute inset-0 w-full h-full left-[-700px] lg:block hidden   -z-10" 
      />

      <section
        className={`w-full max-w-[1200px] flex max-lg:flex-col gap-10 items-center mx-auto justify-between text-foreground `}
      >
       <ProjectCards />
        <div className="w-full lg:max-w-[570px]">
          <HeadingReuse
            heading={
              "Carlo - Making AI Compliance Effortless, Ethical, and Built Right Into Your Workflow."
            }
          />
          <div className="flex gap-2 items-start">
            <ParagraphReUse paragraph={"Carlo is an AI compliance platform designed to monitor, detect, and enforce ethical standards across projects. It validates outputs against global regulations, flags risks, and provides real-time feedback for safer AI adoption. Carlo helps organizations integrate transparency, accountability, and trust directly into their workflows without disrupting productivity."} />
          </div>
          <div className="lg:mt-8 mt-4">
            <ButtonPimary buttonText={"About us"} href={"/about"} />
          </div>
        </div>
      </section>
    </div>
  );
}
