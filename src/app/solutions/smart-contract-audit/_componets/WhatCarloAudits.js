import { FaCode, FaBalanceScale, FaShieldAlt, FaLock, FaGasPump, FaHandshake, FaGavel, FaChartPie, FaFileContract, FaUserShield, FaDatabase } from "react-icons/fa";
import HeadingReuse from "@/app/_subcomponents/HeadingReuse";

const auditData = [
  {
    title: "Code Security & Logic Review",
    items: [
      { icon: <FaShieldAlt />, text: "Re-entrancy vulnerabilities" },
      { icon: <FaCode />, text: "Integer overflow/underflow" },
      { icon: <FaLock />, text: "Access control errors" },
      { icon: <FaGasPump />, text: "Gas optimization flaws" },
    ],
  },
  {
    title: "Ethical Logic Detection",
    items: [
      { icon: <FaHandshake />, text: "Rug-pull potential in liquidity withdrawal functions" },
      { icon: <FaGavel />, text: "Centralized mint authority or token freeze powers" },
      { icon: <FaBalanceScale />, text: "Stealth fees or taxation logic" },
      { icon: <FaUserShield />, text: "Governance override clauses" },
    ],
  },
  {
    title: "Governance & DAO Compliance",
    items: [
      { icon: <FaBalanceScale />, text: "Voting fairness and quorum rules" },
      { icon: <FaGavel />, text: "Proposal flows and veto powers" },
      { icon: <FaChartPie />, text: "Token-weighted voting imbalances" },
    ],
  },
  {
    title: "Compliance-Linked Reviews",
    items: [
      { icon: <FaFileContract />, text: "Compatibility with SEC and EU MiCA requirements" },
      { icon: <FaUserShield />, text: "Consumer protection fairness (DFSA/UAE)" },
      { icon: <FaDatabase />, text: "GDPR/CCPA linkage for data-using contracts" },
    ],
  },
];

export default function WhatCarloAudits() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 lg:pb-32 pb-16 text-foreground">
      <HeadingReuse heading="What Carlo Audits for" />

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {auditData.map((section, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg">
                  <span className="text-primary text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
