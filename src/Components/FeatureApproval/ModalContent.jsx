import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

const AvatarCircle = ({ name }) => (
  <div className="w-20 h-20 rounded-full bg-neutral-700 flex items-center justify-center text-white text-2xl font-bold border-[3px] border-solid border-[#111] shrink-0">
    {name.slice(0, 2).toUpperCase()}
  </div>
);

const Stars = ({ filled = 4, total = 5 }) => (
  <div className="flex justify-center gap-0.5 mb-2">
    {Array.from({ length: total }).map((_, i) => (
      <span
        key={i}
        className={`text-lg ${i < filled ? "text-[#f5a623]" : "text-neutral-600"}`}
      >
        ★
      </span>
    ))}
  </div>
);

const ModalContent = ({ row, onClose, showReject, setShowReject }) => {
  const [reason, setReason] = useState("");

  const handleRejectSubmit = () => {
    setShowReject(false);
    onClose();
  };

  const isEvent = row.type === "Event";
  const isOrganizer = row.type === "Organizer";

  return (
    <div
      className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4 max-w-[90vw] md:max-w-max p-2 z-50 overflow-y-auto max-h-[90vh]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* ── Main Detail Card ── */}
      <div className="relative bg-[#111] rounded-2xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.3)] w-80 shrink-0 border border-solid border-neutral-800">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-neutral-800 hover:bg-neutral-700 border-none text-white text-xs cursor-pointer flex items-center justify-center transition-colors"
        >
          ✕
        </button>

        <div
          className={`h-24 flex items-end justify-center ${isEvent ? "bg-[#1d331d]" : "bg-neutral-800"}`}
        >
          <div className="-mb-10">
            <AvatarCircle name={row.name} />
          </div>
        </div>

        <div className="pt-14 pb-6 px-6 text-center">
          <Stars filled={4} />

          <div className="flex items-center justify-center gap-1.5 mb-2">
            {isEvent && <span className="text-base">🏆</span>}
            <span className="text-white text-[15px] font-bold">{row.name}</span>
            <span className="text-neutral-400 text-xs font-normal">
              ({row.type})
            </span>
          </div>

          {isEvent ? (
            <div className="text-[13px] text-left space-y-1.5 mt-3 border-t border-solid border-neutral-800/60 pt-3">
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Organizer:</span>
                <a
                  href="#"
                  className="text-[#E45252] text-xs font-medium hover:underline"
                  onClick={(e) => e.preventDefault()}
                >
                  View Profile
                </a>
              </div>
              <div className="flex items-center gap-1 text-neutral-400">
                <IoLocationSharp className="shrink-0 text-[#E45252]" />
                <span className="truncate">{row.location}</span>
              </div>
              <p className="text-neutral-300 m-0">
                Date: {row.date} &nbsp;|&nbsp; Time: {row.time}
              </p>
              <p className="text-neutral-300 m-0">
                <strong className="text-white font-medium">
                  {row.availableSlots}
                </strong>{" "}
                Available Slots
              </p>
              <p className="text-neutral-300 m-0">
                <strong className="text-white font-medium">
                  {row.upcomingEvents}
                </strong>{" "}
                Upcoming Events
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-1 mt-3 border-t border-solid border-neutral-800/60 pt-3 text-[13px]">
              <p className="text-neutral-300 m-0">
                Sport Preference:{" "}
                <strong className="text-white font-medium">{row.sport}</strong>
              </p>
              <div className="flex items-center gap-1 text-neutral-400">
                <IoLocationSharp className="text-[#E45252]" /> {row.location}
              </div>
              {isOrganizer && (
                <div className="w-full text-center mt-1 space-y-0.5">
                  <p className="text-neutral-300 m-0">
                    {row.hostedEvents} Hosted Events
                  </p>
                  <p className="text-neutral-300 m-0">
                    {row.upcomingEvents} Upcoming Events
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Accept / Reject CTAs */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl bg-[#E45252] hover:bg-[#cc3e3e] text-white text-[14px] font-bold border-none cursor-pointer transition-colors shadow-sm"
            >
              Accept
            </button>
            <button
              onClick={() => setShowReject((v) => !v)}
              className="flex-1 py-2.5 rounded-xl bg-[#E45252] hover:bg-[#cc3e3e] text-white text-[14px] font-bold border-none cursor-pointer transition-colors shadow-sm"
            >
              Reject
            </button>
          </div>
        </div>
      </div>

      {/* ── Sidebar Rejection Reason Panel ── */}
      {showReject && (
        <div className="bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] p-4 w-80 lg:w-60 border border-solid border-gray-100 animate-in fade-in zoom-in-95 duration-150">
          <p className="text-black text-[14px] font-bold mb-2">
            Rejection Reason
          </p>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Type reason here..."
            className="w-full h-28 border border-solid border-gray-200 rounded-xl p-2.5 text-[13px] text-black resize-none outline-none focus:border-[#E45252] transition-colors box-border"
          />
          <button
            onClick={handleRejectSubmit}
            className="w-full mt-3 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-[13px] font-bold border-none cursor-pointer transition-colors shadow-xs"
          >
            Submit Rejection
          </button>
        </div>
      )}
    </div>
  );
};

export default ModalContent;
