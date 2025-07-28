import { motion } from "motion/react";
import ButtonPimary from "./ButtonPrimary";

function HeaderSlider({ filteredSlide }) {
  return (
    <motion.div
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full max-w-[1480px] mx-auto  items-center flex justify-between text-white"
    >
      <div className="z-40 pl-20">
        <h1 className="text-[48px] font-bold bg-gradient-to-br from-cyan-300 to-purple-200 ... bg-clip-text text-transparent">
          {filteredSlide.heading}
        </h1>
        <p className="text-[28px] font-semibold mt-3.5">
          {filteredSlide.paragraph}
        </p>
        <div className="flex items-center  gap-5  mt-10">
          <ButtonPimary buttonText={"GET STARTED"} />
          <button className="text-white border-none p-0 m-0  outline-none bg-[#651FFF]  w-[49px] h-[49px] text-[18px] rounded-full nav-text flex items-center justify-center">
            <img src="/play-512.png" className="h-[25px]" alt="" />
          </button>
          <button className="text-[#00E5FF] bg-transparent p-0 m-0  outline-none border border-[#00E5FF]  px-5 py-5 text-[18px] rounded-[36px] nav-text flex items-center justify-center">
            WATCH INTRO VIDEO
          </button>
        </div>
      </div>
      <div className="relative w-[1400px] h-[500px]">
        <img
          src="/banner_ai_m7ru8l.png"
          className="absolute top-[50px] left-[380px]  z-10"
          alt="main bot"
        />
        <img
          src="/diamond_a9huzy.png"
          className="absolute top-[100px] left-[0px] w-[260px]"
          alt="diamond"
        />
        <img
          src="/egg_ng3ic4.png"
          className="absolute bottom-[100px] right-[20px] w-[270px] z-50"
          alt="egg"
        />
        <img
          src="/hexa_qbnay8.png"
          className="absolute left-[240px]  w-[120px]"
          alt="hexagon"
        />
        <img
          src="/nail_aog1yx.png"
          className="absolute bottom-[0px] left-[200px] w-[280px]"
          alt="nail"
        />
      </div>
    </motion.div>
  );
}

export default HeaderSlider;
