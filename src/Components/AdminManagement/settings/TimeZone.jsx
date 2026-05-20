import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

const TimeZone = () => {
  /* Local state — tracks whether local timezone adjustment is enabled */
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="rounded-lg overflow-hidden px-5 pt-3 pb-8">
      {/* Section heading */}
      <p className="text-[14px] font-semibold text-[#000000CC] pb-2">5. Time Zone</p>

      {/* ── Timezone setting table ── */}
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr>
            <th className="py-1 px-4 text-left text-[13px] font-medium text-[#000000CC]">Time Selection</th>
            <th className="py-1 px-4 text-right text-[13px] font-medium text-[#000000CC]">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Description of what the toggle controls */}
            <td className="py-2 px-4 text-[13px] text-[#000000E5]">
              Allow users to adjust event times based on their local time zone
            </td>
            <td className="py-2 px-4">
              {/* Toggle to enable/disable local timezone support */}
              <div className="flex justify-end">
                <ToggleButton enabled={enabled} onToggle={() => setEnabled((p) => !p)} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TimeZone;