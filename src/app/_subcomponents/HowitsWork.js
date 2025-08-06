"use client"

import Image from "next/image";
import { useTheme } from "./ThemeContext";

export default function HowitsWork({ image, heading, paragraph }) {
const {theme}=useTheme()

  return (
    <div className="flex flex-col items-center justify-center relative mx-auto">
      <div className="flex flex-col items-center">
        <div
          className="absolute top-12 w-[250px] h-[140px] rounded-full blur-[80px] opacity-50 z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(182,154,239,0.4), rgba(133,81,248,0.2))",
          }}
        ></div>

        
        <div className="relative z-10 w-[100px] h-[100px]">
          <Image
            src={image}
            alt="Preprocessing"
            fill
            className="object-contain"
          />
        </div>

        <h3 className={`mt-4 text-black font-bold text-[22px] text-center z-10 ${theme === "light" ? "text-black" : "text-white"}`}>
          {heading}
        </h3>

        <p className={` text-center text-[16px] z-10 w-full max-w-[389px] ${theme === "light" ? "text-black" : "text-white"}`}>
          {paragraph}
        </p>
      </div>
    </div>
  );
}
