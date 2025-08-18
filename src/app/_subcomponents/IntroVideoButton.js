"use client";

import { useState } from "react";

export default function IntroVideoButton({ theme }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Button */}
      <button
        onClick={() => setShowVideo(true)}
        className={`${
          theme === "light" ? "text-green-600" : "text-[#00E5FF]"
        } bg-transparent p-0 m-0 outline-none border ${
          theme === "light" ? "border-green-600" : "border-[#00E5FF]"
        } px-5 max-sm:w-full sm:py-5 py-4 text-[18px] max-sm:text-base rounded-[36px] nav-text flex shrink-0 items-center justify-center`}
      >
        WATCH INTRO VIDEO
      </button>

      {/* Modal Overlay */}
      {showVideo && (
        <div
          onClick={() => setShowVideo(false)} 
          className="fixed inset-0  bg-opacity-70 flex items-center justify-center z-50"
        >
         
          <div
            className="relative w-[90%] md:w-[70%] aspect-video  rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/74UzC8rZXzc?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
