"use client"

import OrderSummary from "./OrderSummary";
import PriceCalculate from "./PriceCalculate";

export default  function PriceDetails({oneMonthPrice}){
    return(
      <div className="w-full flex justify-between mt-10">
       <PriceCalculate oneMonthPrice={oneMonthPrice} />
       <OrderSummary />
      </div>
    )
}