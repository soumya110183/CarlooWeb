"use client"

import { useTheme } from "@/app/_subcomponents/ThemeContext";


export default function ContainerProvier({ title, paragraph,icon }) {

const {theme}=useTheme()

  return (
   <div
  className={`bg-foreground ${theme === "light" ? "text-white" : "text-black"} 
    px-10 flex   rounded-3xl py-10 min-h-[250px]`}
>
      <div>
        <div className="flex items-center gap-2">
          <div className="bg-[#C3C3C3] rounded-full p-2 w-10 h-10 flex items-center justify-center shrink-0 ">
                      {icon}
                    </div>
          <h3 className="font-bold text-[20px]">{title}</h3>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          {paragraph.map((para, index) => (
            <p className="max-w-[450px] font-normal" key={index}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
