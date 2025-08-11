import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function PriceCalculate({oneMonthPrice}){


   
      
    const [selectedDuration, setSelectedDuration] = useState('1 months');

   function extractNumber(text) {
  return parseInt(text.replace(/[^0-9]/g, ""), 10);
}
   
const months=extractNumber(selectedDuration)
console.log(months)
  
  const price=months*oneMonthPrice
  const planOptions = [
      { value: '1 months', label: '1 months' },
      { value: '12 months', label: '12 months' },
      { value: '24 months', label: '24 months' },
    { value: '48 months', label: '48 months' },
  ];
    return(
        <div className="bg-white w-full max-w-[577px] h-[303px] rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.3)] p-5 text-black">
            <h3 className="font-semibold text-[18px] ">Seed Compliance</h3>
            <div className="w-full h-[1px] bg-gray-300 mt-5"></div>
            <h4 className="mt-5">Plan duration</h4>
                 <div className="relative w-48 mt-2">
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="block w-full appearance-none bg-white border border-gray-300 rounded-lg py-2 px-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[#651FFF] focus:border-[#651FFF] transition-all duration-200"
            >
              {planOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <BsChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          <div>
         <h3 className="font-semibold text-[18px] mt-5 ">{price} $</h3>
          </div>
 
        </div>
    )
}