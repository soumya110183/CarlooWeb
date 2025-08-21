"use client";

import {
  FaUniversity,
  FaHospital,
  FaBook,
  FaShoppingCart,
  FaTachometerAlt,
  FaBell,
  FaLink,
  FaClipboardList,
  FaCheckCircle
} from "react-icons/fa";

export default function ShariaContent() {
  const expandedUseCases = [
    {
      icon: FaUniversity,
      title: "Islamic Fintech and Neobanks:",
      text: "Carlo prevents riba-driven logic in savings, credit scoring, or lending applications. It enforces zakat-eligible transaction models and validates Islamic finance instruments like Musharaka, Ijara, and Takaful."
    },
    {
      icon: FaHospital,
      title: "Telemedicine and Diagnostics in GCC Hospitals:",
      text: "Enforces gender-sensitive workflows, ensures consent is religiously appropriate, and mandates modesty-based ethical filters for visual processing models."
    },
    {
      icon: FaBook,
      title: "Education Systems in Islamic Nations:",
      text: "Carlo filters AI-driven educational content and NLP applications to ensure it is in line with Islamic moral pedagogy and free of cultural insensitivity."
    },
    {
      icon: FaShoppingCart,
      title: "E-Commerce and Digital Marketing:",
      text: "Enforces halal commerce principles, restricts targeting logic on inappropriate products, and provides real-time moderation of AI-recommended content in Muslim markets."
    }
  ];

  const enforcementTools = [
    {
      icon: FaTachometerAlt,
      title: "Sharia Compliance Dashboard:",
      text: "Displays compliance status for AI modules across datasets, logic, and deployment layers."
    },
    {
      icon: FaBell,
      title: "Violation Alert Engine:",
      text: "Sends real-time notifications when prohibited actions or outputs are detected."
    },
    {
      icon: FaLink,
      title: "Fatwa API Connector:",
      text: "Allows integration with national or institutional Sharia boards for model vetting and certification."
    },
    {
      icon: FaClipboardList,
      title: "Audit Trail Generator:",
      text: "Produces tamper-proof, time-stamped logs required for religious oversight and external validation."
    }
  ];

  const whyChooseCarlo = [
    "First AI compliance tool with native enforcement of Islamic ethical laws",
    "Trusted by developers, religious institutions, and public sector stakeholders",
    "Increases market credibility for businesses targeting OIC and GCC countries",
    "Builds AI that is not only legal, but religiously and culturally accepted"
  ];

  return (
    <div className=" space-y-8 leading-relaxed rounded-3xl mt-10 text-foreground">
      

      <section>
        <h3 className="font-bold text-[20px] mb-2">
        Use Cases for Carlo’s Sharia Module
        </h3>
        <ul className="space-y-2">
          {expandedUseCases.map(({ icon: Icon, title, text }, index) => (
            <li key={index}>
              <Icon className="inline-block mr-2" />
              <span className="font-semibold">{title}</span> {text}
            </li>
          ))}
        </ul>
      </section>

  
      <section>
        <h3 className="font-bold text-[20px] mb-2">
          Real-Time Enforcement Tools Within Carlo
        </h3>
        <ul className="space-y-2">
          {enforcementTools.map(({ icon: Icon, title, text }, index) => (
            <li key={index}>
              <Icon className="inline-block mr-2" />
              <span className="font-semibold">{title}</span> {text}
            </li>
          ))}
        </ul>
      </section>


      <section>
        <h3 className="font-bold text-[20px] mb-2">
          Why Choose Carlo for Sharia-Compliant AI Governance
        </h3>
        <ul className="space-y-2">
          {whyChooseCarlo.map((text, index) => (
            <li key={index}>
              <FaCheckCircle className="inline-block mr-2" />
              {text}
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}
