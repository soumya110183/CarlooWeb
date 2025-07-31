import ButtonPimary from "@/app/_subcomponents/ButtonPrimary";
import { BsCheck } from "react-icons/bs";

export default function Introduction() {
  return (
    <div className="w-full max-w-[1200px] flex items-center mx-auto justify-between text-white pb-32">
      <div>
        <img
          src="/whyCarlo.png"
          alt="robot-validator"
          className="w-[500px]"
        ></img>
      </div>
      <div className="w-full max-w-[570px]">
        <h2 className="text-[40px] font-bold">Why Carlo</h2>
        <div className="flex gap-2">
          <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>

          <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
        </div>
        <p className="font-medium text-[22px] mt-6">
          Carlo PEaaS is more than a compliance platform—it's your partner in
          building trust, mitigating risks, and ensuring that every algorithm
          aligns with global ethical and legal standards. Whether you’re
          developing AI for healthcare, finance, retail, or IoT, Carlo adapts to
          your needs and ensures your projects are always compliant and
          transparent.
        </p>
        <div className="flex items-center mt-12 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#651FFF] flex items-center justify-center">
              <BsCheck className="text-white text-xl" size={25} />
            </div>
            <p className="font-bold text-[20px] ">Global Reach</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#651FFF] flex items-center justify-center">
              <BsCheck className="text-white text-xl" size={25} />
            </div>
            <p className="font-bold text-[20px] ">Trust and Transparency</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-6">
          <div className="w-8 h-8 rounded-full bg-[#651FFF] flex items-center justify-center">
            <BsCheck className="text-white text-xl" size={25} />
          </div>
          <p className="font-bold text-[20px] ">Interactive Explainer</p>
        </div>
        <div className="mt-12">
          <ButtonPimary buttonText={"Read More"} />
        </div>
      </div>
    </div>
  );
}
