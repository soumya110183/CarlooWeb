"use client";

import { useState } from "react";

function Hero() {
  const [activeSlide, setActiveSlide] = useState("First Slide");
  return (
    <section>
      <div className="flex items-center gap-2 mt-18 text-white  ">
        <div className="w-full max-w-[1180px] mx-auto  items-center flex justify-between text-white">
          <div>
            <h1 className="text-[48px] font-bold ">
              Transforming Compliance <br /> Building Trust <br />
              <span className=" bg-gradient-to-br from-cyan-300 to-purple-200 ... bg-clip-text text-transparent">
                Empowering AI
              </span>
            </h1>
            <div className="flex item-center w-full max-w-[500px] justify-between mt-10">
              <button className="text-white border-none p-0 m-0  outline-none bg-[#651FFF]  w-[200px] h-[49px] text-[18px] rounded-[36px] nav-text">
                GET STARTED
              </button>
              <button className="text-white border-none p-0 m-0  outline-none bg-[#651FFF]  w-[49px] h-[49px] text-[18px] rounded-full nav-text flex items-center justify-center">
                <img src="/play-512.png" className="h-[25px]" alt="" />
              </button>
              <button className="text-[#00E5FF] bg-transparent p-0 m-0  outline-none border border-[#00E5FF]  w-[200px] h-[49px] text-[18px] rounded-[36px] nav-text flex items-center justify-center">
                Watch Intro Video
              </button>
            </div>
          </div>
          <div>
            <img src="/robot.png" className="w-[400px]" alt="" />
          </div>
        </div>
        
      </div>
      <div className="flex items-center mx-auto justify-between mt-7.5 w-full max-w-[800px]">
        {["First Slide", "Second Slide", "Third Slide"].map((slide) => (
          <button
            key={slide}
            className={`
    cursor-pointer 
    text-[26px] 
    rounded-full 
    font-bold 
    transition-all duration-400
    mt-5
    ${
      activeSlide === slide
        ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        : "text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent"
    }
  `}
            onClick={() => setActiveSlide(slide)}
          >
            {slide}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Hero;
