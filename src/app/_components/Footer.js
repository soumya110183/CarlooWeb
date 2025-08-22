"use client";

import Image from "next/image";

import { useTheme } from "../_subcomponents/ThemeContext";
import Link from "next/link";
import SocialMediaIcon from "../_subcomponents/SocialmediaIcon";
import CompactSubscriptionForm from "../_subcomponents/footerSubScription";
import CountryFlagSvg from "../_subcomponents/CountryFlag";

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
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-use", label: "Terms of Use" },
    { href: "/cookie-policy", label: "Cookie Policy" },
    { href: "/ethical-ai-policy", label: "Ethical AI Policy" },
  ];

  return (
    <footer
      className={`py-16 px-5 sm:px-20 ${
        theme === "light"
          ? "text-black bg-[#f0efef]"
          : "text-white bg-[#1f1063]"
      }`}
    >
      <div className=" mx-auto max-w-[90%] flex flex-col lg:flex-row flex-wrap justify-between gap-5">
        <div className="w-full lg:max-w-[300px] space-y-4 font-medium">
          <div className="flex items-center  gap-1">
            <Image
              src={`${theme === "light" ? "/logo black-carlo.png":"/carlo-logo-.png"}`}
              alt="Awrora"
             
              width={40}
              height={40}
            />
            <h2 className="text-xl font-bold">Carlo PEaaS</h2>
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
           <h4 className="font-bold mb-3">Address</h4>
          <ul
            className={`space-y-2 ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
              <li>📧 steve@algorethics.ai</li>
            <li>📍 333 Sunset Dr, Apt 204, Fort Lauderdale, FL 33301 USA</li>
          </ul>
          <p>Copyright ©2025 Algorethics.ai</p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-12 lg:gap-20">
          <div className="">
            <h4 className="font-bold mb-3">Legal</h4>
            <ul
              className={`space-y-2 ${
                theme === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              {navPolicy.map((link, idx) => (
                <li key={idx} className="cursor-pointer">
                  <Link href={link.href} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
             <h4 className="font-bold mb-3 mt-13.5">Contact Us</h4>
          <ul
            className={`space-y-2 ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            <li className="flex items-center gap-2"><span><CountryFlagSvg country={"usa"} /></span>Algorethics USA: +1 929-400-3096</li>
             <li className="flex items-center gap-2"><span><CountryFlagSvg country={"india"} /></span>Algorethics India: +91 91 4897-4612</li>
             <li className="flex items-center gap-2"><span><CountryFlagSvg country={"uae"} /></span>Algorethics UAE: +971 50 268 2270</li>
             <li className="flex items-center gap-2"><span><CountryFlagSvg country={"georgia"} /></span>Algorethics Georgia: +995 598 50 25 55</li>
          
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
                  <Link href={link.href} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full sm:max-w-[300px] space-y-6">
          <h4 className="font-bold mb-3">News Letter</h4>
          <p className={`${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}>
            Subscribe to our newsletter and stay updated with the latest news,
            insights, and exclusive offers delivered straight to your inbox.
          </p>

          <CompactSubscriptionForm />
          <SocialMediaIcon />
        </div>

        {/* <div className="w-full sm:max-w-[300px] space-y-4">
          <h4 className="font-bold mb-3">Contact Us</h4>
          <ul
            className={`space-y-2 ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
            <li className="flex items-center gap-2"><span><CountryFlagSvg country={"usa"} /></span>Algorethics USA: +1 929-400-3096</li>
             <li className="flex items-center gap-2"><span><CountryFlagSvg country={"india"} /></span>Algorethics India: +91 91 4897-4612</li>
             <li className="flex items-center gap-2"><span><CountryFlagSvg country={"uae"} /></span>Algorethics UAE: +971 50 268 2270</li>
             <li className="flex items-center gap-2"><span><CountryFlagSvg country={"georgia"} /></span>Algorethics Georgia: +995 598 50 25 55</li>
          
          </ul>
        </div>
           <div className="w-full sm:max-w-[300px] space-y-4">
          <h4 className="font-bold mb-3">Address</h4>
          <ul
            className={`space-y-2 ${
              theme === "light" ? "text-gray-700" : "text-gray-300"
            }`}
          >
              <li>📧 steve@algorethics.ai</li>
            <li>📍 333 Sunset Dr, Apt 204, Fort Lauderdale, FL 33301 USA</li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
}
