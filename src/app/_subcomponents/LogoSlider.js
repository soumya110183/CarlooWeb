"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/logosliderlogo/aicpa.png",
  "/logosliderlogo/hipa.png",
  "/logosliderlogo/nist.png",
  "/logosliderlogo/iso.png",
  "/logosliderlogo/certification.png",
  "/logosliderlogo/tick.png",
  "/logosliderlogo/iso-2.png",
  "/logosliderlogo/cis.png",
  "/logosliderlogo/csa.png",
  "/logosliderlogo/gpai.png",
  "/logosliderlogo/redbirdlogo.png",
  "/logosliderlogo/ai-ethicslogo.png",
  "/logosliderlogo/japangov.png",
  "/logosliderlogo/redstar.png",
  "/logosliderlogo/data.png",
  "/logosliderlogo/ail.png",
  "/logosliderlogo/council.png",
  "/logosliderlogo/g7.png",
  "/logosliderlogo/star.png",
  "/logosliderlogo/fedramp.png",
  "/logosliderlogo/pci.png",
  "/logosliderlogo/gdpr.png",
];

export default function LogoSlider() {
  return (
    <div className="overflow-hidden relative w-full pt-20">
      <motion.div
        className="flex gap-16 will-change-transform"
        animate={{
          x: [0, -100 * (logos.length + 4)],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 30,
        }}
      >
        {[...logos, ...logos, ...logos].map((logo, idx) => (
          <div key={idx} className="flex-shrink-0">
            <Image
              src={logo}
              alt={`logo-${idx % logos.length}`}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
