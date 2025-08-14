"use client";

import { motion } from "framer-motion";

export default function ContainerSolution({ array }) {
  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10  mt-10">
      {array.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-md bg-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.2 },
          }}
        >
          {item.icon}
          <h3 className="mt-4 text-xl font-semibold text-black">{item.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground text-black">
            {item.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
