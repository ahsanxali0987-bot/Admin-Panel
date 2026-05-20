import React from "react";

const DetailRow = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4 py-1.5 sm:py-2 border-b border-gray-50 last:border-none">
    {/* Minimum width label ensures clean alignment on desktops, while stacked layout handles mobile screen tracking */}
    <span className="text-[13px] sm:text-[14px] font-semibold min-w-[200px] text-gray-900">
      {label}
    </span>
    <span className="text-[13px] sm:text-[14px] font-normal text-gray-700 breakdown-words">
      {value || "N/A"}
    </span>
  </div>
);

export default DetailRow;
