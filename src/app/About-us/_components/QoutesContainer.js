"use client";

import { useTheme } from "@/app/_subcomponents/ThemeContext";
import { IoIosQuote } from "react-icons/io";

export default function QoutesContainer({
  qoute = " Empowering trust in every algorithm by embedding ethics and complianceat the heart of AI development",
}) {
  const { theme } = useTheme();

  return (
    <div
      className={`px-10 py-20 max-sm:py-10 bg-[#651FFF] rounded-[9px] flex items-center justify-center relative text-white`}
    >
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[-30px]   ">
        <IoIosQuote  size={60} color="white"   style={{
    filter: 'drop-shadow(0 -4px 4px rgba(0, 0, 0, 0.4))'
  }} />
      </div>
      <p className="font-medium italic md:text-[24px] text-base sm:text-[18px]  max-w-[400px]">{qoute}</p>
    </div>
  );
}
