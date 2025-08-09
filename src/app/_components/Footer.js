"use client"

import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
 
} from "react-icons/fa";
import { useTheme } from "../_subcomponents/ThemeContext";
import Link from "next/link";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`py-16 px-5 ${theme === "light" ? "text-black" : "text-white"}`}>
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row flex-wrap justify-between gap-12">
        
  
        <div className="w-full lg:max-w-[300px] space-y-4 font-medium">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Awrora" className="w-[40px]" width={40} height={40} />
            <h2 className="text-xl font-bold">Carlo PEaas</h2>
          </div>
          <p className={`${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
            Carlo PEaaS by Algorethics helps AI developers and enterprises
            achieve ethical compliance with global standards in real-time. Align
            your AI projects with trust, transparency, and global regulations.
          </p>
          <p>Copyright ©2025 Algorethics.ai</p>
        </div>


        <div className="flex flex-col sm:flex-row flex-wrap gap-12 lg:gap-20">
          <div className="max-w-[185px]">
            <h4 className="font-bold mb-3">Newsletter</h4>
            <p className="text-sm">Subscribe our newsletter to get our latest update & news</p>
          </div>

          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className={`space-y-2 ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
              <li className="cursor-pointer"><Link href={"/Why-carlo"} >Why Carlo</Link></li>
              <li className="cursor-pointer"><Link href={"/pricing"} >Pricing</Link></li>
              <li className="cursor-pointer"><Link href={"/Contact"} >Contact</Link></li>
            </ul>
          </div>
        </div>

       
        <div className="w-full sm:max-w-[300px] space-y-6">
          <div className="flex gap-4">
            {[FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
              <Icon
                key={idx}
                className="text-white bg-black rounded-full p-2 w-8 h-8 cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>

          <div className="flex items-center bg-black border border-gray-600 rounded-[10px] overflow-hidden max-w-[300px] pr-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="bg-black text-white text-sm px-4 py-3 outline-none w-full placeholder:font-medium placeholder:text-white"
            />
            <Image src="/material-symbols_send.svg" alt="send button" width={24} height={24} />
          </div>
        </div>
      </div>
    </footer>
  );
}
