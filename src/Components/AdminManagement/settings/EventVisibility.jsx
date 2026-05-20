import React, { useState } from "react";

/* ── Visibility audience options shared across all dropdowns ── */
const OPTIONS = ["All Users", "Members Only", "Admins Only", "Invite Only"];

/**
 * VisibilityDropdown
 * Custom dropdown that replaces a native <select>.
 * Displays "Visible to ∨" and reveals options on click.
 * Props:
 *   - label (string): event type label shown on the left (e.g. "All Event")
 */
const VisibilityDropdown = ({ label }) => {
  /* Tracks the currently selected audience option */
  const [selected, setSelected] = useState("All Users");

  /* Controls open/closed state of the dropdown panel */
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4 py-2 flex items-center justify-between relative">
      {/* Event type label */}
      <span className="text-[13px] text-[#000000E5]">{label}</span>

      <div className="relative">
        {/* Dropdown trigger button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-1 text-[13px] text-[#000000CC] focus:outline-none"
        >
          Visible to
          {/* Chevron — rotates 180° when dropdown is open */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {/* ── Dropdown panel — only rendered when open ── */}
        {open && (
          <div className="absolute right-0 mt-1 w-36 bg-white border border-[#dfdfdf] rounded-md shadow-[0_0_10px_rgba(0,0,0,0.08)] z-10 overflow-hidden">
            {OPTIONS.map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-[13px] hover:bg-[#fafafa] transition-colors ${
                  selected === option
                    ? "text-[#e45252] font-semibold"
                    : "text-[#000000E5]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const EventVisibility = () => (
  <div className="rounded-lg overflow-hidden px-5 pb-3">
    {/* Section heading */}
    <div className="pt-3 pb-2">
      <p className="text-[14px] font-semibold text-[#000000CC] pb-2">
        3. Event Visibility
      </p>
    </div>

    {/* ── One dropdown row per event type ── */}
    <div className="bg-white flex flex-col gap-1 py-1">
      <VisibilityDropdown label="All Event" />
      <VisibilityDropdown label="Organizer Event" />
      <VisibilityDropdown label="Player Event" />
    </div>
  </div>
);

export default EventVisibility;
