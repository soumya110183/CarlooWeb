"use client"

import { motion } from "framer-motion";
import Image from "next/image";

export default function MotionImage(){
    return(

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
    
    )
}