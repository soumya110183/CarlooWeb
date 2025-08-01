// components/DropDownMenu.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

const DropDownMenu = forwardRef(({ dropdownOpen,closeDropdown }, ref) => {
  const dropdownItems = [
    {
      title: "Global Policy Frameworks: Navigating International AI Standards",
      href: "/global-policy-frameworks",
    },
    {
      title: "Ethical AI Guidelines: Building Responsible AI Systems",
      href: "/ethical-ai-guidelines",
    },
    {
      title: "Data Protection Laws: Ensuring Data Privacy Across Borders",
      href: "/data-protection-laws",
    },
    {
      title:
        "Carlo PEaaS: Enforcing Rome Call for AI Ethics in Every AI Project",
      href: "/rome-call-ai-ethics",
    },
    {
      title:
        "Carlo PEaaS: Enforcing Sharia-Compliant AI Ethics in the Modern World",
      href: "/sharia-compliant-ai-ethics",
    },
  ];

  return (
    <div
      ref={ref}
      className={`w-full max-w-[700px] h-[343px] absolute left-1/2 transform -translate-x-1/2 bg-black/50 text-white backdrop-blur-lg py-6 px-8 rounded-b-2xl
      transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
      ${
        dropdownOpen
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
      }`}
    >
      <div className="w-full flex justify-center items-center flex-wrap gap-3">
        {dropdownItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="flex flex-col items-center gap-1 max-w-[204px] hover:opacity-90 transition"
            onClick={closeDropdown}
          >
            <Image
              src="/l60_arrczr 1.png"
              alt="icon"
              className="w-[114px]"
              width={114}
              height={114}
            />
            <p className="font-medium text-[12px] text-center leading-tight">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
});

DropDownMenu.displayName = "DropDownMenu";
export default DropDownMenu;
