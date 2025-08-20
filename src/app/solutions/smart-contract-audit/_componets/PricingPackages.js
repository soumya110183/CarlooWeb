"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PricingPackages() {
  const [selectedOption, setSelectedOption] = useState("standard");

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <section className="w-full max-w-[1200px] mx-auto lg:pb-32 pb-15 text-foreground ">
      <h2 className="text-4xl font-bold text-center mb-10">
        Pricing & Packages
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <PricingCard
          title="Standard Audit"
          price="AED 1,350 (~USD 370)"
          value="standard"
          turnaround="5–7 business days"
          perks={["Audit report", "Ethical scorecard", "Certification badge"]}
          selected={selectedOption === "standard"}
          onSelect={handleSelect}
        />

        <PricingCard
          title="Deep Audit with Advisory"
          price="AED 2,400 (~USD 653)"
          value="deep"
          turnaround="10–14 business days"
          perks={[
            "Everything in Standard Audit",
            "Post-audit technical advisory",
            "Compliance readiness review",
          ]}
          selected={selectedOption === "deep"}
          onSelect={handleSelect}
        />
      </div>

      <div className="mt-8 p-5 bg-[#5d3fd3]/10 border border-[#5d3fd3]/30 rounded-xl text-center">
        <p className="text-[#5d3fd3] font-semibold">
          RAK DAO Benefit: Exclusive 20% discount for startups incorporated
          through Algorethics in RAK DAO.
        </p>
      </div>
    </section>
  );
}

const PricingCard = ({
  title,
  price,
  value,
  turnaround,
  perks,
  selected,
  onSelect,
}) => {
  const shadow = selected ? "shadow-lg" : "shadow-md";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${shadow} hover:shadow-lg flex flex-col justify-between`}
      style={{ backgroundColor: "#5d3fd3", color: "white" }}
      onClick={() => onSelect(value)}
    >
     
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            selected ? "border-white bg-white" : "border-white/50"
          }`}
        >
          {selected && (
            <div className="w-2 h-2 rounded-full bg-[#5d3fd3] transition-all duration-300"></div>
          )}
        </div>
      </div>

     
      <p className="text-lg font-semibold mb-2">{price}</p>
      <p className="text-sm text-white/80 mb-4">{turnaround}</p>

      
      <ul className="space-y-2 text-sm">
        {perks.map((perk, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <FaCheck size={14} className="text-white" /> {perk}
          </li>
        ))}
      </ul>

     <Link href={`/pricing`}>
      <button className="w-full bg-white text-[#5d3fd3] font-bold py-3 px-6 rounded-lg text-center transition-transform transform hover:scale-105 mt-6">
        
          Choose Plan
        
      </button>
      </Link>
    </motion.div>
  );
};
