'use client';
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const complianceDropdown = [
  {
    title: "Global Policy Frameworks: Navigating International AI Standards",
    href: "/global-policy-frameworks",
    img: "/euaiac.png",
  },
  {
    title: "Ethical AI Guidelines: Building Responsible AI Systems",
    href: "/ethical-ai-guidelines",
    img: "/california.png",
  },
  {
    title: "Data Protection Laws: Ensuring Data Privacy Across Borders",
    href: "/data-protection-laws",
    img: "/gdpr.jpg",
  },
  {
    title:
      "Carlo PEaaS: Enforcing Rome Call for AI Ethics in Every AI Project",
    href: "/rome-call-ai-ethics",
    img: "/romecallfor aiethics.png",
  },
  {
    title:
      "Carlo PEaaS: Enforcing Sharia-Compliant AI Ethics in the Modern World",
    href: "/sharia-compliant-ai-ethics",
    img: "/sharia.png",
  },
];

const resourcesDropdown = [
  { title: "Pricing", href: "/pricing" },
  { title: "Blog", href: "/blog" },
  { title: "Case Studies", href: "/case-studies" },
];

export default function NavigationMenu({ isOpen, setIsOpen, navItems }) {
  const [showComplianceSubmenu, setShowComplianceSubmenu] = useState(false);
  const [showResourcesSubmenu, setShowResourcesSubmenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setShowComplianceSubmenu(false);
        setShowResourcesSubmenu(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      ref={menuRef}
      className={`fixed top-0 right-0 h-full w-[300px] bg-gradient-to-b from-black/80 to-black/50 
        text-white transition-transform duration-500 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="p-5">
        <div className="flex items-center justify-between mb-5">
          <Link
            href="/register"
            className="bg-white text-black font-semibold px-4 py-1 rounded-full text-sm"
          >
            SIGN IN
          </Link>
        </div>

        <ul className="space-y-4 mb-6">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.name === "Compliance Frameworks" ? (
                <>
                  <button
                    className="text-left w-full"
                    onClick={() => {
                      setShowComplianceSubmenu((prev) => !prev);
                      setShowResourcesSubmenu(false);
                    }}
                  >
                    {item.name}
                  </button>

                  {showComplianceSubmenu && (
                    <ul className="mt-2 space-y-3 pl-3 border-l border-white/20">
                      {complianceDropdown.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="flex gap-2 items-start hover:bg-white/10 p-2 rounded-md"
                          >
                            <div className="w-8 h-8 relative flex-shrink-0">
                              <Image
                                src={subItem.img}
                                alt={subItem.title}
                                fill
                                className="object-cover rounded"
                              />
                            </div>
                            <span className="text-sm">{subItem.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : item.name === "Resources" ? (
                <>
                  <button
                    className="text-left w-full"
                    onClick={() => {
                      setShowResourcesSubmenu((prev) => !prev);
                      setShowComplianceSubmenu(false);
                    }}
                  >
                    {item.name}
                  </button>

                  {showResourcesSubmenu && (
                    <ul className="mt-2 space-y-2 pl-3 border-l border-white/20">
                      {resourcesDropdown.map((res, i) => (
                        <li key={i}>
                          <Link
                            href={res.href}
                            className="block text-sm hover:bg-white/10 p-2 rounded-md"
                          >
                            {res.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link href={item.href}>{item.name}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
