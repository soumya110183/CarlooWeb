"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaSearch,
  FaClipboardList,
  FaFileAlt,
  FaHandshake,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Submit Your Code",
    description: [
      "Share verified GitHub repos or deploy addresses via secure Carlo submission portal.",
    ],
    icon: <FaGithub size={28} className="text-primary" />,
  },
  {
    id: 2,
    title: "Initial Screening",
    description: [
      "Quick diagnostic within 24 hours to estimate audit complexity.",
    ],
    icon: <FaSearch size={28} className="text-primary" />,
  },
  {
    id: 3,
    title: "Deep Analysis Phase",
    description: [
      "Static and dynamic analysis",
      "Manual code review by experts",
      "Cross-check with Carlo’s Ethical Pattern Library",
      "Regulatory alignment screening",
    ],
    icon: <FaClipboardList size={28} className="text-primary" />,
  },
  {
    id: 4,
    title: "Reporting & Certification",
    description: [
      "Preliminary findings sent for your review",
      "Final report, certification badge, and score published within 5–7 days (Standard) or 10–14 days (Deep)",
    ],
    icon: <FaFileAlt size={28} className="text-primary" />,
  },
  {
    id: 5,
    title: "Post-Audit Collaboration (Optional)",
    description: [
      "Carlo can assist in remediation verification and re-audits",
      "Support for listing and investor presentations",
    ],
    icon: <FaHandshake size={28} className="text-primary" />,
  },
];

export default function AuditProcessTimeline() {
  return (
    <section className="w-full max-w-[1200px] mx-auto lg:pb-32 pb-15 text-black px-6">
      <h2 className="text-4xl text-foreground font-bold text-center mb-12">
        Audit Process & Timeline
      </h2>

      <div className="flex flex-col gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex gap-6 items-start p-6 bg-white rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              transition: { duration: 0.2 },
            }}
          >
            {/* Number Badge */}
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-lg">
              {step.id}
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {step.icon}
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                {step.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
