"use client";

import { useTheme } from "@/app/_subcomponents/ThemeContext";
import { motion } from "framer-motion";

export default function ContainerProvier({ title, paragraph, icon }) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`${
        theme === "light" ? "text-white bg-[#0F092A]" : "text-black bg-white"
      }  flex rounded-2xl sm:p-10 p-5 min-h-[250px]`}
    >
      <div>
        <div className="flex items-center gap-2">
          <div className="bg-[#C3C3C3] rounded-full p-2 w-10 h-10 max-sm:w-8 max-sm:h-8 flex items-center justify-center shrink-0">
            {icon}
          </div>
          <h3 className="font-bold text-[20px] max-sm:text-base">{title}</h3>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          {paragraph.map((para, index) => (
            <p className="max-w-[450px] font-normal max-sm:text-[14px]" key={index}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
