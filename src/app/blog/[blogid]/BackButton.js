"use client"

import { useTheme } from "@/app/_subcomponents/ThemeContext";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function BackButton(){

    const {theme}=useTheme()
    return(
        <div className="flex justify-end mb-3">
          <Link
            href={"/blog"}
            className={`${theme === "light"?"text-[#651FFF] hover:bg-[#651FFF]/10 hover:text-[#651FFF]":"text-[#00d4fa] hover:bg-[#00d4fa]/10 hover:text-[#00d4fa] "} text-base font-bold flex gap-1 items-center 
                       transition-all duration-300 hover:text-[#00d4fa] 
                       hover:gap-2 rounded-full px-2 py-3 hover:bg-[#00d4fa]/10`}
          >
            <IoArrowBack size={25} />
            Back to Blogs
          </Link>
        </div>
    )
}