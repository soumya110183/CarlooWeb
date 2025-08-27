"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import HeadingReuse from "../_subcomponents/HeadingReuse";
import { featuresGlobalAI } from "../_data/data";
import FeatureAccordions from "../_subcomponents/Accordion";

export default function page() {
  return (
    <div className="mt-50 px-5 sm:px-10">
      <section className="w-full max-w-[1200px] flex max-lg:flex-col items-center mx-auto justify-between text-white lg:pb-32 pb-15">
        <div className="w-full max-w-[570px]">
          <HeadingReuse
            heading={"Ethical AI Guidelines: Building Responsible AI Systems"}
          />
          <div className="mt-7">
            <FeatureAccordions features={featuresGlobalAI} />
          </div>
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20, // 20s per rotation
            ease: "linear",
          }}
          className="w-[700px] h-[500px]"
        >
          <Image
            src="/ethical-aiguiles.png"
            alt="robot-validator"
            width={700}
            height={500}
          />
        </motion.div>
      </section>
    </div>
  );
}
