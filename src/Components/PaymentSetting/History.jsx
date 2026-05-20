import React from "react";

const HistoryData = [
  {
    id: "301",
    date: "Dec 15, 2024",
    amount: "$100",
    status: "Paid",
    eventname: "Sports Run 2024",
    user: "User A",
    actionbutton: "View",
  },
  {
    id: "301",
    date: "Dec 15, 2024",
    amount: "$150",
    status: "Pending",
    eventname: "Winter Tournament 2024",
    user: "User A",
    actionbutton: "Adjust",
  },
  {
    id: "301",
    date: "Dec 15, 2024",
    amount: "$200",
    status: "Failed",
    eventname: "Spring Gala 2024",
    user: "User A",
    actionbutton: "Refund",
  },
];

const History = () => {
  return (
    <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
      <div className="text-[16px] sm:text-[18px] font-semibold text-[#000000E5] border-b border-[#dfdfdf] p-4">
        Payment History
      </div>

      {/* Mobile Stacked Card View (Hidden on Tablet/Desktop) */}
      <div className="block md:hidden divide-y divide-gray-100">
        {HistoryData.map((activity, index) => (
          <div key={index} className="p-4 bg-white space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono font-semibold text-gray-400">
                ID: #{activity.id}
              </span>
              <span
                className={`px-2.5 py-0.5 rounded text-xs font-medium ${
                  activity.status === "Paid"
                    ? "text-green-700 bg-green-50"
                    : activity.status === "Pending"
                      ? "text-amber-700 bg-amber-50"
                      : "text-red-700 bg-red-50"
                }`}
              >
                {activity.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-y-1.5 text-[13px]">
              <div className="text-gray-400">Event:</div>
              <div className="text-gray-900 font-medium text-right truncate">
                {activity.eventname}
              </div>
              <div className="text-gray-400">User:</div>
              <div className="text-gray-900 text-right">{activity.user}</div>
              <div className="text-gray-400">Date:</div>
              <div className="text-gray-900 text-right">{activity.date}</div>
              <div className="text-gray-400 font-semibold">Amount:</div>
              <div className="text-gray-900 font-bold text-right text-sm">
                {activity.amount}
              </div>
            </div>
            <button className="w-full bg-[#e45252] text-white rounded-full py-2 text-xs font-medium hover:bg-[#d04444] shadow-sm mt-1">
              {activity.actionbutton}
            </button>
          </div>
        ))}
      </div>

      {/* Desktop Desktop View (Hidden on Mobile) */}
      <div className="hidden md:block overflow-x-auto w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[#dfdfdf] bg-gray-50/50">
              {[
                "Transaction ID",
                "Date",
                "Amount",
                "Payment Status",
                "Event Name",
                "User",
                "Action",
              ].map((heading) => (
                <th
                  key={heading}
                  className="py-3 px-5 text-left text-[14px] sm:text-[15px] font-medium text-[#000000CC] whitespace-nowrap"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {HistoryData.map((activity, index) => (
              <tr key={index} className="hover:bg-gray-50/40 transition-colors">
                <td className="py-3.5 px-5 text-[13px] text-[#000000E5] font-mono">
                  {activity.id}
                </td>
                <td className="py-3.5 px-5 text-[13px] text-[#000000E5] whitespace-nowrap">
                  {activity.date}
                </td>
                <td className="py-3.5 px-5 text-[13px] text-[#000000E5] font-medium">
                  {activity.amount}
                </td>
                <td className="py-3.5 px-5 text-[13px] text-[#000000E5]">
                  <span
                    className={`px-2.5 py-0.5 rounded text-xs font-medium 
                    `}
                  >
                    {activity.status}
                  </span>
                </td>
                <td className="py-3.5 px-5 text-[13px] text-[#000000E5] max-w-[180px] truncate">
                  {activity.eventname}
                </td>
                <td className="py-3.5 px-5 text-[13px] text-[#000000E5]">
                  {activity.user}
                </td>
                <td className="py-2 px-5">
                  <button className="bg-[#e45252] text-white rounded-full py-1.5 px-4 w-full max-w-[120px] text-xs font-medium hover:bg-[#d04444] shadow-sm">
                    {activity.actionbutton}
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

export default History;
