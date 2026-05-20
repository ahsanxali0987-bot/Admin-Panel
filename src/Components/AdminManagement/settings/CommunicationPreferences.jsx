import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

/* ── Initial communication preference entries ── */
const initialData = [
  {
    id: "1",
    communicationtype: "Email Notification",
    prefrance: "Registration Updates",
    enabled: true,
  },
  {
    id: "2",
    communicationtype: "SMS Alerts",
    prefrance: "Payment Confirmation",
    enabled: true,
  },
  {
    id: "3",
    communicationtype: "Push Notifications",
    prefrance: "Event Reminder",
    enabled: true,
  },
];

const CommunicationPreferences = () => {
  /* Local state — manages enabled/disabled state of each communication channel */
  const [commPrefs, setCommPrefs] = useState(initialData);

  /* Flips the enabled flag for the communication channel matching the given id */
  const toggleComm = (id) =>
    setCommPrefs((prev) =>
      prev.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r)),
    );

  return (
    <div className="w-full max-w-[1400px] mx-auto bg-[#F5F5F5] box-border font-[Poppins]">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden p-4 sm:p-6">
        {/* Section heading */}
        <p className="text-[14px] sm:text-[15px] font-semibold text-[#000000CC] pb-3 m-0">
          4. Communication Preferences
        </p>

        {/* ── Mobile Responsive Stack View (Hidden on Desktop) ── */}
        <div className="block md:hidden space-y-3">
          {commPrefs.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 p-4 rounded-xl border border-gray-200/60 flex items-center justify-between gap-4 shadow-xs"
            >
              <div className="space-y-0.5">
                <span className="text-[14px] font-semibold text-gray-900 block">
                  {item.communicationtype}
                </span>
                <span className="text-[12px] text-gray-500 block">
                  {item.prefrance}
                </span>
              </div>
              <div className="flex-shrink-0">
                <ToggleButton
                  enabled={item.enabled}
                  onToggle={() => toggleComm(item.id)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ── Desktop Table View (Hidden on Mobile) ── */}
        <div className="hidden md:block overflow-x-auto w-full rounded-xl border border-gray-100 bg-gray-50/30">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-[#dfdfdf]">
                {["Communication Type", "Preference", "Action"].map(
                  (heading) => (
                    <th
                      key={heading}
                      className={`py-3 px-5 text-left text-[13px] sm:text-[14px] font-medium text-[#000000CC] ${heading === "Action" ? "text-right pr-8" : ""}`}
                    >
                      {heading}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {commPrefs.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-50/40 transition-colors"
                >
                  <td className="py-3.5 px-5 text-[13px] sm:text-[14px] text-[#000000E5] font-medium">
                    {item.communicationtype}
                  </td>
                  <td className="py-3.5 px-5 text-[13px] sm:text-[14px] text-gray-600">
                    {item.prefrance}
                  </td>
                  <td className="py-2 px-5 pr-6">
                    <div className="flex justify-end">
                      <ToggleButton
                        enabled={item.enabled}
                        onToggle={() => toggleComm(item.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommunicationPreferences;
