"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Percentage() {
  const data = [
    {
      value: 80,
      caption: "Compliance Automation Achieved",
      gradient: [
        { offset: "0%", color: "#8b5cf6" },
        { offset: "100%", color: "#3b82f6" },
      ],
      shadowColor: "#8b5cf6",
    },
    {
      value: 70,
      caption: "Customer Satisfaction Increase",
      gradient: [
        { offset: "0%", color: "#10b981" },
        { offset: "100%", color: "#22d3ee" },
      ],
      shadowColor: "#10b981",
    },
    {
      value: 70,
      caption: "Coverage of Global Regulatory Experts",
      gradient: [
        { offset: "0%", color: "#f87171" },
        { offset: "100%", color: "#ef4444" },
      ],
      shadowColor: "#f87171",
    },
  ];

  // Initialize counts for all items
  const [counts, setCounts] = useState(data.map(() => 0));
  const [animated, setAnimated] = useState(data.map(() => false));

  const arcLength = 126; // semi-circle path length

  const handleInView = (index, targetValue) => {
    if (animated[index]) return; // Prevent re-animation

    setAnimated((prev) => {
      const newAnimated = [...prev];
      newAnimated[index] = true;
      return newAnimated;
    });

    let start = 0;
    const step = targetValue / 60;
    const counter = setInterval(() => {
      start += step;
      if (start >= targetValue) {
        start = targetValue;
        clearInterval(counter);
      }
      setCounts((prev) => {
        const newCounts = [...prev];
        newCounts[index] = Math.round(start);
        return newCounts;
      });
    }, 30);
  };

  return (
    <div className="w-full flex flex-wrap justify-center gap-12 mt-8">
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center max-w-[220px]"
          viewport={{ once: true, amount: 0.6 }}
          onViewportEnter={() => handleInView(index, item.value)}
        >
          {/* Semi-circle Progress */}
          <div className="relative w-[160px] h-[80px]">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Gradient Definition */}
              <defs>
                <linearGradient
                  id={`gradient-${index}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  {item.gradient.map((g, i) => (
                    <stop key={i} offset={g.offset} stopColor={g.color} />
                  ))}
                </linearGradient>
              </defs>

              {/* Background Arc (Gray) */}
              <path
                d="M10,50 A40,40 0 0,1 90,50"
                fill="transparent"
                stroke="#374151"
                strokeWidth="10"
                strokeLinecap="round"
              />

              {/* Animated Progress Arc (Colored) */}
              <motion.path
                d="M10,50 A40,40 0 0,1 90,50"
                fill="transparent"
                stroke={`url(#gradient-${index})`}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={arcLength}
                strokeDashoffset={arcLength}
                initial={{ strokeDashoffset: arcLength }}
                animate={{
                  strokeDashoffset: animated[index]
                    ? arcLength - (arcLength * item.value) / 100
                    : arcLength,
                }}
                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
                style={{
                  filter: `drop-shadow(0 0 6px ${item.shadowColor}60)`,
                }}
              />
            </svg>

            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-[-10] flex items-center justify-center">
              <h3 className="text-[18px] sm:text-[24px] font-bold text-foreground">
                {counts[index]}%
              </h3>
            </div>
          </div>

          <p className="font-bold sm:text-[16px] text-[14px] leading-snug mt-3 text-foreground">
            {item.caption}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
