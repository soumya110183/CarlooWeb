"use client";

import { useRef, useState } from "react";
import Slide from "../_json/Slide.json";
import HeaderSlider from "../_subcomponents/HeaderSlider";
import { useTheme } from "../_subcomponents/ThemeContext";

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef(null);
 const {theme}=useTheme()
  const handleScrollTo = (index) => {
    setActiveSlide(index);
    const scrollContainer = scrollRef.current;
    const slideWidth = scrollContainer.offsetWidth;
    scrollContainer.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full mt-25">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth  no-scrollbar"
      >
        {["First Slide", "Second Slide", "Third Slide", "Fourth Slide"].map(
          (label, i) => {
            const slide = Slide.find((s) => s.character === label);
            return (
              <div key={label} className="w-full flex-shrink-0 snap-start ">
                <HeaderSlider filteredSlide={slide} label={label} theme={theme} />
              </div>
            );
          }
        )}
      </div>

      <div className="flex gap-5 mx-auto justify-center">
        {["The Validator", "The Watcher", "The Guardian", "The Messenger"].map(
          (label, index) => (
            <button
              key={label}
              onClick={() => handleScrollTo(index)}
              className={`cursor-pointer text-[26px] rounded-full font-bold transition-all duration-400 mt-5 ${
                activeSlide === index
                  ? "bg-gradient-to-r from-[#a78bfa] to-[#9333ea] bg-clip-text text-transparent"
                  : `${theme === "light" ? "text-black" : "text-white"} hover:text-purple-300`
              }`}
            >
              {label}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Hero;
