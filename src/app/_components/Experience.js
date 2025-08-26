import Link from "next/link";
import ParagraphReUse from "../_subcomponents/ParagraphReUse";

export default function Experience() {
  return (
    <section className="px-5 sm:px-10 pb-30 ">
      <div
        className="w-full max-w-[1000px] mx-auto rounded-[18px] sm:rounded-[40px] lg:rounded-[50px] mt-16 sm:mt-20 lg:mt-[222px] text-white p-6 sm:p-10 lg:p-16 "
        style={{
          background:
            "linear-gradient(173deg, rgba(138, 252, 253, 1) 0%, rgba(227, 199, 217, 1) 100%)",
          boxShadow: "0 -40px 60px -10px rgba(138, 252, 253, 0.5)",
        }}
      >
        <div className="text-center">
          <h3 className="font-bold text-[20px] sm:text-3xl md:text-4xl lg:text-[48px] text-black leading-snug">
            Experience Compliance,
            <br className="hidden sm:block" />
            Effortlessly
          </h3>

         <p
        className={` leading-relaxed font-normal text-black md:text-[20px] text-base sm:text-[18px] lg:mt-6 mt-4 
         
        `}
      >
        Explore how Carlo PEaaS simplifies AI compliance with real-time monitoring, automated enforcement, and actionable insights. See for yourself how easy it is to ensure trust and transparency in your AI systems
      </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-7 mt-6">
            {/* Button 1 */}
            <Link
              href="https://test.policyenforcement.com/login"
              className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-[37px] text-sm sm:text-base font-semibold text-center"
            >
              START FREE TRIAL
            </Link>

            {/* Button 2 */}
            <Link
              href="/Contact"
              className="w-full sm:w-auto px-6 py-3 border-2 border-black text-black rounded-[37px] text-sm sm:text-base font-semibold text-center"
            >
              TALK TO A COMPLIANCE SUPPORT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
