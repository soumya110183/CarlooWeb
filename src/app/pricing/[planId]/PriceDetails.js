"use client";

import { useTheme } from "@/app/_subcomponents/ThemeContext";
import OrderSummary from "./OrderSummary";
import PriceCalculate from "./PriceCalculate";

export default function PriceDetails({ oneMonthPrice }) {
  const { price, setPrice } = useTheme();
  return (
    <div className="w-full flex justify-between mt-10">
      <PriceCalculate oneMonthPrice={oneMonthPrice} setPrice={setPrice} />
      <OrderSummary price={price} />
    </div>
  );
}
