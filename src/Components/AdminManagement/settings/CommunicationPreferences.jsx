import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

/* ── Initial communication preference entries ── */
const initialData = [
  { id: "1", communicationtype: "Email Notification", prefrance: "Registration Updates", enabled: true },
  { id: "2", communicationtype: "SMS Alerts", prefrance: "Payment Confirmation", enabled: true },
  { id: "3", communicationtype: "Push Notifications", prefrance: "Event Reminder", enabled: true },
];

const CommunicationPreferences = () => {
  /* Local state — manages enabled/disabled state of each communication channel */
  const [commPrefs, setCommPrefs] = useState(initialData);

  /* Flips the enabled flag for the communication channel matching the given id */
  const toggleComm = (id) =>
    setCommPrefs((prev) =>
      prev.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r))
    );

  return (
    <div className="rounded-lg overflow-hidden px-5 pt-3 pb-2">
      {/* Section heading */}
      <p className="text-[14px] font-semibold text-[#000000CC] pb-2">4. Communication Preferences</p>

      {/* ── Communication channels table ── */}
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr>
            <th className="py-1 px-4 text-left text-[13px] font-medium text-[#000000CC]">Communication Type</th>
            <th className="py-1 px-4 text-left text-[13px] font-medium text-[#000000CC]">Preference</th>
            <th className="py-1 px-4 text-right text-[13px] font-medium text-[#000000CC]">Action</th>
          </tr>
        </thead>
        <tbody>
          {commPrefs.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 text-[13px] text-[#000000E5]">{item.communicationtype}</td>
              <td className="py-2 px-4 text-[13px] text-[#000000E5]">{item.prefrance}</td>
              <td className="py-2 px-4">
                {/* Toggle to enable/disable this notification channel */}
                <div className="flex justify-end">
                  <ToggleButton enabled={item.enabled} onToggle={() => toggleComm(item.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommunicationPreferences;