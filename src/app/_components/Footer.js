"use client"

import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGlobe,
  FaLeaf,
  FaCommentDots,
} from "react-icons/fa";
import { useTheme } from "../_subcomponents/ThemeContext";

export default function Footer() {

  const {theme}=useTheme()
  return (
    <footer className={`py-20 px-5 ${theme === "light" ? "text-black" : "text-white"} `}>
      <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between ">
        <div className="max-w-[300px] space-y-4 font-medium">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Awrora" className="w-[40px]" width={40} height={40} />
            <h2 className="text-xl font-bold">Carlo PEaas</h2>
          </div>
          <p className={`${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
            Carlo PEaaS by Algorethics helps AI developers and enterprises
            achieve ethical compliance with global standards in real-time. Align
            your AI projects with trust, transparency, and global regulations
          </p>
          <p>Copyright ©2025 Algorethics.ai</p>
        </div>

        <div className="flex flex-wrap gap-14">
     

          <div className="w-full max-w-[185px]">
            <h4 className="font-bold mb-3">Newsletter</h4>
            <p>Subscribe our newsletter to get our latest update & news</p>
          </div>

          <div className={``}>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className={`space-y-2${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
              <a className="cursor-pointer">
                <li>Why Carlo</li>
              </a>
              <a className="cursor-pointer">
                <li>Pricing</li>
              </a>
              <a className="cursor-pointer">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map(
              (Icon, idx) => (
                <Icon
                  key={idx}
                  className="text-white bg-black rounded-full p-2 w-8 h-8 cursor-pointer hover:scale-105 transition"
                />
              )
            )}
          </div>

          <div className="mt-4 flex items-center bg-black border border-gray-600 rounded-[10px]   overflow-hidden max-w-[230px] pr-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-black text-white text-sm px-4 py-3 outline-none w-full placeholder:font-medium placeholder:text-white"
            />

            <Image src="material-symbols_send.svg" alt="sendbutton" width={24} height={24} />
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-6 left-6">
        <button className="flex items-center gap-2 px-5 py-2 text-[#2F4F20] bg-[#DBFFCB] rounded-full shadow-lg font-semibold">
          <FaLeaf />
          BUY NOW
        </button>
      </div> */}

      {/* <div className="absolute bottom-6 right-6">
        <div className="relative">
          <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="bg-[#2D006C] p-4 rounded-full shadow-md cursor-pointer hover:scale-110 transition">
            <FaCommentDots className="text-[#00F0FF]" size={24} />
          </div>
        </div>
      </div> */}
    </footer>
  );
}
