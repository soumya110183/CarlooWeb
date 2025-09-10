import Image from "next/image";
import CardSlider from "../_subcomp/SwiperSlider";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";
import ParagraphReUse from "@/app/_subcomponents/ParagraphReUse";

export default function Trust() {
  return (
    <div
      className={`w-full max-w-[1200px] flex max-lg:flex-col items-center mx-auto justify-between text-foreground lg:pb-32 pb-15`}
    >
      <div className="w-full lg:max-w-[570px]">
       <HeadingReuse heading={"3. Trust and Transparency"} />
       <ParagraphReUse paragraph={"Carlo's commitment to trust is demonstrated through certifications and alignment with global standards:"} />
        <div className="w-full max-w-[400px] mt-5 max-lg:mx-auto">
          <CardSlider trust={true} />
        </div>
      </div>

      <div>
        <Image
          src="/Trustrobot-image.png"
          alt="robot-validator"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
