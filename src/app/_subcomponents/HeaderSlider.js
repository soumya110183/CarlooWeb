import { motion } from "framer-motion";
import Image from "next/image";
import ButtonPimary from "./ButtonPrimary";


function HeaderSlider({ filteredSlide,theme }) {

 
  return (
    <motion.div
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`w-full mx-auto items-center flex ${
        filteredSlide.character === "Second Slide" ||
        filteredSlide.character === "Fourth Slide"
          ? "flex-row-reverse"
          : ""
      } justify-between text-foreground  `}
    >
      <div
        className={`z-40 ${
          filteredSlide.character === "Second Slide" ? "pr-30" : "pl-30"
        }"`}
      >
        <h1 className={`text-[48px] font-bold ${theme === "light" ? "bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400" : "bg-gradient-to-br from-cyan-300 to-purple-200"}  bg-clip-text text-transparent`}>
          {filteredSlide.heading}
        </h1>
        <p className="text-[28px] font-semibold mt-3.5">
          {filteredSlide.paragraph}
        </p>
        <div className="flex items-center gap-5 mt-10">
          <ButtonPimary buttonText={"GET STARTED"} />
          <button className="text-white border-none p-0 m-0 outline-none bg-[#651FFF] w-[49px] h-[49px] text-[18px] rounded-full nav-text flex shrink-0 items-center justify-center">
            <Image
              src="/play-512.png"
              width={25}
              height={25}
              alt="play button"
               layout="fixed"
            />
          </button>
          <button className={`${theme === "light" ? "text-green-600" : "text-[#00E5FF]"} bg-transparent p-0 m-0 outline-none border ${theme === "light" ? "border-green-600" : "border-[#00E5FF]"}  px-5 py-5 text-[18px] rounded-[36px] nav-text flex shrink-0 items-center justify-center`}>
            <a href="https://www.youtube.com/@Algorethics">WATCH INTRO VIDEO</a>
          </button>
        </div>
      </div>

      {filteredSlide.character === "First Slide" && (
        <div className="relative hidden lg:block  w-[1400px] h-[500px]">
          <Image
            src="/banner_ai_m7ru8l.png"
            alt="main bot"
            width={1200}
            height={400}
            className="absolute top-[50px] left-[380px] z-10"
          />
          <motion.div
            animate={{
              x: [0, -30, 0, 30, 0],
              y: [0, -30, 0, -30, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[100px] left-[0px]"
          >
            <Image
              src="/diamond_a9huzy.png"
              alt="diamond"
              width={260}
              height={260}
            />
          </motion.div>

          <motion.div
            animate={{
              x: [0, -20, 0, 20, 0],
              y: [0, -20, 0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[240px]"
          >
            <Image
              src="/hexa_qbnay8.png"
              alt="hexagon"
              width={120}
              height={120}
            />
          </motion.div>

          <motion.div
            animate={{
              x: [0, -15, 0, 15, 0],
              y: [0, -25, 0, -25, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[0px] left-[200px]"
          >
            <Image src="/nail_aog1yx.png" alt="nail" width={280} height={280} />
          </motion.div>

          <motion.div
            animate={{
              x: [0, 15, 0, -15, 0],
              y: [0, -20, 0, -20, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[100px] right-[20px] z-50"
          >
            <Image src="/egg_ng3ic4.png" alt="egg" width={270} height={270} />
          </motion.div>
        </div>
      )}

      {filteredSlide.character === "Second Slide" && (
        <div className="relative hidden lg:block w-[1000px] h-[500px]">
          <motion.div
            animate={{ y: [0, -70, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-35 right-0 z-10"
          >
            <Image
              src="/pyramid_cb4o7y (1).png"
              alt="main bot"
              width={400}
              height={400}
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, -70, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-10 bottom-0 z-10"
          >
            <Image
              src="/shield_mkqdnn (1).png"
              alt="main bot"
              width={300}
              height={300}
            />
          </motion.div>
          <motion.div
            animate={{ y: [0, -70, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-35 bottom-70 z-10"
          >
            <Image
              src="/bar_hyiha8.png"
              alt="main bot"
              width={300}
              height={300}
            />
          </motion.div>
          /
          <motion.div
            animate={{ y: [0, -70, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[380px] bottom-80 z-10"
          >
            <Image
              src="/gem_le0tlz (1).png"
              alt="main bot"
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      )}

      {filteredSlide.character === "Third Slide" && (
        <div className="relative hidden lg:block w-[1400px] h-[500px]">
          <Image
            src="/fog_r7nvlh (1).png"
            alt="main bot"
            className="object-cover absolute top-[100px] right-[0px] "
            width={800}
            height={800}
          />

          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[100px] left-[0px] z-70"
          >
            <Image
              src="/duo_hskh2x (1).png"
              alt="diamond"
              width={400}
              height={400}
            />
          </motion.div>

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[1px] right-[220px] z-50"
          >
            <Image src="/egg_ng3ic4.png" alt="egg" width={270} height={270} />
          </motion.div>
        </div>
      )}

      {filteredSlide.character === "Fourth Slide" && (
        <div className="relative hidden lg:block w-[1400px] h-[500px]">
          <Image
            src="/banner_ai_m7ru8l.png"
            alt="main bot"
            width={800}
            height={800}
            className="absolute top-[50px] left-[100px] "
          />

          {/* DIAMOND */}
          <motion.div
            animate={{ y: [0, -70, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[100px] left-[0px]"
          >
            <Image
              src="/diamond_a9huzy.png"
              alt="diamond"
              width={260}
              height={260}
            />
          </motion.div>

          {/* EGG */}
          <motion.div
            animate={{ y: [0, -70, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[100px] right-[20px] z-50"
          >
            <Image src="/egg_ng3ic4.png" alt="egg" width={270} height={270} />
          </motion.div>

          {/* HEXAGON */}
          <motion.div
            animate={{ y: [0, -70, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[240px]"
          >
            <Image
              src="/hexa_qbnay8.png"
              alt="hexagon"
              width={120}
              height={120}
            />
          </motion.div>

          {/* NAIL */}
          <motion.div
            animate={{ y: [0, -70, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-[0px] left-[200px]"
          >
            <Image src="/nail_aog1yx.png" alt="nail" width={280} height={280} />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}

export default HeaderSlider;
