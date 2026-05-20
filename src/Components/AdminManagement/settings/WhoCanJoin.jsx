import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

/* ── Initial eligibility rules ── */
const initialData = [
  { id: 1, ruleType: "Age", rule: "Should be 18+", enabled: true },
  { id: 2, ruleType: "Skill Level", rule: "Expert", enabled: true },
];

const WhoCanJoin = () => {
  /* Local state — manages the list of join rules and their enabled states */
  const [rules, setRules] = useState(initialData);

  /* Flips the enabled flag for the rule matching the given id */
  const toggleRule = (id) =>
    setRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r)),
    );

  return (
    <div className="rounded-lg overflow-hidden px-5 pt-3 pb-2">
      {/* Section heading */}
      <p className="text-[14px] font-semibold text-[#000000CC] pb-2">
        2. Who Can Join
      </p>

      {/* ── Rules table ── */}
      <table className="w-full border-collapse bg-white">
        <thead>
          <tr>
            <th className="py-1 px-4 text-left text-[13px] font-medium text-[#000000CC]">
              Rule Type
            </th>
            <th className="py-1 px-4 text-left text-[13px] font-medium text-[#000000CC]">
              Rule
            </th>
            <th className="py-1 px-4 text-right text-[13px] font-medium text-[#000000CC]">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {rules.map((rule) => (
            <tr key={rule.id}>
              <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                {rule.ruleType}
              </td>
              <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                {rule.rule}
              </td>
              <td className="py-2 px-4">
                {/* Toggle to enable/disable this rule */}
                <div className="flex justify-end">
                  <ToggleButton
                    enabled={rule.enabled}
                    onToggle={() => toggleRule(rule.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WhoCanJoin;
