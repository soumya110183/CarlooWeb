"use client";

import Image from "next/image";
import { useTheme } from "@/app/_subcomponents/ThemeContext";

export default function ProjectCards() {
  const { theme } = useTheme();

  const cards = [
    {
      id: 1,
      title: "23K",
      text: "Completed Projects",
      img: "/blue-element.png",
      className: "lg:top-20 lg:left-36",
    },
    {
      id: 2,
      title: "67",
      text: "Completed Projects",
      img: "/round-element.png",
      className: "lg:top-20 lg:right-0",
    },
    {
      id: 3,
      title: "450",
      text: "Completed Projects",
      img: "/clock.png",
      className: "lg:bottom-20 lg:left-20",
    },
    {
      id: 4,
      title: "19K+",
      text: "Completed Projects",
      img: "/pattern.png",
      className: "lg:bottom-20 lg:right-0",
    },
  ];

  return (
    <div className="relative w-full min-h-[616px] px-5 sm:px-10 max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1 max-lg:gap-6 max-lg:h-auto">
      {cards.map((card) => (
        <div
          key={card.id}
          style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }}
          className={`w-[174px] h-[189px] sm:w-[200px] sm:h-[200px] 
            ${theme === "light" ? "bg-white/40" : "bg-black/40"} 
            backdrop-blur-xl rounded-[14px] absolute ${
              card.className
            } z-10 px-2 
            max-lg:static max-lg:w-full`}
        >
          <div className="relative">
            <Image
              src={card.img}
              alt={card.text}
              width={150}
              height={153}
              className="absolute top-[-70px] right-[-30]"
            />
            <div className="pt-14 pl-4">
              <h4 className="font-bold text-2xl sm:text-3xl">{card.title}</h4>
              <p className="font-semibold text-[15px]">{card.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
