import React, { useState } from "react";

const OrderForm = () => {
  const totalSteps = 6;
  const [currentStep, setCurrentStep] = useState(1);

  // 🔹 Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    industry: "",
    website: "",
    companySize: "",
    country: "",
    primaryUseCase: "",
    numberOfProjects: "",
    complianceFrameworks: "",
    username: "",
    password: "",
    communication: "",
  });

  // 🔹 Reusable input styles
  const inputClass =
    "mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm " +
    "focus:outline-none focus:ring-indigo-500 focus:border-indigo-500";


  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };


  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return (
          formData.firstName.trim() &&
          formData.lastName.trim() &&
          formData.email.trim() &&
          formData.phone.trim()
        );
      case 2:
        return (
          formData.companyName.trim() &&
          formData.industry.trim() &&
          formData.website.trim() &&
          formData.companySize.trim() &&
          formData.country.trim()
        );
      case 3:
        return (
          formData.primaryUseCase.trim() &&
          formData.numberOfProjects.trim() &&
          formData.complianceFrameworks.trim()
        );
      case 4:
        return (
          formData.username.trim() &&
          formData.password.trim() &&
          formData.communication.trim()
        );
      default:
        return true; 
    }
  };

  const nextStep = () => {
    if (currentStep < totalSteps && validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex-1 bg-white rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.3)] p-5 text-black">
      {/* Progress Bar */}
      <div className="flex items-center mb-6">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex-1 flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                i + 1 <= currentStep
                  ? "bg-[#651FFF] text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {i + 1}
            </div>
            {i < totalSteps - 1 && (
              <div
                className={`flex-1 h-1 ${
                  i + 1 < currentStep ? "bg-[#651FFF]" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Account Type */}
      <div className="flex gap-6 mb-6">
        <label className="flex items-center gap-2 font-semibold text-gray-700 cursor-pointer">
          <input
            type="radio"
            name="account"
            className="form-radio text-indigo-600 h-4 w-4"
          />
          Already have an account?
        </label>
        <label className="flex items-center gap-2 font-semibold text-gray-700 cursor-pointer">
          <input
            type="radio"
            name="account"
            defaultChecked
            className="form-radio text-indigo-600 h-4 w-4"
          />
          Register
        </label>
      </div>

      {/* Form */}
      <form className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Billing address</h2>

        {/* Step 1 */}
        {currentStep === 1 && (
          <>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address*
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div className="flex-1">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone number*
                </label>
                <div
                  className={
                    "mt-1 flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm " +
                    "focus-within:ring-indigo-500 focus-within:border-indigo-500"
                  }
                >
                  <select
                    className="bg-transparent focus:outline-none text-gray-700"
                    defaultValue="+91"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+81">🇯🇵 +81</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 focus:outline-none"
                    placeholder="Enter number"
                    required
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <input id="companyName" value={formData.companyName} onChange={handleChange} type="text" placeholder="Company Name" className={inputClass} />
            <input id="industry" value={formData.industry} onChange={handleChange} type="text" placeholder="Industry" className={inputClass} />
            <input id="website" value={formData.website} onChange={handleChange} type="text" placeholder="Website" className={inputClass} />
            <input id="companySize" value={formData.companySize} onChange={handleChange} type="text" placeholder="Company Size" className={inputClass} />
            <input id="country" value={formData.country} onChange={handleChange} type="text" placeholder="Country" className={inputClass} />
          </div>
        )}

        {/* Step 3 */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <input id="primaryUseCase" value={formData.primaryUseCase} onChange={handleChange} type="text" placeholder="Primary Use Case" className={inputClass} />
            <input id="numberOfProjects" value={formData.numberOfProjects} onChange={handleChange} type="number" placeholder="Number of Projects" className={inputClass} />
            <input id="complianceFrameworks" value={formData.complianceFrameworks} onChange={handleChange} type="text" placeholder="Compliance Frameworks" className={inputClass} />
          </div>
        )}

        {/* Step 4 */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <input id="username" value={formData.username} onChange={handleChange} type="text" placeholder="Username" className={inputClass} />
            <input id="password" value={formData.password} onChange={handleChange} type="password" placeholder="Password" className={inputClass} />
            <input id="communication" value={formData.communication} onChange={handleChange} type="text" placeholder="Preferred Communication Channel" className={inputClass} />
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            type="button"
            className="bg-gray-300 text-black px-6 py-3 rounded hover:bg-gray-400 disabled:opacity-50"
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Previous
          </button>

          <button
            type="button"
            className="bg-[#651FFF] text-white px-6 py-3 rounded hover:bg-blue-700 disabled:opacity-50"
            onClick={nextStep}
            disabled={!validateStep() || currentStep === totalSteps}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
