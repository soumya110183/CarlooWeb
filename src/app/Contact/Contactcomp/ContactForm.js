"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Thank you for contacting Carlo PEaaS. Your request has been logged, and our compliance experts will be in touch within 24 hours.");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-4xl p-8 max-sm:p-4 bg-[#0F092A]  rounded-xl  shadow-2xl mx-auto mt-10 max-sm:mt-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#B7B6C0]"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="mt-1 block w-full  text-white border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2 placeholder-gray-500 transition-colors duration-200"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#B7B6C0]"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="mt-1 block w-full  text-white border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2 placeholder-gray-500 transition-colors duration-200"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-[#B7B6C0]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Your Phone Number"
              className="mt-1 block w-full  text-white border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2 placeholder-gray-500 transition-colors duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 block w-full text-white bg-[#0F092A] border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2 placeholder-gray-500 transition-colors duration-200 appearance-none rounded-none"
              required
            >
              <option value="" disabled className="bg-[#0F092A] text-gray-400">
                Select a Subject
              </option>
              <option
                value="general inquiry"
                className="bg-[#0F092A] text-white"
              >
                General Inquiry
              </option>
              <option
                value="partnerships & collaborations"
                className="bg-[#0F092A] text-white"
              >
                Partnerships & Collaborations
              </option>
              <option
                value="compliance & certification request"
                className="bg-[#0F092A] text-white"
              >
                Compliance & Certification Request
              </option>
              <option
                value="product demo / sandbox access"
                className="bg-[#0F092A] text-white"
              >
                Product Demo / Sandbox Access
              </option>
              <option
                value="technical support & integration"
                className="bg-[#0F092A] text-white"
              >
                Technical Support & Integration
              </option>
              <option
                value="pricing & subscriptions"
                className="bg-[#0F092A] text-white"
              >
                Pricing & Subscriptions
              </option>
              <option
                value="government & defense programs"
                className="bg-[#0F092A] text-white"
              >
                Government & Defense Programs
              </option>
              <option
                value="enterprise solutions (banking, healthcare, retail, etc.)"
                className="bg-[#0F092A] text-white"
              >
                Enterprise Solutions (Banking, Healthcare, Retail, etc.)
              </option>
              <option
                value="academic / research collaboration"
                className="bg-[#0F092A] text-white"
              >
                Academic / Research Collaboration
              </option>
              <option
                value="media & press inquiry"
                className="bg-[#0F092A] text-white"
              >
                Media & Press Inquiry
              </option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#B7B6C0]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Write Your Message Here"
            className="mt-1 block w-full  text-white border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2 resize-none placeholder-gray-500 transition-colors duration-200"
            required
          />
        </div>

        {status && (
          <div className="text-center text-sm font-medium text-gray-300">
            {status}
          </div>
        )}

        <div className="flex justify-start mt-8">
          <button
            type="submit"
            className="px-8 py-3 text-lg max-sm:w-full font-semibold text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900 bg-[#651FFF] hover:from-purple-700 hover:to-indigo-700"
            disabled={status === "Sending..."}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
