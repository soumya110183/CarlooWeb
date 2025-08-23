"use client";

import { useTheme } from "@/app/_subcomponents/ThemeContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function OrderSummary({ setFormComp, formComp }) {
  const { price, setPrice, loggedIn, setLoggedIn } = useTheme();
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (token) setUser(token);
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

      if (response.ok) {
        setStatus(true);
        const data = await response.json();
        window.location.href = data.data.checkout_url;
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
    <div className="bg-white w-full max-w-[492px] rounded-xl shadow-lg p-6 text-black flex flex-col gap-4 sm:gap-6">
      {/* Heading */}
      <h3 className="font-bold text-xl text-gray-900">Order Summary</h3>
      <div className="w-full h-px bg-gray-300 mt-2"></div>

      {/* Plan */}
      <h3 className="font-semibold text-lg text-gray-800 mt-4">Seed Compliance</h3>

      {/* Subtotal */}
      <div className="flex items-center justify-between mt-3">
        <h4 className="font-medium text-gray-700">Sub Total</h4>
        <h4 className="font-semibold text-gray-900">
          {price.total} {price.currency}
        </h4>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-200 my-4"></div>

      {/* Action button */}
      {formComp ? (
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          disabled={!user}
          className={`w-full py-3 rounded-lg text-white font-medium text-center transition-all duration-200 ${
            !user
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#651FFF] hover:bg-purple-700"
          }`}
        >
          {status ? "Submit Payment" : "Redirecting..."}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setFormComp(true)}
          className="w-full py-3 rounded-lg text-white font-medium bg-[#651FFF] hover:bg-purple-700 transition-all duration-200"
        >
          Continue
        </button>
      )}

      {/* Optional: add small note or hint */}
      {!user && formComp && (
        <p className="text-sm text-gray-500 mt-2 text-center">
          Please log in to proceed with payment
        </p>
      )}
    </div>
  );
}
