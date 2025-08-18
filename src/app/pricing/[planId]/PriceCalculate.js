"use client";

import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function PriceCalculate({ plan, setPrice }) {
  const [currency, setCurrency] = useState("USD");
  const [duration, setDuration] = useState(3);

  const oneMonthPrice = plan.price;

  const exchangeRates = {
    USD: 1,
    AED: 3.67,
  };

  const durationOptions = [
    { years: 1, label: "1 Year (20% off)", discount: 0.2 },
    { years: 2, label: "2 Years (40% off)", discount: 0.4 },
    { years: 3, label: "3 Years (50% off)", discount: 0.5 },
  ];

  const selectedOption = durationOptions.find((opt) => opt.years === duration);

  const priceBeforeDiscount = oneMonthPrice * 12 * duration;
  const discountedPrice = priceBeforeDiscount * (1 - selectedOption.discount);
  const monthlyPrice = discountedPrice / (12 * duration);

  const conversionRate = exchangeRates[currency];
  const convertedTotal = (discountedPrice * conversionRate).toFixed(2);
  const convertedMonthly = (monthlyPrice * conversionRate).toFixed(2);

  useEffect(() => {
    setPrice({
      total: Number(convertedTotal),
      monthly: Number(convertedMonthly),
      currency: currency,
    });
  }, [convertedTotal, convertedMonthly, currency, setPrice]);

  return (
    <div className="bg-white w-full max-w-[577px] rounded-[8px]  shadow-[0_0_15px_rgba(0,0,0,0.3)] p-5 text-black">
      <h3 className="font-semibold text-[18px]">{plan.tier} compliance</h3>
      <div className="w-full h-[1px] bg-gray-300 mt-4"></div>

      <div className="flex justify-between mt-5">
        <div className="relative w-48">
          <select
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
            className="block w-full appearance-none bg-white border border-gray-300 rounded-lg py-2 px-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[#651FFF] focus:border-[#651FFF] transition-all duration-200"
          >
            {durationOptions.map((opt) => (
              <option key={opt.years} value={opt.years}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <BsChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        <div className="relative w-28">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="block w-full appearance-none bg-white border border-gray-300 rounded-lg py-2 px-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[#651FFF] focus:border-[#651FFF] transition-all duration-200"
          >
            <option value="USD">USD</option>
            <option value="AED">AED</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <BsChevronDown className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-[16px] font-medium">
          Monthly Price:{" "}
          <span className="font-semibold">
            {convertedMonthly} {currency}
          </span>
        </h4>
        <div className="flex w-full max-w-[80%] justify-between items-center mt-5">
          <h4 className="text-[16px] font-medium ">
            Total ({duration} Years):{" "}
          </h4>
          <p className="bg-[#01BD40] px-5 py-2 rounded-full text-white  font-bold">
            Save ${(priceBeforeDiscount - discountedPrice).toFixed(2)}
          </p>
          <div>
            <h4 className="line-through">
              {(priceBeforeDiscount * conversionRate).toFixed(2)} {currency}
            </h4>
            <h4 className="font-semibold">
              {convertedTotal} {currency}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
