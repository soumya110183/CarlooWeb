import { FaBuilding, FaCertificate, FaCheckCircle } from "react-icons/fa";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";

const whatYouGetData = [
  {
    title: "Legal Setup in RAK DAO",
    icon: <FaBuilding size={28} />,
    items: [
      "Company formation in UAE’s only digital asset-focused free zone",
      "Common law structure & fast-track licensing",
      "100% foreign ownership",
      "No corporate or personal income tax on qualified income",
      "Guidance on shareholder agreements, legal tokenomics, and regulatory filings",
    ],
  },
  {
    title: "Free Ethical Compliance with Carlo PEaaS",
    icon: <FaCertificate size={28} />,
    items: [
      "Monthly Compliance Snapshot",
      "Blockchain trust score",
      "Smart contract and AI model health check",
      "Transparency and bias alerts",
      "Lifetime Ethical Credence Badge",
      "Public certificate to use on websites, pitch decks, and investor communications",
      "Listing in the Algorethics Ethical Project Directory",
    ],
  },
];

export default function WhatYouGetSection() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 lg:pb-32 pb-16 text-foreground">
      <HeadingReuse heading="What You Get" />

      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {whatYouGetData.map((section, idx) => (
          <div
            key={idx}
            className="bg-white p-6 max-sm:p-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-black">{section.icon}</span>
              <h3 className="text-black text-[20px] max-sm:text-base font-semibold">{section.title}</h3>
            </div>
            <ul className="space-y-3 text-black text-lg">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 text-white/90">
                    <FaCheckCircle size={18} color="black" />
                  </span>
                  <span className="font-normal max-sm:text-[14px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
