import React from "react";

/* Data */
const alerts = [
  {
    type: "Critical Alert",
    message: "Payment gateway down for 10 minutes",
    time: "Time: 09:45 AM",
  },
  {
    type: "Warning",
    message: "User B reported inappropriate content",
    time: "Time: 09:30 AM",
  },
  {
    type: "User Report",
    message: "Organizer C reported a violation",
    time: "Time: 09:15 AM",
  },
];

const Notifications = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-5 border-b border-[#dfdfdf] md:border-b-0">
        {/* Heading */}
        <p className="text-[#000000E5] font-semibold text-[11px] md:text-[13px] lg:text-[15px] xl:text-[17px] flex items-center gap-3">
          Alerts & Notifications
          <span className="text-[18px] text-[#e45252] font-semibold">3</span>
        </p>

        {/* Button */}
        <button className="text-[#e45252] border border-[#e45252] rounded-full px-4 py-1.5 font-medium text-sm hover:bg-[#e45252]/5 transition-colors">
          View All
        </button>
      </div>

      {/* Mobile Stack View */}
      <div className="block md:hidden division-y division-[#dfdfdf]">
        {alerts.map((item, index) => (
          <div
            key={index}
            className="p-5 border-t border-[#dfdfdf] first:border-t-0 flex flex-col gap-3"
          >
            <div className="flex justify-between items-start gap-2">
              <span
                className={`text-[13px] font-bold uppercase tracking-wider ${
                  item.type.includes("Critical")
                    ? "text-[#e45252]"
                    : "text-[#00000099]"
                }`}
              >
                {item.type}
              </span>
              <span className="text-[13px] text-[#00000099] whitespace-nowrap">
                {item.time}
              </span>
            </div>

            <p className="text-[#000000E5] font-medium text-[13px] lg:text-[14px] xl:text-[15px]">
              {item.message}
            </p>

            <button className="w-full mt-1 text-white bg-[#e45252] rounded-full py-2.5 px-6 font-medium text-sm text-center active:bg-[#c93d3d] transition-colors">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <table className="hidden md:table w-full border-collapse">
        <tbody>
          {alerts.map((item, index) => (
            <tr
              key={index}
              className="bg-white hover:bg-gray-50/50 transition-colors"
            >
              {/* Alert type */}
              <td className="py-4 px-5 border-t border-[#dfdfdf] text-[#000000E5] font-medium text-[13px] lg:text-[14px] xl:text-[13px]w-40">
                {item.type}
              </td>

              {/* Issues */}
              <td className="py-4 px-5 border-t border-[#dfdfdf] text-[#000000E5] font-medium text-[13px] lg:text-[14px] xl:text-[15px]">
                {item.message}
              </td>

              {/* Time */}
              <td className="py-4 px-5 border-t border-[#dfdfdf] text-[#000000E5] font-medium text-[13px] lg:text-[14px] xl:text-[15px] whitespace-nowrap">
                {item.time}
              </td>

              {/* Button */}
              <td className="py-4 px-5 border-t border-[#dfdfdf] text-right">
                <button className="text-white bg-[#e45252] rounded-full py-2 px-4 md:px-5 lg:px-6 font-medium text-sm hover:bg-[#c93d3d] transition-colors">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Notifications;
