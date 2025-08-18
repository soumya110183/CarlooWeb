"use client";

import Link from "next/link";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function ComplianceCard({ plan }) {
  const slugify = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-") // spaces → hyphens
      .replace(/[^a-z0-9-]/g, ""); // remove non-alphanumeric except hyphens
  };

  return (
    <div
      className="text-white p-6 sm:p-8 rounded-xl shadow-2xl max-w-sm flex flex-col justify-between"
      style={{ backgroundColor: "#5d3fd3" }}
    >
      <div>
        {/* Price */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          {plan.price}
        </div>

        {/* Title */}
        <div className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
          {plan.title}
        </div>

        {/* Description */}
        <p className="text-gray-200 mb-6 text-xs sm:text-sm md:text-base leading-relaxed">
          {plan.description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-5">
          {plan.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-xs sm:text-sm md:text-base text-white"
            >
              {feature.available ? (
                <FaCheck className="text-white mr-3 flex-shrink-0" />
              ) : (
                <FaTimes
                  size={16}
                  className="text-red-500 mr-3 flex-shrink-0"
                />
              )}
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>

    
      <button className="w-full bg-white text-[#5d3fd3] font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-center transition-transform transform hover:scale-105 text-sm sm:text-base md:text-lg">
        <Link href={`/pricing/${slugify(plan.title)}`}>Choose Plan</Link>
      </button>
    </div>
  );
}
