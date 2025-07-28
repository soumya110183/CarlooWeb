import React from "react";

export default function ButtonPimary({ buttonText }) {
  return (
    <button className="text-white border-none   outline-none bg-[#651FFF] font-bold   px-7 py-5 text-[18px] rounded-[36px] nav-text">
      {buttonText}
    </button>
  );
}
