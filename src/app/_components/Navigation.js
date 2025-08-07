"use client";

import { useEffect, useState, useRef } from "react";
import DropDownMenu from "../_subcomponents/Dropdownmenu";
import DropDownMenuResources from "../_subcomponents/DropDownResources";
import SettingsMenu from "../_subcomponents/SettingsMenu";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

import { useTheme } from "../_subcomponents/ThemeContext";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const pathname = usePathname();
  
  const {theme}=useTheme()

  const navRef = useRef(null);
  const dropdownMenuRef = useRef(null);
  const resourcesMenuRef = useRef(null);
  const settingsMenuRef = useRef(null);

  const navItems = [
    { name: "Why Carlo", href: "/Why-carlo" },
    { name: "Compliance Frameworks", href: "/Compliance-Frameworks" },
    { name: "Key Features", href: "/Key-Features" },
    { name: "Resources", href: "/Resources" },
    { name: "Contact", href: "/Contact" },
    { name: "About Us", href: "/About-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInsideNav = navRef.current?.contains(event.target);
      const clickedInsideDropdown = dropdownMenuRef.current?.contains(
        event.target
      );
      const clickedInsideResources = resourcesMenuRef.current?.contains(
        event.target
      );
      const clickedInsideSettings = settingsMenuRef.current?.contains(
        event.target
      );

      if (
        !clickedInsideNav &&
        !clickedInsideDropdown &&
        !clickedInsideResources &&
        !clickedInsideSettings
      ) {
        setDropdownOpen(false);
        setResourcesOpen(false);
        setSettingsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-[150] ${
        dropdownOpen || resourcesOpen
          ? `${theme === "light" ? "bg-white shadow-2xl" : "bg-black"} h-[86px]`
          : scrolled
          ? ` ${theme === "light" ? "bg-white/40" : "bg-[#080223]/70"} backdrop-blur-xl h-[65px]`
          : "bg-transparent h-[86px]"
      }`}
    >
      <nav
        className={`h-full w-full max-w-[1280px] flex items-center justify-between mx-auto  font-mont relative ${theme === "light" ? "text-black": "text-white"} `}
        ref={navRef}
      >
        <div className="flex items-center gap-10">
          <Link href="/">
            <div className="flex items-center gap-3">
              <Image
                src={`${theme === "light" ? "/logo-robot-black.png" : "/carlo-logo.png"}`}
                alt="logo"
                width={100}
                height={100}
                className="w-auto h-auto"
                priority
              />
          
            </div>
          </Link>

          <ul className="flex items-center gap-[20px] text-[16px] font-semibold">
            {navItems.map((item, i) => {
              const isActive = item.href === pathname;
              return (
                <li
                  key={i}
                  className="relative group cursor-pointer"
                  onClick={() => {
                    if (item.name === "Compliance Frameworks") {
                      setDropdownOpen(!dropdownOpen);
                      setResourcesOpen(false);
                      
                    } else if (item.name === "Resources") {
                      setResourcesOpen(!resourcesOpen);
                      setDropdownOpen(false);
                    } else {
                      setDropdownOpen(false);
                      setResourcesOpen(false);
                    }
                  }}
                >
                  <Link
                    href={`${
                      item.name === "Compliance Frameworks" ||
                      item.name === "Resources"
                        ? "#"
                        : item.href
                    }`}

                      onClick={(e) => {
    if (item.name === "Compliance Frameworks" || item.name === "Resources") {
      e.preventDefault(); // ✅ Fixes jump to top
    }
  }}

                  >
                    <span
                      className={`hover:text-[#C7BFE9] ${
                        isActive && "text-[#7A5BFF]"
                      } transition-all duration-300 flex items-center gap-2`}
                    >
                      {item.name}
                      {(item.name === "Compliance Frameworks" ||
                        item.name === "Resources") && (
                        <IoIosArrowDown size={25} />
                      )}
                    </span>

                    <div className="absolute left-1/2 -bottom-[15px] flex items-center gap-1 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-400">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
                      <div className="w-10 h-2 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
                    </div>
                  </Link>

                  {resourcesOpen && item.name === "Resources" && (
                    <DropDownMenuResources
                      dropdownOpen={resourcesOpen}
                      ref={resourcesMenuRef}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <button className="bg-[rgb(209,196,233)] text-[#311B92] w-[115px] h-[40px] text-[14px] rounded-[36px] font-bold">
          <a href="https://app.policyenforcement.com/login">SIGN IN</a>
        </button>
        <button onClick={() => setSettingsOpen(!settingsOpen)} className={`${theme === "light" ? "text-black" : "text-white"}`}>
         <IoMdSettings size={29} />
        </button>
        {settingsOpen && (
          <SettingsMenu dropdownOpen={settingsOpen} ref={settingsMenuRef} theme={theme}/>
        )}
      </nav>

      {dropdownOpen && (
        <DropDownMenu
          dropdownOpen={dropdownOpen}
          ref={dropdownMenuRef}
          closeDropdown={() => setDropdownOpen(false)}
        />
      )}
    </div>
  );
}

export default Navigation;
