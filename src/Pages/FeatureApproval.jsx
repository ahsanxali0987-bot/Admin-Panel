import React, { useState } from "react";
import { IoFilterOutline, IoLocationSharp } from "react-icons/io5";

const FeatureApprovalData = [
  {
    id: 1,
    name: "John Doe",
    type: "Organizer",
    duration: "30 Days",
    amount: "$20",
    status: "Pending",
    sport: "Football",
    location: "Abu Dhabi, UAE",
    hostedEvents: "100+",
    upcomingEvents: "20+",
  },
  {
    id: 2,
    name: "John Doe",
    type: "Player",
    duration: "30 Days",
    amount: "$20",
    status: "Pending",
    sport: "Basketball",
    location: "Dubai, UAE",
  },
  {
    id: 3,
    name: "John Doe",
    type: "Organizer",
    duration: "30 Days",
    amount: "$20",
    status: "Pending",
    sport: "Tennis",
    location: "Sharjah, UAE",
    hostedEvents: "100+",
    upcomingEvents: "20+",
  },
  {
    id: 4,
    name: "Foot Ball",
    type: "Event",
    duration: "30 Days",
    amount: "$20",
    status: "Pending",
    sport: "Football",
    location: "Abu Dhabi, UAE",
    organizerName: "Organizer Name",
    date: "March 24/25",
    time: "10:00 AM",
    availableSlots: "100+",
    upcomingEvents: "20+",
  },
  {
    id: 5,
    name: "John Doe",
    type: "Organizer",
    duration: "30 Days",
    amount: "$20",
    status: "Pending",
    sport: "Cricket",
    location: "Lahore, PK",
    hostedEvents: "100+",
    upcomingEvents: "20+",
  },
  {
    id: 6,
    name: "John Doe",
    type: "Organizer",
    duration: "30 Days",
    amount: "$20",
    status: "Pending",
    sport: "Hockey",
    location: "Karachi, PK",
    hostedEvents: "100+",
    upcomingEvents: "20+",
  },
  {
    id: 7,
    name: "John Doe",
    type: "Organizer",
    duration: "30 Days",
    amount: "$20",
    status: "Pending",
    sport: "Football",
    location: "Islamabad, PK",
    hostedEvents: "100+",
    upcomingEvents: "20+",
  },
  {
    id: 8,
    name: "John Doe",
    type: "Organizer",
    duration: "30 Days",
    amount: "$20",
    status: "Pending",
    sport: "Volleyball",
    location: "Rawalpindi, PK",
    hostedEvents: "100+",
    upcomingEvents: "20+",
  },
  {
    id: 9,
    name: "John Doe",
    type: "Organizer",
    duration: "30 Days",
    amount: "$20",
    status: "Pending",
    sport: "Swimming",
    location: "Riyadh, SA",
    hostedEvents: "100+",
    upcomingEvents: "20+",
  },
  {
    id: 10,
    name: "John Doe",
    type: "Organizer",
    duration: "30 Days",
    amount: "$20",
    status: "Pending",
    sport: "Rugby",
    location: "London, UK",
    hostedEvents: "100+",
    upcomingEvents: "20+",
  },
];

/* ─── Avatar placeholder ─── */
const AvatarCircle = ({ name }) => (
  <div className="w-20 h-20 rounded-full bg-[#555] flex items-center justify-center text-white text-2xl font-semibold border-[3px] border-[#1a1a1a] shrink-0 font-[Poppins]">
    {name.slice(0, 2).toUpperCase()}
  </div>
);

/* ─── Star Rating ─── */
const Stars = ({ filled = 4, total = 5 }) => (
  <div className="flex justify-center gap-0.5 mb-2">
    {Array.from({ length: total }).map((_, i) => (
      <span
        key={i}
        className={`text-lg ${i < filled ? "text-[#f5a623]" : "text-[#555]"}`}
      >
        ★
      </span>
    ))}
  </div>
);

