"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function KeyFeatures({ features }) {
  const value = features.flex ? 200 : -200;

  return (
    <div
      className={`w-full max-w-[1000px] flex max-md:flex-col ${
        features.flex ? "flex-row-reverse" : ""
      } items-center mx-auto justify-between md:gap-10 gap-5 text-foreground`}
    >
      <div className="mt-5">
        <motion.div
          className="mt-5"
          initial={{ opacity: 0, x: value }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={features.img}
            alt={features.heading || "feature image"}
            width={400}
            height={300}
            className="w-[400px] rounded-2xl mt-5 object-cover"
          />
        </motion.div>
      </div>
      <div>
        <div className="flex gap-2 items-start max-sm:text-center  max-sm:items-center max-sm:flex-col-reverse">
          <div
            className="rounded-full mt-4"
            style={{
              width: "18px",
              height: "18px",
              background:
                "linear-gradient(183deg, rgba(182, 154, 239, 1) 0%, rgba(133, 81, 248, 1) 100%)",
            }}
          ></div>
          <h3
            className="md:text-[32px] text-2xl sm:text-3xl w-full max-w-[400px] font-semibold bg-clip-text text-transparent"
            style={{
              background:
                "linear-gradient(183deg, rgba(182, 154, 239, 1) 0%, rgba(133, 81, 248, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {features.heading}
          </h3>
        </div>
        <p className="md:text-[22px] text-base sm:text-[18px] w-full max-w-[488px] font-medium mt-5">
          {features.paragraph}
        </p>
      </div>
    </div>
  );
}
