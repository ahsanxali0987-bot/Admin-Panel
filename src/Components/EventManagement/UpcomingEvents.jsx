import React from "react";

const UpcomingEventsData = [
  {
    title: "Sports Run 2024",
    date: "Aug 15, 2024, 10:00 AM",
    location: "Central Park, NYC",
    registrationstatus: "Open (200/300)",
    paymentstatus: "Pending",
  },
  {
    title: "Spring Gala 2024",
    date: "Aug 15, 2024, 10:00 AM",
    location: "Central Park, NYC",
    totalrevenue: "", // Note: Keeping your original structure intact
  },
  {
    title: "Sports Conference 2024",
    date: "Aug 15, 2024, 10:00 AM",
    location: "Central Park, NYC",
    registrationstatus: "Open (200/300)",
    paymentstatus: "Unpaid ($0)",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden w-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-5 border-b border-[#e5e5e5]">
        {/* Heading */}
        <h2 className="text-[16px] sm:text-[17px] font-semibold text-[#000000E5]">
          Upcoming Events
        </h2>

        {/* Button */}
        <button className="text-[#e45252] border border-[#e45252] rounded-full px-4 sm:px-5 py-1.5 font-medium text-xs sm:text-sm hover:bg-[#e45252]/5 transition-colors">
          View All
        </button>
      </div>

      {/* --- MOBILE MODULAR STACK VIEW (md:hidden) --- */}
      <div className="block md:hidden divide-y divide-[#dfdfdf]">
        {UpcomingEventsData.map((item, index) => (
          <div key={index} className="p-4 flex flex-col gap-2.5 bg-white">
            <div className="flex justify-between items-start">
              <h4 className="text-[14px] font-semibold text-black leading-tight">
                {item.title}
              </h4>
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-1 gap-1 text-[12px] text-gray-600">
              <p>
                <span className="text-gray-400 font-medium">Date:</span>{" "}
                {item.date}
              </p>
              <p>
                <span className="text-gray-400 font-medium">Location:</span>{" "}
                {item.location}
              </p>
            </div>

            {/* Status Badges Row */}
            <div className="grid grid-cols-2 gap-2 text-[11px] bg-gray-50 p-2 rounded-lg border border-gray-100">
              <div>
                <p className="text-gray-400 font-medium text-[9px] uppercase tracking-wider">
                  Registration
                </p>
                <p className="text-gray-700 font-medium mt-0.5">
                  {item.registrationstatus || "---"}
                </p>
              </div>
              <div>
                <p className="text-gray-400 font-medium text-[9px] uppercase tracking-wider text-right">
                  Payment
                </p>
                <p
                  className={`font-medium mt-0.5 text-right ${item.paymentstatus === "Pending" ? "text-amber-600" : "text-gray-700"}`}
                >
                  {item.paymentstatus || "---"}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-end mt-1 pt-1">
              <button className="bg-[#e45252] text-white rounded-full py-1.5 px-4 text-xs font-medium active:bg-[#c93d3d]">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- DESKTOP TABLE VIEW (md:table) --- */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table body */}
          <thead>
            {/* Table heading */}
            <tr className="bg-gray-50/50">
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Event Title
              </th>
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Date & Time
              </th>
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Location
              </th>
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Registration Status
              </th>
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Payment Status
              </th>
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-[#dfdfdf]/60 border-t border-[#dfdfdf]">
            {UpcomingEventsData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50/30 transition-colors">
                {/* Title */}
                <td className="py-4 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5]">
                  {item.title}
                </td>

                {/* Date */}
                <td className="py-4 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5] whitespace-nowrap">
                  {item.date}
                </td>

                {/* Location */}
                <td className="py-4 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5]">
                  {item.location}
                </td>

                {/* Registration Status */}
                <td className="py-4 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5]">
                  {item.registrationstatus || "---"}
                </td>

                {/* Payment Status */}
                <td className="py-4 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5]">
                  <span
                    className={
                      item.paymentstatus === "Pending"
                        ? "text-amber-600 font-medium"
                        : ""  
                    }
                  >
                    {item.paymentstatus || "---"}
                  </span>
                </td>

                {/* Button */}
                <td className="py-3 px-5 whitespace-nowrap">
                  <button className="bg-[#e45252] text-white rounded-full py-1.5 px-5 text-xs lg:text-sm font-medium hover:bg-[#c93d3d] transition-colors">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingEvents;
