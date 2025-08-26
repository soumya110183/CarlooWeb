"use client";

import { useState } from "react";
import RakDaoForm from "./RakDaoForm";

export default function PopUpForm({ theme }) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Button */}
       <div className="w-full">
            <img src="/RAKDAOlogos-01.png" />
            <div className="mt-5">
              <button
                onClick={() => setShowVideo(true)}
                className={`text-white border-none max-sm:text-base items-center justify-center outline-none bg-[#651FFF] flex shrink-0 font-bold px-7 sm:py-5 py-4  rounded-[36px] nav-text 
      transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
              >
                Apply for RAK DAO Setup + Ethical Compliance
              </button>
            </div>
          </div>

      
      {showVideo && (
        <div
          onClick={() => setShowVideo(false)} 
          className="fixed inset-0   bg-opacity-70 flex items-center justify-center z-50"
        >
         
          <div
            className="relative w-[90%] md:w-[70%] bg-[#0F092A] mt-20   rounded-lg "
            onClick={(e) => e.stopPropagation()}
          >
            <RakDaoForm setShowVideo={setShowVideo} />
         
          </div>
        </div>
      )}
    </div>
  );
}
