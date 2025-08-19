"use client";

import { useTheme } from "@/app/_subcomponents/ThemeContext";
import OrderSummary from "./OrderSummary";
import PriceCalculate from "./PriceCalculate";
import { useState } from "react";
import OrderForm from "./CheckOutForm";

export default function PriceDetails({ plan }) {
  const { price, setPrice } = useTheme();
  const [formComp,setFormComp]=useState(false)
  return (
    <div className="w-full flex justify-between gap-10 mt-10">
     
      {formComp ? <OrderForm /> :  <PriceCalculate plan={plan} setPrice={setPrice} /> }
      
      <OrderSummary price={price} setFormComp={setFormComp}/>
    </div>
  );
}
