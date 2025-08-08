"use client"

import { useTheme } from "./ThemeContext";

export default function ScrollHeading({ heading, paragraph }) {
  const { theme } = useTheme();

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 xl:px-12 overflow-visible">
      <div
        className={`max-w-7xl mx-auto mt-10 ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        <h2 className="text-[127px] font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#8fa5ff] via-[#38bdf8] to-[#a78bfa] leading-none break-words">
          {heading}
        </h2>
        <p className="font-medium text-[20px] max-w-[1219px] text-center mx-auto mt-4">
          {paragraph}
        </p>
      </div>
    </div>
  );
}
