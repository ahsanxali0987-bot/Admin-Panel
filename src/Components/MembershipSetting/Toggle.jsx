import React from "react";

const Toggle = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative inline-flex items-center w-[48px] sm:w-[52px] h-[24px] sm:h-[26px] rounded-full transition-colors duration-200 border-none cursor-pointer flex-shrink-0 focus:outline-none ${
      enabled ? "bg-[#1CC800]" : "bg-gray-200"
    }`}
  >
    {enabled && (
      <span className="absolute left-[6px] text-white text-[8px] sm:text-[9px] font-semibold tracking-wide select-none">
        ON
      </span>
    )}
    <span
      className={`absolute top-[2px] sm:top-[3px] w-[20px] h-[20px] bg-white rounded-full shadow transition-all duration-200 ${
        enabled ? "left-[25px] sm:left-[28px]" : "left-[3px]"
      }`}
    />
  </button>
);

export default Toggle;
