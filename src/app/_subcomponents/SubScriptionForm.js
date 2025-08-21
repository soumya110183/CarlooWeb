"use client";

import { useState } from "react";

export default function SubScriptionForm({ maxw }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(false);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus(true);
       alert("✅ Thank you for subscribing!");
        setEmail(""); // reset input
      } else {
        setStatus("❌ Subscription failed. Please try again.");
        alert("❌ Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("⚠️ An error occurred. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full max-w-[560px] bg-black items-center sm:p-3.5 p-2.5 rounded-[10px] justify-between mt-6 ${
        maxw && "mx-auto"
      }`}
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="px-4 py-2 w-full sm:w-2/3 text-white border-none outline-none placeholder:text-gray-500 focus:outline-none focus:ring-0"
        required
      />
      <button
        type="submit"
        disabled={status === "Subscribing..."}
        className="bg-[#651FFF] p-2.5 hover:bg-purple-600 text-white font-semibold rounded-[10px] transition"
      >
        {status ? "Subscribe" : "Subscribing"}
      </button>

     
    </form>
  );
}
