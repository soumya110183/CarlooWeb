"use client";

import { useTheme } from "@/app/_subcomponents/ThemeContext";
import Image from "next/image";

export default function TeamContainer({ img, name, role, details }) {
  const { theme } = useTheme();
  return (
    <div
      className={`bg-[#0F092A] px-10 max-sm:px-4 items-center text-white justify-items-center rounded-3xl py-10 "`}
    >
      <div>
        <div className="relative w-56 h-56 rounded-full border border-white overflow-hidden mx-auto">
          <Image
            width={224}
            height={224}
            src={`/${img}`}
            alt={img}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="font-bold text-center md:text-[22px] text-base sm:text-[18px] mt-3">{name}</h3>

        <p className="font-semibold text-[18px] max-sm:text-base text-center">{role}</p>
        <p
          className="font-normal  text-[16px] mt-2.5  "
          style={{ whiteSpace: "pre-line" }}
        >
          {details}
        </p>
      </div>
    </div>
  );
}
