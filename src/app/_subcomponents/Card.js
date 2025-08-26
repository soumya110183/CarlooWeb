"use client";

import { useRef } from "react";
import CardComp from "./CardComp";

export default function Card() {
  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    const el = scrollRef.current;
    el.isDown = true;
    el.startX = e.pageX - el.offsetLeft;
    el.scrollLeftStart = el.scrollLeft;
    el.classList.add("cursor-grabbing");
  };

  const handleMouseUpOrLeave = () => {
    const el = scrollRef.current;
    el.isDown = false;
    el.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    const el = scrollRef.current;
    if (!el.isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - el.startX) * 1.5;
    el.scrollLeft = el.scrollLeftStart - walk;
  };

  return (
    <div
      ref={scrollRef}
      className="flex items-center gap-6 overflow-x-auto  py-2 lg:px-5  mt-10 cursor-grab select-none hide-scrollbar scroll-smooth"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseUpOrLeave}
      onMouseUp={handleMouseUpOrLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="flex-shrink-0">
        <CardComp
          heading="How Bias Creeps into AI Models - And How Carlo Stops It"
          paragraph="  Artificial intelligence has the power to transform decision-making
      across industries, from loan approvals to job candidate screening,"
          img="/unsplash_FYOwBvRb2Mk.png"
        />
      </div>
      <div className="flex-shrink-0">
        <CardComp
          heading="Top 7 Misconceptions About Ethical AI and Compliance"
          paragraph="  As artificial intelligence (AI) becomes an integral part of industries from healthcare to finance, conversations around,"
          img="/unsplash_bV_P23FXxhI.png"
        />
      </div>
      <div className="flex-shrink-0">
        <CardComp
          heading="How Bias Creeps into AI Models - And How Carlo Stops It"
          paragraph="Artificial intelligence has the power to transform decision-making across industries. From loan approvals to job candidate screening,"
          img="/unsplash_agUC-v_D1iI.png"
        />
      </div>
      <div className="flex-shrink-0">
        <CardComp
          heading="Why Every AI System Needs a Human-in-the-Loop for Ethical Safety "
          paragraph="As artificial intelligence becomes increasingly integrated into business operations,"
          img="/unsplash_FHgWFzDDAOs.png"
        />
      </div>
    </div>
  );
}
