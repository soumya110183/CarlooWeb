import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

export default function WhatisAi() {
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col max-lg:gap-16 items-center mx-auto justify-between text-foreground lg:pb-32 pb-15">
      <div className="w-full lg:max-w-[570px]">
        <HeadingReuse heading={"What is AI Compliance?"} />

        <p className="font-normal text-[20px] leading-relaxed mt-6 text-justify">
          AI compliance is the alignment of an organization&apos;s AI development and deployment 
          processes with globally accepted legal, regulatory, and ethical frameworks. With emerging 
          regulations such as the <strong>European Union&apos;s AI Act</strong>, 
          <strong> General Data Protection Regulation (GDPR)</strong>, 
          <strong> California Consumer Privacy Act (CCPA)</strong>, 
          <strong> UAE Data Protection Law</strong>, and guidance from frameworks like the 
          <strong> Rome Call for AI Ethics</strong>, the onus is now on organizations to prove 
          that their AI is <strong>fair</strong>, <strong>safe</strong>, 
          <strong> accountable</strong>, and <strong>privacy-respecting</strong>.
        </p>

        <ul className="mt-6 space-y-3 list-disc list-inside text-lg leading-relaxed">
          <li><strong>Continuous bias testing</strong> across data inputs and outputs</li>
          <li><strong>Model explainability and transparency</strong> for regulators and stakeholders</li>
          <li><strong>Privacy impact assessments</strong> in line with national and international data laws</li>
          <li><strong>Usage alignment</strong> ensuring AI is used as intended and not for harmful or unintended outcomes</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <Image
          width={500}
          height={580}
          src="/vision.png"
          alt="robot-validator"
          className="w-[500px] rounded-2xl "
        />
      </div>
    </section>
  );
}
