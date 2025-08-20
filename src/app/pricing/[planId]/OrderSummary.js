"use client";

import { useTheme } from "@/app/_subcomponents/ThemeContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OrderSummary({ setFormComp, formComp }) {
  const { price, setPrice,loggedIn,setLoggedIn } = useTheme();
   
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(true);
  

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (token) {
      setUser(token);

    }
  }, [loggedIn]);

  async function handleSubmit(e) {
    e.preventDefault();

    const registerData = {
      pricing_tier: "seed",
      billing_cycle: "monthly",
      success_url: "https://example.com/success",
      cancel_url: "https://example.com/cancel",
      discount_code: "WELCOME10",
    };

    setStatus(false);

    try {
      console.log("Sending data:", JSON.stringify(registerData, null, 2));

      const response = await fetch(
        "https://carlo.algorethics.ai/api/subscription/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${user}`,
          },
          body: JSON.stringify(registerData),
        }
      );

      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      if (response.ok) {
        setStatus(true);
        const data = await response.json();
        
         window.location.href = data.data.checkout_url;
        console.log("Success:", data);
      
      } else {
        const errorText = await response.text();
        console.error("Error response:", response.status, errorText);
        setStatus(
          `Failed to register: ${response.status} ${response.statusText}`
        );
      }
    } catch (error) {
      console.error("Network/Submission error:", error);
      setStatus(`Network error: ${error.message}`);
    }
  }
  return (
    <div className="bg-white w-full max-w-[492px]  rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.3)] p-5 text-black">
      <h3 className="font-semibold text-[18px]">Order Summary</h3>
      <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
      <h3 className="font-semibold text-[16px] mt-5">Seed Compliance</h3>
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-[18px] mt-5">Sub Total</h4>
        <h4 className="font-semibold text-[18px] mt-5">
          {price.total + " " + price.currency}
        </h4>
      </div>
      {formComp ? (
        
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          disabled={!user} 
          className={`px-4 py-2 w-full rounded mt-10 text-white ${
            !user
              ? "bg-gray-400 cursor-not-allowed" // disabled style
              : "bg-[#651FFF] hover:bg-blue-700"
          }`}
        >
          {status ? "Submit Payment" : "Redirecting" }
          
        </button>
      ) : (
        <button onClick={() => setFormComp(true)} type="submit" className={`px-4 py-2 w-full rounded mt-10 text-white bg-[#651FFF] hover:bg-blue-700 `}>
          Continue
        </button>
      )}
    </div>
  );
}
