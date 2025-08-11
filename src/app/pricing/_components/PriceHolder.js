"use client"

import { useState } from "react";



export default function PriceHolder() {
  
  const [selectedOption, setSelectedOption] = useState('1month');


  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
 
      <div className="w-full  mt-7">
    
        <PricingOption
          label="1 month"
          price="$6.99/mo"
          value="1month"
          selected={selectedOption === '1month'}
          onSelect={handleSelect}
        />
        <PricingOption
          label="3 months"
          price="$5.99/mo"
          value="3months"
          selected={selectedOption === '3months'}
          onSelect={handleSelect}
        />
        <PricingOption
          label="12 months"
          price="$4.99/mo"
          value="12months"
          selected={selectedOption === '12months'}
          onSelect={handleSelect}
        />
      </div>
    
  );
}


const PricingOption = ({ label, price, value, selected, onSelect }) => {
 
  const borderColor = selected ? 'border-blue-500' : 'border-gray-200';
  const shadow = selected ? 'shadow-lg' : 'shadow-md';

  return (
    <div
      className={`
        bg-white p-4 my-4 rounded-xl flex items-center justify-between cursor-pointer transition-all duration-300
        border-2 ${borderColor} ${shadow} hover:shadow-lg
      `}
      onClick={() => onSelect(value)}
    >
      {/*
        * This div holds the radio button and label.
        * The radio button is a custom-styled element using a div with a nested div.
        */}
      <div className="flex items-center">
        {/*
          * Custom radio button style.
          * Outer circle with a border.
          */}
        <div className={`
          w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center transition-all duration-300
          ${selected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}
        `}>
          {/*
            * Inner circle that appears when selected.
            * This div's background is white when the option is selected.
            */}
          {selected && (
            <div className="w-2 h-2 rounded-full bg-white transition-all duration-300"></div>
          )}
        </div>
        {/*
          * The label text for the pricing option.
          */}
        <span className="text-gray-800 text-base font-medium">{label}</span>
      </div>

      {/*
        * The price text, aligned to the right.
        */}
      <span className="text-gray-600 text-sm">{price}</span>
    </div>
  );
};

