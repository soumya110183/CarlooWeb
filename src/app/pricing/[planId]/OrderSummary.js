"use client";

import { useTheme } from "@/app/_subcomponents/ThemeContext";
import Link from "next/link";

export default function OrderSummary({setFormComp}) {
  const { price, setPrice } = useTheme();

  return (
    <div className="bg-white w-full max-w-[492px]  rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.3)] p-5 text-black">
      <h3 className="font-semibold text-[18px]">Order Summary</h3>
      <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
      <h3 className="font-semibold text-[16px] mt-5">Seed Compliance</h3>
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-[18px] mt-5">Sub Total</h4>
        <h4 className="font-semibold text-[18px] mt-5">
          {price.total + " " + price.currency}
        </h4>
      </div>
    
        <button
        onClick={() => setFormComp(true)}
          type="submit"
          className="bg-[#651FFF] text-white px-4 py-2 w-full rounded hover:bg-blue-700 disabled:opacity-60 mt-10 "
        >
          Continue
        </button>
      
    </div>
  );
}
