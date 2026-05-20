import React from "react";

const ToggleButton = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative inline-flex items-center w-14 h-7 rounded-full transition-colors duration-200 focus:outline-none ${
      enabled ? "bg-[#25D422]" : "bg-gray-300"
    }`}
  >
    {/* ON / OFF label — shifts left or right based on state */}
    <div
      className={`text-white text-[10px] font-medium ${enabled ? "pl-1" : "pl-8"}`}
    >
      {enabled ? "ON" : "OFF"}
    </div>

    {/* Sliding white knob */}
    <span
      className={`absolute left-1 inline-flex items-center justify-center w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
        enabled ? "translate-x-7" : "translate-x-0"
      }`}
    />
  </button>
);

export default ToggleButton;
