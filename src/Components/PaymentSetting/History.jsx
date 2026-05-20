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
    <div className="bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.08)]">
      {/* Heading */}
      <div className="text-[18px] font-semibold text-[#000000E5] border-b border-[#dfdfdf] p-4">
        Payment History
      </div>
      {/* Table */}
      <table className="w-full border-collapse">
        {/* Table body */}
        <thead>
          {/* Table heading */}
          <tr className="border-t border-[#dfdfdf]">
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Transaction ID
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Date
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Amount
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Payment Status
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Event Name
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              User
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Action
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {HistoryData.map((activity, index) => (
            <tr key={index}>
              {/* Activity Type */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {activity.id}
              </td>

              {/* Description */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {activity.date}
              </td>

              {/* User/Details */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {activity.amount}
              </td>

              {/* 	Time/Date */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5] whitespace-nowrap">
                {activity.status}
              </td>

              {/* 	Time/Date */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5] whitespace-nowrap">
                {activity.eventname}
              </td>

              {/* 	Time/Date */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5] whitespace-nowrap">
                {activity.user}
              </td>

              {/* Button */}
              <td className="py-2 px-5">
                <button className="bg-[#e45252] text-white rounded-full py-3 w-[130px] text-sm font-medium">
                  {activity.actionbutton}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
