import Link from "next/link";
import React from "react";

export default function ButtonPimary({ buttonText,href,size="18" }) {
  return (
    <button className={`text-white border-none   outline-none bg-[#651FFF] flex shrink-0 font-bold   px-7 py-5 text-${size} rounded-[36px] nav-text`}>
      <Link href={href ? href : "#"}>
       {buttonText}
      </Link>
     
    </button>
  );
}
