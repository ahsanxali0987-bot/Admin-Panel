import React from "react";
import SaveBtnSmall from "./SaveBtnSmall";

const InputField = ({ label, value, onChange }) => (
  <div className="mb-4 last:mb-0 w-full">
    <p className="text-[13px] sm:text-[14px] font-semibold text-black mb-1.5 sm:mb-2">
      {label}
    </p>
    <div className="flex gap-2 sm:gap-3 items-center">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 h-[38px] sm:h-[42px] border border-[#E0E0E0] rounded-lg px-3 sm:px-4 text-[13px] sm:text-[14px] text-black outline-none focus:border-[#1CC800] bg-white shadow-inner transition-colors"
      />
      <SaveBtnSmall />
    </div>
  </div>
);

export default InputField;
