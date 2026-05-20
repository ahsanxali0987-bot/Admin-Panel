import React, { useState } from "react";
import { Link } from "react-router-dom";

const INITIAL_PLANS = [
  { _id: "1", name: "Basic", price: 5, enabled: true },
  { _id: "2", name: "Standard", price: 12, enabled: true },
  { _id: "3", name: "Premium", price: 20, enabled: false },
];

{
  /* Toggle button */
}
const Toggle = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative inline-flex items-center w-14 h-7 rounded-full transition-colors duration-200 focus:outline-none ${
      enabled ? "bg-[#25D422]" : "bg-gray-300"
    }`}
  >
    <div
      className={`text-white text-[10px] font-medium ${enabled ? "pl-1" : "pl-8"}`}
    >
      {enabled ? "ON" : "OFF"}
    </div>
    <span
      className={`absolute left-1 inline-flex items-center justify-center w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
        enabled ? "translate-x-7" : "translate-x-0"
      }`}
    />
  </button>
);

const Boost_Event_Visibility = () => {
  const [plans, setPlans] = useState(INITIAL_PLANS);
  // Tracks the draft price input value per plan id
  const [priceInputs, setPriceInputs] = useState({});

  // Flip the enabled flag for a plan
  const togglePlan = (id) =>
    setPlans((prev) =>
      prev.map((p) => (p._id === id ? { ...p, enabled: !p.enabled } : p)),
    );

  // Update the draft input value for a plan
  const handlePriceInput = (id, value) =>
    setPriceInputs((prev) => ({ ...prev, [id]: value }));

  // Commit the new price to the plan
  const updatePrice = (id) => {
    const raw = priceInputs[id];
    const parsed = parseFloat(raw);
    if (!raw || isNaN(parsed) || parsed <= 0) return;
    setPlans((prev) =>
      prev.map((p) => (p._id === id ? { ...p, price: parsed } : p)),
    );
    setPriceInputs((prev) => ({ ...prev, [id]: "" }));
  };

  const billingLabel = (name) =>
    name === "Basic"
      ? "Billed weekly"
      : name === "Standard"
        ? "Billed 15 Days"
        : "Billed Monthly";

  return (
    <div className="absolute top-20 right-0 bg-[#FAFAFA] w-[80%] max-lg:w-[100%] max-lg:mt-10">
      <div className="p-3">
        <div className="rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.08)] bg-white p-5">
          {/* Header */}
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">Boost Your Profile</p>
            <Link to="/Manually-Feature">
              <button className="text-white text-sm bg-[#e45252] font-medium py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                Feature Manually
              </button>
            </Link>
          </div>

          {/* Plan cards */}
          <div className="w-full flex mt-8 justify-evenly max-lg:flex-col max-lg:items-center gap-5">
            {plans.map((plan) => (
              <div
                key={plan._id}
                className="bg-black w-[25%] flex flex-col gap-2 items-center pt-2 pb-5 max-lg:w-[90%]"
                style={{ border: "2px solid #e45252" }}
              >
                {/* Plan name */}
                <p className="text-white text-left w-full px-3 font-medium">
                  {plan.name}
                </p>

                {/* Diagonal logo strip */}
                <div
                  className="bg-white w-full p-5"
                  style={{
                    borderTop: "2px solid red",
                    borderBottom: "2px solid red",
                    clipPath:
                      "polygon(0% 30.54%, 100% 5%, 100% 74.59%, 0% 100%)",
                  }}
                >
                  <img
                    src="Logo.png"
                    alt="logo"
                    className="w-20 mt-2 mx-auto"
                  />
                </div>

                {/* Price display */}
                <p className="text-white text-3xl font-medium mt-6">
                  $<span className="text-[4rem]">{plan.price}</span>
                </p>

                {/* Update price */}
                <div className="flex w-[80%] rounded-lg overflow-hidden border border-[#e45252] mt-2">
                  <input
                    type="number"
                    min="0"
                    placeholder="New price"
                    value={priceInputs[plan._id] ?? ""}
                    onChange={(e) => handlePriceInput(plan._id, e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && updatePrice(plan._id)
                    }
                    className="flex-1 bg-white text-white text-sm px-3 py-1.5 outline-none placeholder:text-gray-500 min-w-0"
                  />
                  <button
                    onClick={() => updatePrice(plan._id)}
                    className="bg-[#e45252] hover:bg-red-600 text-white text-xs font-semibold px-3 transition-colors"
                  >
                    Update
                  </button>
                </div>

                {/* Billing period */}
                <p className="text-[#b2acac] text-sm">
                  {billingLabel(plan.name)}
                </p>

                {/* Toggle */}
                <Toggle
                  enabled={plan.enabled}
                  onToggle={() => togglePlan(plan._id)}
                />

                {/* Select plan */}
                <button className="w-[70%] bg-[#405de6] hover:bg-blue-700 p-2 rounded-lg text-white text-sm transition-colors">
                  Select Plan
                </button>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-[17px] text-center text-[#000000B2] font-semibold mt-10">
            Manage how organizers can boost their profiles. Set prices and
            visibility preferences
          </p>
        </div>
      </div>

      <div className="rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.08)] bg-white p-4 sm:p-5 mt-4 mx-4 sm:mx-8 lg:mx-20 mb-10">
        <p className="text-base sm:text-lg font-semibold mb-6">
          Payment &amp; Confirmation
        </p>

        <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-6">
          {/* Label */}
          <span className="text-sm font-semibold whitespace-nowrap">
            Select Payment Method :
          </span>

          {/* Radio options */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 bg-[#EFE9E9] px-4 py-3 rounded-md w-full lg:w-auto">
            {/* Credit Card */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="credit_card"
                className="accent-black w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-gray-700">Credit Card</span>
            </label>

            {/* PayPal */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                className="accent-black w-4 h-4 cursor-pointer"
              />
              <span className="text-sm text-gray-700">Pay Pal</span>
            </label>
          </div>

          {/* Save button */}
          <button className="w-full sm:w-auto lg:ml-auto bg-[#e45252] hover:bg-red-600 text-white text-sm font-bold px-8 sm:px-10 py-2 rounded-full transition-colors">
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Boost_Event_Visibility;
