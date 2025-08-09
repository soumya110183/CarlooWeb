"use client";

import {
  FaEye,
  FaBalanceScale,
  FaSyncAlt,
  FaCertificate,
  FaShieldAlt,
  FaGlobe,
  FaHeart,
  FaHospital,
  FaUniversity,
  FaGavel,
  FaBookOpen,
  FaCheckCircle
} from "react-icons/fa";

export default function RomeCallContent() {
  const howCarloImplements = [
    {
      icon: FaEye,
      title: "Ethical Watchdog Module:",
      text: "Monitors compliance with all 6 principles in real-time using AI-specific ethical indicators."
    },
    {
      icon: FaBalanceScale,
      title: "Bias and Risk Analyzer:",
      text: "Scores model outputs for fairness, inclusiveness, and unintended consequences."
    },
    {
      icon: FaSyncAlt,
      title: "Feedback Loops:",
      text: "Notifies developers of detected violations with auto-generated JSON logs and corrective suggestions."
    },
    {
      icon: FaCertificate,
      title: "Certification API:",
      text: "Validates AI systems against the Rome Call principles and issues verifiable Algorethics Certifications."
    }
  ];

  const whyCarloEssential = [
    {
      icon: FaShieldAlt,
      text: "Institutional Trust: Uphold the credibility of your AI project before regulators, investors, and the public."
    },
    {
      icon: FaGlobe,
      text: "Global Readiness: The Rome Call is now referenced by institutions across Europe, the Vatican, Latin America, and Africa—Carlo keeps you aligned."
    },
    {
      icon: FaHeart,
      text: "Moral Grounding in Technology: Ensure your AI systems reflect human-centric values in every line of code and logic."
    }
  ];

  const useCases = [
    {
      icon: FaHospital,
      title: "Healthcare AI:",
      text: "Ensures fairness in diagnostics and prevents bias in treatment recommendations."
    },
    {
      icon: FaUniversity,
      title: "Financial Services:",
      text: "Validates impartiality in credit scoring, fraud detection, and algorithmic trading."
    },
    {
      icon: FaGavel,
      title: "Public Sector & Law Enforcement:",
      text: "Audits facial recognition or predictive policing tools for fairness, accountability, and inclusion."
    },
    {
      icon: FaBookOpen,
      title: "Education Tech:",
      text: "Enforces transparency in scoring algorithms and protects student data."
    }
  ];

  const getCertified = [
    "Embed ethical checks at every stage of the ML lifecycle.",
    "Automatically document compliance and generate audit trails.",
    "Receive official Rome Call-Aligned Ethical AI Certification via Algorethics."
  ];

  return (
    <div className="space-y-8 leading-relaxed rounded-3xl mt-10 text-foreground">
      
      {/* How Carlo Implements */}
      <section>
        <h3 className="font-bold text-[20px] mb-2">
          How Carlo Implements the Rome Call Principles in Real-Time
        </h3>
        <ul className="space-y-2">
          {howCarloImplements.map(({ icon: Icon, title, text }, index) => (
            <li key={index}>
              <Icon className="inline-block mr-2" />
              <span className="font-semibold">{title}</span> {text}
            </li>
          ))}
        </ul>
      </section>

      {/* Why Carlo is Essential */}
      <section>
        <h3 className="font-bold text-[20px] mb-2">
          Why Carlo is Essential for Rome Call Alignment
        </h3>
        <ul className="space-y-2">
          {whyCarloEssential.map(({ icon: Icon, text }, index) => (
            <li key={index}>
              <Icon className="inline-block mr-2" /> {text}
            </li>
          ))}
        </ul>
      </section>

      {/* Use Cases */}
      <section>
        <h3 className="font-bold text-[20px] mb-2">
          Use Cases Where Carlo Enforces Rome Call Compliance
        </h3>
        <ul className="space-y-2">
          {useCases.map(({ icon: Icon, title, text }, index) => (
            <li key={index}>
              <Icon className="inline-block mr-2" />
              <span className="font-semibold">{title}</span> {text}
            </li>
          ))}
        </ul>
      </section>

      {/* Get Certified */}
      <section>
        <h3 className="font-bold text-[20px] mb-2">
          Get Certified with Rome Call Standards
        </h3>
        <ul className="space-y-2">
          {getCertified.map((text, index) => (
            <li key={index}>
              <FaCheckCircle className="inline-block mr-2" /> {text}
            </li>
          ))}
        </ul>
      </section>

      {/* About + Contact */}
      <section>
        <h3 className="font-bold text-[20px] mb-2">About Carlo PEaaS</h3>
        <p>
          Carlo is a modular, real-time ethical compliance system for AI and digital
          systems. It is part of the broader Algorethics AI Governance Ecosystem and
          ensures ethical oversight through APIs, SDKs, and no-code dashboards.
        </p>
      </section>

      <section>
        <h3 className="font-bold text-[20px] mb-2">Contact</h3>
        <p>📧 steve@algorethics.ai</p>
        <p>📞 +91 91489 74612</p>
        <p>🌍 www.algorethics.ai</p>
        <blockquote className="italic mt-2">
          “With Carlo, we don’t just write ethical AI. We enforce it.”
        </blockquote>
      </section>

    </div>
  );
}
