import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

const TimeZone = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="w-full max-w-[1400px] mx-auto bg-[#F5F5F5] box-border font-[Poppins]">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden p-4 sm:p-6">
        {/* Section heading */}
        <p className="text-[14px] sm:text-[15px] font-semibold text-[#000000CC] pb-3 m-0">
          5. Time Zone
        </p>

        {/* ── Mobile View: Compact Switcher Card (Visible only on Mobile) ── */}
        <div className="md:hidden bg-gray-50 p-4 rounded-xl border border-gray-200/60 flex items-center justify-between gap-4 shadow-xs">
          <p className="text-[13px] text-[#000000E5] leading-relaxed m-0 font-medium">
            Allow users to adjust event times based on their local time zone
          </p>
          <div className="flex-shrink-0">
            <ToggleButton enabled={enabled} onToggle={() => setEnabled((p) => !p)} />
          </div>
        </div>

        {/* ── Desktop View: Elegant Table Structure (Hidden on Mobile) ── */}
        <div className="hidden md:block overflow-x-auto w-full rounded-xl border border-gray-100 bg-gray-50/30">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-[#dfdfdf]">
                <th className="py-3 px-5 text-left text-[13px] sm:text-[14px] font-medium text-[#000000CC]">
                  Time Selection
                </th>
                <th className="py-3 px-5 text-right text-[13px] sm:text-[14px] font-medium text-[#000000CC] pr-8">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="hover:bg-gray-50/40 transition-colors">
                {/* Description of what the toggle controls */}
                <td className="py-4 px-5 text-[13px] sm:text-[14px] text-[#000000E5] font-medium">
                  Allow users to adjust event times based on their local time zone
                </td>
                <td className="py-3 px-5 pr-6">
                  {/* Toggle to enable/disable local timezone support */}
                  <div className="flex justify-end">
                    <ToggleButton enabled={enabled} onToggle={() => setEnabled((p) => !p)} />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TimeZone;