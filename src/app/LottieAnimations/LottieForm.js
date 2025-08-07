"use client";

import dynamic from "next/dynamic";

// Dynamically import lottie-react with no SSR
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

 // adjust path if needed

export default function LottieShield({ animationData, size = "120px" }) {
  return (
    <div style={{ width: size, height: size }}>
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}
