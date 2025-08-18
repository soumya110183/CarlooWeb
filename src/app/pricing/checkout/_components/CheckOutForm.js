import React from 'react';
import OrderSummary from '../../[planId]/OrderSummary';

const OrderForm = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 font-sans max-w-7xl mx-auto pt-31">
      {/* Form Container */}
      <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
        {/* Form Header */}
        <div className="flex gap-6 mb-8">
          <label className="flex items-center gap-2 font-semibold text-gray-700 cursor-pointer">
            <input type="radio" name="account" className="form-radio text-indigo-600 h-4 w-4" /> Already have an account?
          </label>
          <label className="flex items-center gap-2 font-semibold text-gray-700 cursor-pointer">
            <input type="radio" name="account" defaultChecked className="form-radio text-indigo-600 h-4 w-4" /> Register
          </label>
        </div>
        
        {/* Billing Form */}
        <form className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800">Billing address</h2>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name*</label>
              <input type="text" id="firstName" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name*</label>
              <input type="text" id="lastName" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address*</label>
              <input type="email" id="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div className="flex-1 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
              <input type="password" id="password" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
              <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/4 text-gray-400 hover:text-gray-600">
                {/* SVG for eye icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.027 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.702 7.697-10.675 7.697-4.97 0-9.186-3.223-10.675-7.69a1.096 1.096 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number*</label>
              <div className="flex items-center gap-2 mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm">
                <img src="https://www.countryflags.io/in/flat/24.png" alt="India flag" className="w-6 h-6" />
                <span className="text-gray-600 font-medium">+91</span>
                <input type="tel" id="phone" required className="flex-1 focus:outline-none" />
              </div>
            </div>
            <div className="flex-1">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country*</label>
              <select id="country" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="india">India</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">State*</label>
              <select id="state" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                <option value="">Select State</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="postcode" className="block text-sm font-medium text-gray-700">Postcode*</label>
              <input type="text" id="postcode" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
          
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City*</label>
            <input type="text" id="city" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" id="companyDetails" className="form-checkbox h-4 w-4 text-indigo-600 rounded" />
            <label htmlFor="companyDetails">
              Add company details <span className="inline-flex justify-center items-center w-4 h-4 text-xs border border-gray-400 rounded-full text-gray-500 cursor-pointer">i</span>
            </label>
          </div>
        </form>
      </div>
      
      {/* Order Summary */}
      <OrderSummary />
    </div>
  );
};

export default OrderForm;