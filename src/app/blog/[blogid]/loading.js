"use client"


import Spinner from "@/app/_subcomponents/Spinner";
import { useTheme } from "@/app/_subcomponents/ThemeContext";


function Loading() {

  const {theme}=useTheme()
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${theme === "light" ?"bg-white ":"bg-[#0a0a2f] "} z-[9999]`}>
      <Spinner />
    </div>
  );
}

export default Loading;
