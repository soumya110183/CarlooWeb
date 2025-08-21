"use client";

import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useTheme } from "../_subcomponents/ThemeContext";
import Link from "next/link";
import SocialMediaIcon from "../_subcomponents/SocialmediaIcon";
import CompactSubscriptionForm from "../_subcomponents/footerSubScription";

export default function Footer() {
  const { theme } = useTheme();

  const navLinks = [
    { href: "/Why-carlo", label: "Why Carlo" },
    { href: "/pricing", label: "Pricing" },
    { href: "/Contact", label: "Contact" },
    { href: "/global-policy-frameworks", label: "Compliance Frameworks" },
    { href: "/blog", label: "Blog" },
    { href: "/Why-carlo", label: "Research" }, 
  ];
  const navPolicy = [
    { href: "/Privacy Policy", label: "Privacy Policy" },
    { href: "/Terms of Use", label: "Terms of Use" },
    { href: "/Cookie Policy", label: "Cookie Policy" },
    { href: "/Ethical AI Policy", label: "Ethical AI Policy" },
    
  ];

  return (
    <footer
      className={`py-16 px-5 ${
        theme === "light" ? "text-black" : "text-white"
      } `}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row flex-wrap justify-between gap-12 ">
        <div className="w-full lg:max-w-[300px] space-y-4 font-medium">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Awrora"
              className="w-[40px]"
              width={40}
              height={40}
            />
            <h2 className="text-xl font-bold">Carlo PEaas</h2>
          </div>
          <p
            className={`${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            Carlo PEaaS by Algorethics helps AI developers and enterprises
            achieve ethical compliance with global standards in real-time. Align
            your AI projects with trust, transparency, and global regulations.
          </p>
          <p>Copyright ©2025 Algorethics.ai</p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-12 lg:gap-20">
          <div className="max-w-[185px]">
            <h4 className="font-bold mb-3">Legal</h4>
              <ul
              className={`space-y-2 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              {navPolicy.map((link, idx) => (
                <li key={idx} className="cursor-pointer">
                  <Link
                    href={link.href}
                    className="hover:underline "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul
              className={`space-y-2 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              {navLinks.map((link, idx) => (
                <li key={idx} className="cursor-pointer">
                  <Link
                    href={link.href}
                    className="hover:underline "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full sm:max-w-[300px] space-y-6">
          <SocialMediaIcon />

          <CompactSubscriptionForm />
        </div>
      </div>
    </footer>
  );
}
