import Image from "next/image";
import CardSlider from "../_subcomp/SwiperSlider";

export default function Trust() {
  return (
    <div className="w-full max-w-[1200px] flex items-center mx-auto justify-between text-white pb-32">
      <div className="w-full max-w-[570px]">
        <h2 className="text-[40px] font-bold">3. Trust and Transparency</h2>
        <div className="flex gap-2">
          <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
          <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
        </div>
        <p className="font-medium text-[22px] mt-6">
          Carlo&apos;s commitment to trust is demonstrated through
          certifications and alignment with global standards:
        </p>
        <div className="w-full max-w-[400px] mt-5">
          <CardSlider trust={true} />
        </div>
      </div>

      <div>
        <Image
          src="/Trustrobot.png"
          alt="robot-validator"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
