import { useTheme } from "@/app/_subcomponents/ThemeContext";
import React, { useEffect, useState } from "react";

const OrderForm = () => {
  const totalSteps = 6;
  const [currentStep, setCurrentStep] = useState(1);
  const [status, setStatus] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [accountCreate, setAccountCreate] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const { loggedIn, setLoggedIn } = useTheme();

  const handleSignOut = () => {
  
    sessionStorage.removeItem("loggedIN");
 
   
    alert("You have signed out!");
  };


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
    subscriptionPlan: "",
    billingFrequency: "",
    referralCode: "",
    preferredLanguage: "",
  });
const normalizeUrl = (url) => {
  if (!url) return "";
  if (!/^https?:\/\//i.test(url)) {
    return "https://" + url; // add https:// if missing
  }
  return url;
};
  useEffect(() => {
    const token = sessionStorage.getItem("loggedIN");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const inputClass =
    "mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm " +
    "focus:outline-none focus:ring-indigo-500 focus:border-indigo-500";

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleChangeLogin = (e) => {
    const { id, value } = e.target;
    setLoginData((prev) => ({ ...prev, [id]: value }));
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
      case 5:
        return (
          formData.subscriptionPlan.trim() &&
          formData.billingFrequency.trim() &&
          formData.preferredLanguage.trim()
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerData = {
      user_info: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: formData.phone,
      },
      account_setup: {
        username: formData.username,
        password: formData.password,
        preferred_communication_channel: formData.communication,
      },
    };

    setStatus(false);

    try {
      // First API call: register
      const response = await fetch(
        "https://carlo.algorethics.ai/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(registerData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const token = data.accessToken;

        sessionStorage.setItem("authToken", token);
        setLoggedIn(true);

        
        const completeProfileData = {
          company_info: {
            company_name: formData.companyName,
            industry: formData.industry,
            website: normalizeUrl(formData.website),
            company_size: formData.companySize,
            country: formData.country,
          },
          project_details: {
            primary_use_case: formData.primaryUseCase,
            number_of_projects: Number(formData.numberOfProjects),
            compliance_frameworks: formData.complianceFrameworks
              .split(",")
              .map((c) => c.trim()),
          },
          subscription_details: {
            subscription_plan: formData.subscriptionPlan,
            billing_frequency: formData.billingFrequency,
            promo_code: formData.referralCode || "", 
          },
          additional_features: {
            team_members: [],
            referral_code: formData.referralCode || "",
            refer: "colleague",
          },
          developer_preferences: {
            preferred_language: formData.preferredLanguage,
            tools_integrations: [], // optional integrations could be another field
          },
        };

        const profileResponse = await fetch(
          "https://carlo.algorethics.ai/api/auth/complete-profile",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(completeProfileData),
          }
        );

        if (profileResponse.ok) {
          setAccountCreate(true);
          setStatus(true);
        } else {
          const errorText = await profileResponse.text();
          console.error("Complete Profile Error:", errorText);
          setStatus(`Profile completion failed: ${profileResponse.status}`);
        }
      } else {
        const errorText = await response.text();
        console.error("Register Error:", errorText);
        setStatus(`Failed to register: ${response.status}`);
      }
    } catch (error) {
      console.error("Network/Submission error:", error);
      setStatus(`Network error: ${error.message}`);
    }
  };

  async function loginFunction(e) {
    e.preventDefault();

    const registerData = {
      username: loginData.username,
      password: loginData.password,
    };
    setLoginError("");
    setStatus(false);

    try {
      const response = await fetch(
        "https://carlo.algorethics.ai/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(registerData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setLoggedIn(true);
        sessionStorage.setItem("authToken", data.accessToken);
        sessionStorage.setItem("loggedIN", true);
        setStatus(true);
      } else {
        setLoginError("Invalid username or password");
        setStatus(true);
      }
    } catch (error) {
      console.error("Network/Submission error:", error);
      setStatus(`Network error: ${error.message}`);
    }
  }
  return (
    <div className="flex-1 bg-white rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.3)] p-5 text-black">
      {showForm &&  <div className="flex items-center mb-6">
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
      </div> }
     

      <div className="flex gap-6 mb-6">
        <label className="flex items-center gap-2 font-semibold text-gray-700 cursor-pointer">
          <input
            type="radio"
            name="account"
            defaultChecked
            className="form-radio h-4 w-4"
            onClick={() => setShowForm(false)}
          />
          Already have an account?
        </label>
        <label className="flex items-center gap-2 font-semibold text-gray-700 cursor-pointer">
          <input
            type="radio"
            name="account"
            
            className="form-radio h-4 w-4"
            onClick={() => setShowForm(true)}
          />
          Register
        </label>
      </div>

      {/* Form */}

      <form className="space-y-6">
       

        {showForm ? (
          <div>
            {currentStep === 1 && (
              <>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name*
                    </label>
                    <input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name*
                    </label>
                    <input
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address*
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone number*
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                  </div>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <input
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  type="text"
                  placeholder="Company Name"
                  className={inputClass}
                />
                <input
                  id="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  type="text"
                  placeholder="Industry"
                  className={inputClass}
                />
                <input
                  id="website"
                  value={formData.website}
                  onChange={handleChange}
                  type="text"
                  placeholder="Website"
                  className={inputClass}
                />
                <input
                  id="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  type="text"
                  placeholder="Company Size"
                  className={inputClass}
                />
                <input
                  id="country"
                  value={formData.country}
                  onChange={handleChange}
                  type="text"
                  placeholder="Country"
                  className={inputClass}
                />
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <input
                  id="primaryUseCase"
                  value={formData.primaryUseCase}
                  onChange={handleChange}
                  type="text"
                  placeholder="Primary Use Case"
                  className={inputClass}
                />
                <input
                  id="numberOfProjects"
                  value={formData.numberOfProjects}
                  onChange={handleChange}
                  type="number"
                  placeholder="Number of Projects"
                  className={inputClass}
                />
                <input
                  id="complianceFrameworks"
                  value={formData.complianceFrameworks}
                  onChange={handleChange}
                  type="text"
                  placeholder="Compliance Frameworks"
                  className={inputClass}
                />
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4">
                <input
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  type="text"
                  placeholder="Username"
                  className={inputClass}
                />
                <input
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="Password"
                  className={inputClass}
                />
                <select
                  id="communication"
                  value={formData.communication}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select Communication Channel</option>
                  <option value="email">Email</option>
                </select>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-4">
                <input
                  id="subscriptionPlan"
                  value={formData.subscriptionPlan}
                  onChange={handleChange}
                  type="text"
                  placeholder="Subscription Plan"
                  className={inputClass}
                />
                <input
                  id="billingFrequency"
                  value={formData.billingFrequency}
                  onChange={handleChange}
                  type="text"
                  placeholder="Billing Frequency"
                  className={inputClass}
                />
                <input
                  id="referralCode"
                  value={formData.referralCode}
                  onChange={handleChange}
                  type="text"
                  placeholder="Referral Code (Optional)"
                  className={inputClass}
                />
                <input
                  id="preferredLanguage"
                  value={formData.preferredLanguage}
                  onChange={handleChange}
                  type="text"
                  placeholder="Preferred Language"
                  className={inputClass}
                />
              </div>
            )}

            {currentStep === 6 && (
              <div className="text-center">
                {accountCreate ? <div>Congrats Your Account is Created Sucessfully</div> :  <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-[#651FFF] text-white px-8 py-4 rounded hover:bg-blue-700"
                >
                  {status ? "Complete Registration" : "Registering"}
                </button>}
               
              </div>
            )}

            {currentStep < 6 && (
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
            )}
          </div>
        ) : !loggedIn ? (
           
          <>
          
            <div className="space-y-4">
              <input
                id="username"
                value={loginData.username}
                onChange={handleChangeLogin}
                type="text"
                placeholder="username"
                className={inputClass}
              />
              <input
                id="password"
                value={loginData.password}
                onChange={handleChangeLogin}
                type="password"
                placeholder="password"
                className={inputClass}
              />
                {loginError && (
                <p className="text-red-600 text-sm mt-2">{loginError}</p>
              )}
            </div>
            <button
              onClick={loginFunction}
              type="submit"
              className={`px-4 py-2 w-full rounded mt-5 text-white bg-[#651FFF] hover:bg-blue-700 `}
            >
              {status ? "Login" :"Logging In..."}
            </button>
           
          </>
        ) : <>
        
        <div>your logged in successfully you can now continue your payment</div>
         <button
              onClick={handleSignOut}
              type="submit"
              className={`px-4 py-2 w-full rounded mt-2 text-white bg-[#651FFF] hover:bg-blue-700 `}
            >
              Logout
            </button>
        </>
        
        }
      </form>
    </div>
  );
};

export default OrderForm;