/* ─── Modal content ─── */
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
      className="flex flex-col items-center gap-3"
      onClick={(e) => e.stopPropagation()}
    >
      {/* ── Main Card ── */}
      <div className="relative bg-[#111] rounded-2xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.08)] w-80">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-[#444] border-none text-white text-[13px] cursor-pointer flex items-center justify-center"
        >
          ✕
        </button>

        {/* Avatar area */}
        <div
          className={`h-24 flex items-end justify-center ${isEvent ? "bg-[#1a2e1a]" : "bg-[#222]"}`}
        >
          <div className="-mb-10">
            <AvatarCircle name={row.name} />
          </div>
        </div>

        {/* Body */}
        <div className="pt-14 pb-6 px-6 text-center">
          <Stars filled={4} />

          {/* Name + type */}
          <div className="flex items-center justify-center gap-1.5 mb-1.5">
            {isEvent && <span className="text-base">🏆</span>}
            <span className="text-white text-[15px] font-bold font-[Poppins]">
              {row.name}
            </span>
            <span className="text-[#aaa] text-xs font-normal font-[Poppins]">
              ({row.type})
            </span>
          </div>

          {/* Type-specific info */}
          {isEvent ? (
            <div className="text-[13px] font-[Poppins] text-left space-y-1 mt-2">
              <div className="flex items-center gap-2">
                <span className="text-[#aaa]">Organizer Name</span>
                <a
                  href="#"
                  className="text-[#E45252] text-[12px] no-underline"
                  onClick={(e) => e.preventDefault()}
                >
                  View Profile
                </a>
              </div>
              <div className="flex items-center gap-1 text-[#aaa]">
                <IoLocationSharp className="shrink-0" />
                <span>{row.location}</span>
              </div>
              <p className="text-[#ccc] m-0">
                Date: {row.date}&nbsp;&nbsp;Time: {row.time}
              </p>
              <p className="text-[#ccc] m-0">
                {row.availableSlots} Available Slot
              </p>
              <p className="text-[#ccc] m-0">
                {row.upcomingEvents} Upcoming Events
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-1 mt-2">
              <p className="text-[#ccc] text-[13px] font-[Poppins] m-0">
                Sport Preference: {row.sport}
              </p>
              <div className="flex items-center gap-1 text-[#aaa] text-[13px] font-[Poppins]">
                <IoLocationSharp />
                {row.location}
              </div>
              {isOrganizer && (
                <>
                  <p className="text-[#ccc] text-[13px] font-[Poppins] mt-1 m-0">
                    {row.hostedEvents} Hosted Events
                  </p>
                  <p className="text-[#ccc] text-[13px] font-[Poppins] m-0">
                    {row.upcomingEvents} Upcoming Events
                  </p>
                </>
              )}
            </div>
          )}

          {/* Accept / Reject */}
          <div className="flex gap-4 mt-5">
            <button
              onClick={onClose}
              className="flex-1 py-2 rounded-lg bg-[#E45252] text-white text-[14px] font-semibold font-[Poppins] border-none cursor-pointer"
            >
              Accept
            </button>
            <button
              onClick={() => setShowReject((v) => !v)}
              className="flex-1 py-2 rounded-lg bg-[#E45252] text-white text-[14px] font-semibold font-[Poppins] border-none cursor-pointer"
            >
              Reject
            </button>
          </div>
        </div>
      </div>

      {/* ── Rejection reason panel ── */}
      {showReject && (
        <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.08)] p-4 w-56">
          <p className="text-black text-[14px] font-semibold font-[Poppins] mb-2">
            Reason
          </p>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Type here..."
            className="w-full h-24 border border-[#e2e2e2] rounded-lg p-2 text-[13px] text-black font-[Poppins] resize-none outline-none focus:border-[#E45252]"
          />
          <button
            onClick={handleRejectSubmit}
            className="w-full mt-2.5 py-2 rounded-lg bg-[#4CAF50] text-white text-[13px] font-semibold font-[Poppins] border-none cursor-pointer"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

/* ─── Main Component ─── */
const FeatureApproval = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Sort By");
  const [selected, setSelected] = useState(null);
  const [showReject, setShowReject] = useState(false);

  const closeAll = () => {
    setSelected(null);
    setShowReject(false);
  };

  return (
    <div className="min-h-screen bg-white font-[Poppins] relative">
      {/* ── Tabs ── */}
      <div className="flex items-center border-b border-[#e5e5e5] mb-5">
        <button className="px-5 py-2.5 text-[15px] font-semibold text-black border-b-2 border-[#E45252] -mb-px">
          Pending Requests
        </button>
        <button className="px-5 py-2.5 text-[15px] font-semibold text-black">
          Approved Features
        </button>
        <button className="px-5 py-2.5 text-[15px] font-semibold text-black">
          Rejected Requests
        </button>

        {/* Sort By */}
        <div className="relative ml-auto pr-5">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center gap-1 border border-black rounded-lg px-3 py-1.5 text-[13px] font-medium text-black"
          >
            <IoFilterOutline /> {sortBy}
          </button>
          {sortOpen && (
            <div className="absolute right-5 top-full mt-1 w-36 bg-white border border-[#e2e2e2] rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.08)] z-10 px-3 py-2">
              {["Newest", "Oldest", "Highest Price", "Expiring Soon"].map(
                (opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setSortBy(opt);
                      setSortOpen(false);
                    }}
                    className={`block w-full text-left py-1.5 text-sm underline ${
                      sortBy === opt
                        ? "text-[#E45252] font-semibold"
                        : "text-black"
                    }`}
                  >
                    {opt}
                  </button>
                ),
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Table ── */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              {[
                "User / Event Name",
                "Type",
                "Boost Duration",
                "Amount Paid",
                "Status",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="text-left px-3.5 py-2.5 text-[15px] font-semibold text-black font-[Poppins]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {FeatureApprovalData.map((row) => (
              <tr key={row.id}>
                <td className="px-3.5 py-3 text-black font-semibold font-[Poppins] text-[14px]">
                  {row.name}
                </td>
                <td className="px-3.5 py-3 text-black font-[Poppins] text-[14px]">
                  {row.type}
                </td>
                <td className="px-3.5 py-3 text-black font-[Poppins] text-[14px]">
                  {row.duration}
                </td>
                <td className="px-3.5 py-3 text-black font-[Poppins] text-[14px]">
                  {row.amount}
                </td>
                <td className="px-3.5 py-3 text-black font-[Poppins] text-[14px]">
                  {row.status}
                </td>
                <td className="px-3.5 py-2 w-[265px] mx-auto">
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      onClick={() => {
                        setSelected(row);
                        setShowReject(false);
                      }}
                      className="px-5 py-1.5 text-xs rounded-full text-white bg-[#E45252] cursor-pointer border-none"
                    >
                      View
                    </button>
                    <button className="px-5 py-1.5 text-xs rounded-full text-white bg-[#E45252] cursor-pointer border-none">
                      Accept
                    </button>
                    <button className="px-5 py-1.5 text-xs rounded-full text-white bg-[#E45252] cursor-pointer border-none">
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Modal overlay ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55"
          onClick={closeAll}
        >
          <ModalContent
            row={selected}
            onClose={closeAll}
            showReject={showReject}
            setShowReject={setShowReject}
          />
        </div>
      )}
    </div>
  );
};

export default FeatureApproval;
