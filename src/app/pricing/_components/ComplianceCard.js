"use client";


import Link from "next/link";
import { FaCheck, FaTimes } from "react-icons/fa";



export default function ComplianceCard({ plan }) {

  
  return (
  
      <div
        className="text-white p-8 rounded-xl shadow-2xl max-w-sm flex flex-col justify-between"
        style={{ backgroundColor: "#5d3fd3" }}
      >
        <div>
          <div className="text-3xl font-bold mb-2">{plan.price}</div>
          <div className="text-xl font-semibold mb-4">{plan.title}</div>
          <p className="text-gray-200 mb-6 text-sm leading-relaxed">
            {plan.description}
          </p>
          <ul className="space-y-3 mb-5">
            {plan.features.map((feature, index) => (
              <li
                key={index}
                className={`flex items-center text-sm text-white`}
              >
                {feature.available ? (
                  <FaCheck className="text-white mr-3 flex-shrink-0" />
                ) : (
                  <FaTimes
                    size={18}
                    className="text-red-500 mr-3 flex-shrink-0"
                  />
                )}
                <span className="">{feature.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="w-full bg-white text-[#5d3fd3] font-bold py-3 px-6 rounded-lg text-center transition-transform transform hover:scale-105"

         
        >
          <Link href={`/pricing/${ parseFloat(plan.price.replace(/[^0-9.]/g, ""))}`}>Choose Plan</Link>
          
        </button>
      </div>

 
  );
}
