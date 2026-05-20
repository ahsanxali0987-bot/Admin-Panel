import React from "react";

const SettingsCard = ({ title, children, subtitle, noPadding = false }) => (
  <div className="mb-6 sm:mb-8 last:mb-0">
    {/* Dynamic text title scales from mobile to widescreen PC */}
    <h3 className="text-[15px] sm:text-[16px] md:text-[17px] xl:text-[18px] font-bold text-black mb-3 sm:mb-4">
      {title}
    </h3>
    <div
      className={`bg-white border border-gray-100 rounded-xl shadow-[0px_2px_10px_rgba(0,0,0,0.03)] ${
        noPadding ? "" : "p-4 sm:p-5 md:p-6 lg:p-7"
      }`}
    >
      {subtitle && (
        <p className="text-[13px] sm:text-[14px] font-bold text-black mb-3 sm:mb-4">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  </div>
);

export default SettingsCard;
