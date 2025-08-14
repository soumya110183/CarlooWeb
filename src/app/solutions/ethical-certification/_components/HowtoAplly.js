import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import Image from "next/image";

export default function HowToApply() {
  return (
    <section className="w-full max-w-[1200px] flex  items-center gap-16 lg:gap-24 mx-auto text-foreground lg:pb-32 pb-16 ">
      
      {/* Text Content */}
      <div className="w-full ">
        <HeadingReuse heading={"How to Apply for Carlo Certification"} />
        
        <p className="font-normal text-[20px] leading-relaxed mt-2">
          Visit <a href="https://policyenforcement.com" target="_blank" className="text-[#651FFF] underline">policyenforcement.com</a> or <a href="https://algorethics.info/apply" target="_blank" className="text-[#651FFF] underline">algorethics.info/apply</a> and select “Apply for Certification.” You’ll receive:
        </p>

        <ul className="mt-4 space-y-3 list-disc list-inside text-lg leading-relaxed">
          <li>Submission instructions</li>
          <li>NDA & data protection agreement</li>
          <li>Compliance checklist</li>
          <li>Optional pre-assessment consultation</li>
        </ul>

        <p className="font-normal text-[20px] leading-relaxed mt-4">
          This streamlined process ensures that your project is evaluated efficiently while maintaining full compliance and data protection.
        </p>
      </div>

      {/* Image */}
      <div className="w-full ">
        <Image
          src="/vision.png"
          alt="how-to-apply-carlo"
          width={500}
          height={580}
          className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}
