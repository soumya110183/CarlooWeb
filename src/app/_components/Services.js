import Link from "next/link";
import Percentage from "../_subcomponents/Percentage";
import { useTheme } from "../_subcomponents/ThemeContext";

export default function Services() {
  return (
    <section className="sm:px-10 px-5">
      <div
        className={`w-full max-w-[1200px] flex max-lg:flex-col items-center gap-10 mx-auto mt-36 justify-between text-foreground`}
      >
        <div className="w-full lg:max-w-[434px]">
          <h2 className="sm:text-[32px] text-[28px] font-bold">
            Compliance Intelligence That Powers Results
          </h2>
          <div className="flex gap-2 mt-4">
            <div className="w-4 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>

            <div className="w-24 h-3 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
          </div>
          <p className="w-full text-[18px] font-medium mt-4">
            Carlo PEaaS is not just a tool—it&apos;s your real-time compliance
            co-pilot. Whether you&apos;re developing AI for finance, healthcare,
            retail, or any regulated industry, Carlo ensures your models stay
            aligned with global laws and ethical principles from day one.
          </p>
        </div>
        <div className="w-full max-w-[570px]">
          <Percentage />
          <div className="flex items-center max-sm:flex-col w-full justify-between lg:mt-5 mt-10">
            <div>
              <h3 className="font-bold text-[24px] max-sm:text-[20px]">
                Have any question about us?
              </h3>
              <p className="text-[16px] font-medium">
                Don&apos;t hesitate to contact us. Contact Us
              </p>
            </div>
              <Link href={"/contact"}>
            <button className="text-white border-none  m-0  outline-none bg-[#651FFF] max-sm:mt-5   p-2.5 text-[15px] rounded-[36px] font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
