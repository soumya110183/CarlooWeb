"use client";

import { motion } from "framer-motion";

export default function StepsList({ steps, lineColor = "from-[#5d3fd3] via-purple-400 to-[#5d3fd3]", stepDuration = 0.35 }) {
  const totalDuration = steps.length * stepDuration;

  return (
    <div className="relative flex-1">
      
      <motion.div
        className={`absolute left-[14px] top-0 w-[2px] bg-gradient-to-b ${lineColor}`}
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: totalDuration, ease: "linear" }}
        viewport={{ once: true }}
      />

      <ul className="space-y-8 relative z-10">
        {steps.map((step, idx) => {
          const delay = idx * stepDuration;
          return (
            <li key={idx} className="flex items-start gap-4">
           
              <motion.div
                className="w-8 h-8 flex items-center justify-center bg-[#5d3fd3] text-white rounded-full flex-shrink-0 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  delay,
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                viewport={{ once: true, amount: 0.1 }}
              >
                {step.icon}
              </motion.div>

              {/* Text animation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: delay + 0.15,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <p className="font-semibold text-lg max-sm:text-base">{step.title}</p>
                <p className="text-foreground/80 max-sm:text-sm">{step.text}</p>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
