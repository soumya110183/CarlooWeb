"use client";

import { useTheme } from "./ThemeContext";

export default function ScrollHeading({ heading, paragraph }) {
  const { theme } = useTheme();

  return (
    <div className="w-full  overflow-visible">
      <div
        className={`max-w-7xl mx-auto mt-8 sm:mt-10 ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        <h2
          className="
            text-4xl sm:text-5xl md:text-7xl lg:text-[80px] xl:text-[100px]
            font-bold text-center
            bg-clip-text text-transparent
            bg-gradient-to-r from-[#8fa5ff] via-[#38bdf8] to-[#a78bfa]
            leading-tight sm:leading-snug md:leading-none break-words
          "
        >
          {heading}
        </h2>

        <p
          className="
            font-normal 
            text-base text-center sm:text-lg md:text-xl lg:text-2xl 
            max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-[1219px]
             mx-auto mt-3 sm:mt-4 md:mt-6
          "
        >
          {paragraph}
        </p>
      </div>
    </div>
  );
}
