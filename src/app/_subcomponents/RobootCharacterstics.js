import Image from "next/image";
import { motion } from "framer-motion";

function RobootCharacterstics({ img, title, paragraph, imp, flex }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: flex ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full max-w-[1000px] mx-auto flex ${
        flex ? "flex-row-reverse" : "flex"
      } justify-between text-white items-center my-12`}
    >
      <div>
        <Image
          src={img}
          alt="robot-validator"
          width={314}
          height={479}
          className="w-[314px] h-auto"
        />
      </div>
      <div className={`max-w-[601px] text-foreground`}>
        <h3 className={`text-[40px] font-bold w-full`}>{title}</h3>
        <p className="text-[22px] font-medium mt-3.5">{paragraph}</p>
        <div className="flex gap-3 items-center mt-8">
          <Image
            src="/material-icon-theme_robots.png"
            alt="icon-robo"
            width={37}
            height={37}
          />
          <p className="text-[18px] font-semibold">{imp}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default RobootCharacterstics;
