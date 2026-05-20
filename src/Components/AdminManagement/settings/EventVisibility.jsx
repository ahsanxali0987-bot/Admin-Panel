import React, { useState } from "react";

/* ── Visibility audience options shared across all dropdowns ── */
const OPTIONS = ["All Users", "Members Only", "Admins Only", "Invite Only"];

/**
 * VisibilityDropdown
 * Custom dropdown that replaces a native <select>.
 * Displays dynamic "Visible to: [Selection] ∨" and reveals options on click.
 */
const VisibilityDropdown = ({ label }) => {
  /* Tracks the currently selected audience option */
  const [selected, setSelected] = useState("All Users");

  /* Controls open/closed state of the dropdown panel */
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4 py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 last:border-none relative bg-white transition-colors hover:bg-gray-50/30">
      {/* Event type label */}
      <span className="text-[13px] sm:text-[14px] font-medium text-[#000000E5]">{label}</span>

      <div className="relative w-full sm:w-auto text-left">
        {/* Dropdown trigger button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-1.5 text-[13px] text-[#000000CC] bg-gray-50 hover:bg-gray-100/80 sm:bg-transparent sm:hover:bg-transparent p-2 sm:p-0 rounded-lg border border-gray-200/50 sm:border-none focus:outline-none transition-all"
        >
          <span className="truncate">
            Visible to: <strong className="text-gray-900 font-semibold">{selected}</strong>
          </span>
          {/* Chevron — rotates 180° when dropdown is open */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${open ? "rotate-180" : ""}`}
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

        {/* ── Dropdown panel — open mechanism with layout boundary safe anchors ── */}
        {open && (
          <>
            {/* Click-outside listener backdrop to auto close */}
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            
            <div className="absolute right-0 mt-1.5 w-full sm:w-44 bg-white border border-[#dfdfdf] rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-50 overflow-hidden divide-y divide-gray-50 animate-in fade-in slide-in-from-top-1 duration-150">
              {OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-[13px] hover:bg-[#fafafa] transition-colors ${
                    selected === option
                      ? "text-[#e45252] font-semibold bg-red-50/40"
                      : "text-[#000000E5]"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const EventVisibility = () => (
  <div className="w-full max-w-[1400px] mx-auto bg-[#F5F5F5] box-border font-[Poppins]">
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
      rel="stylesheet"
    />

    <div className="bg-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden p-4 sm:p-6">
      {/* Section heading */}
      <div className="pb-3">
        <p className="text-[14px] sm:text-[15px] font-semibold text-[#000000CC] m-0">
          3. Event Visibility
        </p>
      </div>

      {/* Dropdown lists container block */}
      <div className="rounded-xl border border-gray-100 overflow-visible divide-y divide-gray-100">
        <VisibilityDropdown label="All Event" />
        <VisibilityDropdown label="Organizer Event" />
        <VisibilityDropdown label="Player Event" />
      </div>
    </div>
  </div>
);

export default EventVisibility;