import Link from "next/link";
import React from "react";

export default function ButtonPimary({ buttonText,href }) {
  return (
    <button className="text-white border-none   outline-none bg-[#651FFF] font-bold   px-7 py-5 text-[18px] rounded-[36px] nav-text">
      <Link href={href ? href : "#"}>
       {buttonText}
      </Link>
     
    </button>
  );
}
