"use client"

import { useState } from "react";
import ComplianceCard from "./ComplianceCard";

export default function PricingButtonAndCards({plan}){

    const [plans,setPlans]=useState(false)

     const premiumPlansData = [
  {
    tier: "free-credence",
    price: "$0",
    title: "Free Credence Plan",
    description: "Ideal for all RAK DAO setups.",
    features: [
      { name: "Monthly snapshot", available: true },
      { name: "Lifetime badge", available: true },
      { name: "Ethical indicators", available: true },
    ],
  },
  {
    tier: "innovator-essentials",
    price: "$26.20",
    title: "Innovator Essentials",
    description: "Ideal for early-stage projects.",
    features: [
      { name: "Full dashboard", available: true },
      { name: "Basic smart contract scans", available: true },
      { name: "UAE+EU compliance tracking", available: true },
    ],
  },
  {
    tier: "blockchain-guardian",
    price: "$43.70",
    title: "Blockchain Guardian",
    description: "Perfect for scaling protocols.",
    features: [
      { name: "DeFi risk monitoring", available: true },
      { name: "Explainability checks", available: true },
      { name: "Token governance insights", available: true },
    ],
  },
  {
    tier: "ethical-pinnacle-suite",
    price: "$49.00",
    title: "Ethical Pinnacle Suite",
    description: "Tailored for enterprises.",
    features: [
      { name: "Dedicated advisor", available: true },
      { name: "Quarterly deep audits", available: true },
      { name: "Global framework integration", available: true },
    ],
  },
];

    const plansCardData=plans ? premiumPlansData : plan 

   


    return(
        <>
           <div className="flex gap-4 mt-6 mb-10">
  <button
    onClick={() => setPlans(false)}
    className={`px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105 ${
      !plans
        ? "bg-[#5d3fd3] text-white shadow-md"
        : "border border-[#5d3fd3] text-[#5d3fd3] bg-transparent"
    }`}
  >
    AI Compliance
  </button>

  <button
    onClick={() => setPlans(true)}
    className={`px-6 py-3 rounded-xl font-semibold transition-transform transform hover:scale-105 ${
      plans
        ? "bg-[#5d3fd3] text-white shadow-md"
        : "border border-[#5d3fd3] text-[#5d3fd3] bg-transparent"
    }`}
  >
    Blockchain Compliance
  </button>
</div>
        <div className="w-full grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:mx-auto gap-5 mt-10">
                {plansCardData.map((card, index) => (
                  <ComplianceCard plan={card} key={index} />
                ))}
              </div>
        </>
    )
}