import Link from "next/link";
import React from "react";

export default function ButtonPimary({
  wfull,
  buttonText,
  href,
  size = "18",
  width = false,
  
}) {
  return (
    <button
      className={`text-white border-none max-sm:text-base ${wfull && "w-full"} ${
        width && "max-sm:w-full"
      } items-center justify-center outline-none bg-[#651FFF] flex shrink-0 font-bold px-7 sm:py-5 py-4 text-${size} rounded-[36px] nav-text 
      transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
      aria-label={buttonText}
    >
      <Link href={href ? href : "#"}>{buttonText}</Link>
    </button>
  );
}
