import ButtonPimary from "@/app/_subcomponents/ButtonPrimary";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";
import Image from "next/image";

export default function HowToApply() {
  return (
    <section className="w-full max-w-[1200px] flex max-lg:flex-col items-center gap-16 lg:gap-24 mx-auto text-foreground lg:pb-32 pb-16 ">
      {/* Text Content */}
      <div className="w-full ">
        <HeadingReuse heading={"How to Apply for Carlo Certification"} />

        <p className="leading-relaxed font-normal text-foreground md:text-[20px] text-base sm:text-[18px]  mt-2">
          Getting certified with Carlo is simple. You just need to subscribe to any of our Blockchain Plans to begin the certification process.
        </p>
        <ParagraphReUse paragraph={"By subscribing, you’ll receive:"}/>

        <ul className="mt-4 space-y-3 list-disc list-inside text-lg max-sm:text-base leading-relaxed">
          <li>Step-by-step submission instructions</li>
          <li>NDA & data protection agreement</li>
          <li>Compliance checklist</li>
          <li>Optional pre-assessment consultation</li>
        </ul>

        <ParagraphReUse
          paragraph={
            "This streamlined process ensures that your project is evaluated efficiently while maintaining full compliance and data protection."
          }
        />
        <div className="mt-5">

        <ButtonPimary buttonText={"View Blockchain Plans"} href={"/pricing"} />
        </div>
      </div>

      {/* Image */}
      <div className="w-full ">
        <Image
          src="/howtoApply.png"
          alt="how-to-apply-carlo"
          width={500}
          height={580}
          className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}
