"use client";

import { useEffect, useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function IntroVideoButton({ theme }) {
  const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setShowVideo(false);
      }
    };

    if (showVideo) {
      window.addEventListener("keydown", handleEsc);
    } else {
      window.removeEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [showVideo]);
  

  return (
    <div className="flex flex-col items-center max-sm:w-full">
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
          
          className="fixed inset-0  bg-opacity-70 flex items-center justify-center z-200"
        >
          
         
          <div
            className="relative w-[90%] md:w-[70%] aspect-video  rounded-lg "
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute right-0" onClick={()=>setShowVideo(false)}>
                      <IoCloseCircleSharp color="white" size={39} />
                  </button>
            <iframe
              className="w-[100%] mx-auto h-full"
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
