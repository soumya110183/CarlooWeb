"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SolutionSubmenu({ ref, dropdownOpen, close }) {
  const pathname = usePathname();

  const links = [
    { title: "AI Compliance", href: "/solutions/ai-compliance" },
    {
      title: "Blockchain & DeFi Monitoring",
      href: "/solutions/blockchain-monitoring",
    },
    { title: "Smart Contract Audits", href: "/solutions/smart-contract-audit" },
    {
      title: "Ethical Certification (Carlo Badge)",
      href: "/solutions/ethical-certification",
    },
  ];

  return (
    <div
      ref={ref}
      className={`w-full max-w-[20%] px-5 py-5 absolute left-1/2 transform -translate-x-1/2 top-20 bg-black/50 text-white backdrop-blur-lg rounded-2xl
      transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)]
      ${
        dropdownOpen
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
      }`}
    >
      <ul className="font-medium text-[14px] space-y-1.5">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href}
              onClick={() => close(false)}
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
}
