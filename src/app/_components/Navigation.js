"use client";

import { useEffect, useState, useRef } from "react";
import DropDownMenu from "../_subcomponents/Dropdownmenu";
import DropDownMenuResources from "../_subcomponents/DropDownResources";
import SettingsMenu from "../_subcomponents/SettingsMenu";
import Link from "next/link";

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Why Carlo", href: "/Why-carlo" },
    { name: "Compliance Frameworks", href: "/Compliance Frameworks" },
    { name: "Key Features", href: "/Key Features" },
    { name: "Resources", href: "/Resources" },
    { name: "Contact", href: "/Contact" },
    { name: "About Us", href: "/About Us" },
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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-[150] ${
        dropdownOpen || resourcesOpen
          ? "bg-black h-[86px]"
          : scrolled
          ? "bg-[#080223]/70 backdrop-blur-xl h-[65px]"
          : "bg-transparent h-[86px]"
      }`}
    >
      <nav
        className="h-full w-full max-w-[1280px] flex items-center justify-between mx-auto text-white font-mont relative"
        ref={dropdownRef}
      >
        <div className="flex items-center gap-10">
          <Link href={"/"}>
          <div className="flex items-center gap-1">
            <img src="/logo.png" alt="logo" className="w-[80px] h-[80px]" />
            <span className="font-montserrat text-[18px] font-bold">
              Carlo peass
            </span>
            
          </div>
          </Link>

          <ul className="flex items-center gap-[20px] text-[16px] font-semibold">
            {navItems.map((item, i) => (
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
                <Link href={item.href}>
                  <span className="hover:text-[#C7BFE9] transition-all duration-300 flex items-center gap-2">
                    {item.name}
                    {(item.name === "Compliance Frameworks" ||
                      item.name === "Resources") && (
                      <img
                        src="/Vector.png"
                        alt="dropdown icon"
                        className="w-[15px] transition-transform duration-300"
                      />
                    )}
                  </span>

                  <div className="absolute left-1/2 -bottom-[15px] flex items-center gap-1 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
                    <div className="w-10 h-2 rounded-full bg-gradient-to-r from-pink-300 via-cyan-300 to-pink-200"></div>
                  </div>

                  {resourcesOpen && item.name === "Resources" && (
                    <DropDownMenuResources dropdownOpen={resourcesOpen} />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button className="bg-[rgb(209,196,233)] text-[#311B92] w-[115px] h-[40px] text-[14px] rounded-[36px] font-bold">
          <a href="https://app.policyenforcement.com/login">SIGN IN</a>
        </button>
        <button onClick={() => setSettingsOpen(!settingsOpen)}>
          <img
            src="/material-symbols_settings.svg"
            alt="settings"
            className="w-[29px]"
          />
        </button>
        {settingsOpen && <SettingsMenu dropdownOpen={settingsOpen} />}
      </nav>

      {dropdownOpen && <DropDownMenu dropdownOpen={dropdownOpen} />}
    </div>
  );
}

export default Navigation;
