"use client";

import Link from "next/link";
import { forwardRef } from "react";
import { usePathname } from "next/navigation";

const DropDownMenuResources = forwardRef(({ dropdownOpen }, ref) => {
  const pathname = usePathname();

  const links = [
    { title: "Pricing", href: "/pricing" },
    { title: "Blog", href: "/blog" },
    { title: "Case Studies", href: "/case-studies" },
  ];

  return (
    <div
      ref={ref}
      className={`w-full max-w-[200px] h-[140px] absolute left-1/2 transform -translate-x-1/2 top-14 bg-black/50 text-white backdrop-blur-lg rounded-2xl
      transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
      ${
        dropdownOpen
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
      }`}
    >
      <ul className="font-medium text-[14px] space-y-1.5 pt-6 pl-2">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href}
              className={`block px-2 py-1 transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[#00d4fa]"
                  : "hover:text-[#00d4fa]"
              }`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

DropDownMenuResources.displayName = "DropDownMenuResources";
export default DropDownMenuResources;
