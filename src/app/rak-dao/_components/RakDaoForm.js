"use client";

import { useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function RakDaoForm({setShowVideo}) {
  const [formData, setFormData] = useState({
    applicant: { full_name: "", email: "", phone: "", nationality: "" },
  directors: [{ name: "", passport: "", nationality: "" }],
    shareholders: [{ name: "", type: "", percent: "", ubo: "No" }],
  
  
  });

  const [status, setStatus] = useState("");


  const handleChange = (e, section, index, field) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prev) => {
      let newData = { ...prev };

      if (files) {
        if (Array.isArray(newData[section])) {
          newData[section][index][field] = files[0];
        } else {
          newData[section][name] = files[0];
        }
        return newData;
      }

   
      if (section && index !== undefined && field) {
        newData[section][index][field] = value;
        return newData;
      }

      
      if (section && field) {
        if (type === "checkbox" && Array.isArray(newData[section][field])) {
          if (checked) {
            newData[section][field].push(value);
          } else {
            newData[section][field] = newData[section][field].filter(
              (v) => v !== value
            );
          }
        } else if (type === "checkbox") {
          newData[section][field] = checked;
        } else {
          newData[section][field] = value;
        }
        return newData;
      }

      
      newData[name] = type === "checkbox" ? checked : value;
      return newData;
    });
  };

  const addDirector = () => {
    setFormData((prev) => ({
      ...prev,
      directors: [
        ...prev.directors,
        { name: "", passport: "", nationality: "" },
      ],
    }));
  };

  const removeDirector = (i) => {
    setFormData((prev) => ({
      ...prev,
      directors: prev.directors.filter((_, idx) => idx !== i),
    }));
  };

  const addShareholder = () => {
    setFormData((prev) => ({
      ...prev,
      shareholders: [
        ...prev.shareholders,
        { name: "", type: "", percent: "", ubo: "No" },
      ],
    }));
  };

  const removeShareholder = (i) => {
    setFormData((prev) => ({
      ...prev,
      shareholders: prev.shareholders.filter((_, idx) => idx !== i),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const response = await fetch("/api/rakdao", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setStatus("Application submitted successfully!");
      } else {
        setStatus("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error occurred. Try again.");
    }
  };

  return (
    <div className="w-full max-w-5xl h-[80vh] overflow-y-auto p-8 max-sm:p-4 relative rounded-xl shadow-2xl mx-auto mt-10 bg-[#0F092A]">
        <button className="absolute top-0 right-5" onClick={()=>setShowVideo(false)}>
            <IoCloseCircleSharp color="red" size={29} />
        </button>
        
      <h2 className="text-3xl font-bold text-white mb-4">
        Build Ethically from Day One — RAK DAO × Algorethics
      </h2>
      <p className="text-[#B7B6C0] mb-6">
        Set up in the UAE’s first digital assets free zone and activate Carlo
        PEaaS compliance from day one.
      </p>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Applicant Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Applicant & Company Basics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["full_name", "email", "phone", "nationality"].map((field, idx) => (
              <div key={idx}>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  value={formData.applicant[field]}
                  onChange={(e) => handleChange(e, "applicant", undefined, field)}
                  placeholder={
                    field === "full_name"
                      ? "Full Name"
                      : field === "email"
                      ? "Email"
                      : field === "phone"
                      ? "+971 ..."
                      : "Nationality"
                  }
                  className="mt-1 block w-full text-white border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2 bg-transparent"
                  required
                />
              </div>
            ))}
          </div>
        </div>

        {/* Directors */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Directors</h3>
          {formData.directors.map((d, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <input
                placeholder="Full Name"
                value={d.name}
                onChange={(e) => handleChange(e, "directors", i, "name")}
                className="block w-full text-white border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2 bg-transparent"
                required
              />
              <input
                placeholder="Passport No."
                value={d.passport}
                onChange={(e) => handleChange(e, "directors", i, "passport")}
                className="block w-full text-white border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2 bg-transparent"
                required
              />
              <div className="flex gap-2">
                <input
                  placeholder="Nationality"
                  value={d.nationality}
                  onChange={(e) => handleChange(e, "directors", i, "nationality")}
                  className="block w-full text-white border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2 bg-transparent"
                />
                {formData.directors.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDirector(i)}
                    className="text-red-500 font-medium"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addDirector}
            className="text-[#651FFF] font-medium"
          >
            + Add another director
          </button>
        </div>

        {/* Shareholders */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Shareholders</h3>
          {formData.shareholders.map((s, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
              <input
                placeholder="Full Name / Entity"
                value={s.name}
                onChange={(e) => handleChange(e, "shareholders", i, "name")}
                className="block w-full text-white border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2 bg-transparent"
              />
              <select
                value={s.type}
                onChange={(e) => handleChange(e, "shareholders", i, "type")}
                className="block w-full text-white bg-[#0F092A] border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2"
              >
                <option value="">Select...</option>
                <option>Individual</option>
                <option>Corporate</option>
              </select>
              <input
                type="number"
                placeholder="%"
                value={s.percent}
                onChange={(e) => handleChange(e, "shareholders", i, "percent")}
                className="block w-full text-white border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2 bg-transparent"
              />
              <div className="flex gap-2">
                <select
                  value={s.ubo}
                  onChange={(e) => handleChange(e, "shareholders", i, "ubo")}
                  className="block w-full text-white bg-[#0F092A] border-b border-gray-600 focus:outline-none focus:border-[#651FFF] py-2"
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
                {formData.shareholders.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeShareholder(i)}
                    className="text-red-500 font-medium"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addShareholder}
            className="text-[#651FFF] font-medium"
          >
            + Add another shareholder
          </button>
        </div>

        {/* Submit */}
        {status && (
          <div className="text-center text-sm font-medium text-gray-300">
            {status}
          </div>
        )}

        <div className="flex justify-start mt-8">
          <button
            type="submit"
            className="px-8 py-3 text-lg font-semibold text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900 bg-[#651FFF] disabled:opacity-50"
            disabled={status === "Submitting..."}
          >
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
}
