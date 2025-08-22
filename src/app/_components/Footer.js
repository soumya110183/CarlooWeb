'use client';

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
      className={`py-16 px-10 2xl:px-20 ${
        theme === "light"
          ? "text-black bg-[#f0efef]"
          : "text-white bg-[#1f1063]"
      }`}
    >
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo + About + Address */}
        <div className="space-y-4 font-medium">
          <div className="flex items-center gap-2">
            <Image
              src={`${
                theme === "light" ? "/logo black-carlo.png" : "/carlo-logo-.png"
              }`}
              alt="Carlo Logo"
              width={40}
              height={40}
            />
            <h2 className="text-xl font-bold">Carlo PEaaS</h2>
          </div>
          <p className={`${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
            Carlo PEaaS by Algorethics helps AI developers and enterprises
            achieve ethical compliance with global standards in real-time.
          </p>

          <div>
            <h4 className="font-bold mb-3">Address</h4>
            <ul className={`${theme === "light" ? "text-gray-700" : "text-gray-300"} space-y-2`}>
              <li>📧 steve@algorethics.ai</li>
              <li>📍 333 Sunset Dr, Apt 204, Fort Lauderdale, FL 33301 USA</li>
            </ul>
          </div>
        </div>

        {/* Legal + Contact */}
        <div>
          <h4 className="font-bold mb-3">Legal</h4>
          <ul className={`${theme === "light" ? "text-gray-700" : "text-gray-300"} space-y-2 mb-6`}>
            {navPolicy.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="font-bold mb-3">Contact Us</h4>
          <ul className={`${theme === "light" ? "text-gray-700" : "text-gray-300"} space-y-2`}>
            <li className="flex items-center gap-2">
              <CountryFlagSvg country={"usa"} /> +1 929-400-3096
            </li>
            <li className="flex items-center gap-2">
              <CountryFlagSvg country={"india"} />+91 91 4897-4612
            </li>
            <li className="flex items-center gap-2">
              <CountryFlagSvg country={"uae"} /> +971 50 268 2270
            </li>
            <li className="flex items-center gap-2">
              <CountryFlagSvg country={"georgia"} />+995 598 50 25 55
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className={`${theme === "light" ? "text-gray-700" : "text-gray-300"} space-y-2`}>
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="font-bold mb-3">Newsletter</h4>
          <p className={`${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
            Subscribe to our newsletter and stay updated with the latest news,
            insights, and exclusive offers delivered straight to your inbox.
          </p>
          <CompactSubscriptionForm />
          <SocialMediaIcon />
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="mt-10 w-full border-t-[.5px] border-gray-600/40 pt-5 ">
        <p className={`${theme === "light" ? "text-gray-700" : "text-gray-300"} text-sm text-center`}>
          Copyright ©2025 Algorethics.ai
        </p>
      </div>
    </footer>
  );
}
