"use client";

import { useTheme } from "@/app/_subcomponents/ThemeContext";
import OrderSummary from "./OrderSummary";
import PriceCalculate from "./PriceCalculate";

export default function PriceDetails({ plan }) {
  const { price, setPrice } = useTheme();
  return (
    <div className="w-full flex justify-between mt-10">
      <PriceCalculate plan={plan} setPrice={setPrice} />
      <OrderSummary price={price} />
    </div>
  );
}
