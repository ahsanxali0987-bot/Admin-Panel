import React from "react";

const UsersManagementData = [
  {
    id: "1001",
    username: "User A",
    reportedby: "User B",
    type: "Text Post",
    violationtype: "Abusive Language",
    date: "Dec 25, 2024",
    status: "Pending",
  },
  {
    id: "1001",
    username: "User A",
    reportedby: "User B",
    type: "Text Post",
    violationtype: "Abusive Language",
    date: "Dec 25, 2024",
    status: "Pending",
  },
  {
    id: "1001",
    username: "User A",
    reportedby: "User B",
    type: "Text Post",
    violationtype: "Abusive Language",
    date: "Dec 25, 2024",
    status: "Pending",
  },
  {
    id: "1001",
    username: "User A",
    reportedby: "User B",
    type: "Text Post",
    violationtype: "Abusive Language",
    date: "Dec 25, 2024",
    status: "Pending",
  },
  {
    id: "1001",
    username: "User A",
    reportedby: "User B",
    type: "Text Post",
    violationtype: "Abusive Language",
    date: "Dec 25, 2024",
    status: "Pending",
  },
];

const UserReports = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden w-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-5 border-b border-[#e5e5e5]">
        {/* Heading */}
        <h2 className="text-[16px] sm:text-[17px] font-semibold text-[#000000E5]">
          User Reports
        </h2>

        {/* Button */}
        <button className="text-[#e45252] border border-[#e45252] rounded-full px-4 sm:px-5 py-1.5 font-medium text-xs sm:text-sm hover:bg-[#e45252]/5 transition-colors">
          View All
        </button>
      </div>

      {/* --- MOBILE MODULAR STACK VIEW (md:hidden) --- */}
      <div className="block md:hidden divide-y divide-[#dfdfdf]">
        {UsersManagementData.map((item, index) => (
          <div key={index} className="p-4 flex flex-col gap-2.5 bg-white">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] font-mono text-gray-400 block">ID: #{item.id}</span>
                <h4 className="text-[14px] font-semibold text-black mt-0.5">
                  {item.username} <span className="text-xs font-normal text-gray-400">reported by</span> {item.reportedby}
                </h4>
              </div>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">
                {item.status}
              </span>
            </div>

            {/* Content & Violation Metadata row */}
            <div className="grid grid-cols-2 gap-2 text-[12px] bg-gray-50 p-2.5 rounded-xl border border-gray-100">
              <div>
                <p className="text-gray-400 font-medium text-[10px] uppercase tracking-wider">Violation Type</p>
                <p className="text-red-600 font-medium mt-0.5">{item.violationtype}</p>
              </div>
              <div>
                <p className="text-gray-400 font-medium text-[10px] uppercase tracking-wider text-right">Content & Date</p>
                <p className="text-gray-700 font-normal mt-0.5 text-right">{item.type}</p>
                <p className="text-gray-400 text-[11px] text-right">{item.date}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2 mt-1">
              <button className="bg-[#e45252] text-white rounded-full py-1.5 px-6 text-xs font-medium active:bg-[#c93d3d]">
                View
              </button>
              <button className="bg-black text-white rounded-full py-1.5 px-6 text-xs font-medium active:bg-gray-800">
                Ban
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
              <th className="py-3 px-3 lg:py-4 lg:px-4 xl:px-5 text-left text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-[#000000CC] tracking-wide">
                Report ID
              </th>
              <th className="py-3 px-3 lg:py-4 lg:px-4 xl:px-5 text-left text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-[#000000CC] tracking-wide">
                User Name
              </th>
              <th className="py-3 px-3 lg:py-4 lg:px-4 xl:px-5 text-left text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-[#000000CC] tracking-wide">
                Reported By
              </th>
              <th className="py-3 px-3 lg:py-4 lg:px-4 xl:px-5 text-left text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-[#000000CC] tracking-wide">
                Content Type
              </th>
              <th className="py-3 px-3 lg:py-4 lg:px-4 xl:px-5 text-left text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-[#000000CC] tracking-wide">
                Violation Type
              </th>
              <th className="py-3 px-3 lg:py-4 lg:px-4 xl:px-5 text-left text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-[#000000CC] tracking-wide">
                Date
              </th>
              <th className="py-3 px-3 lg:py-4 lg:px-4 xl:px-5 text-left text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-[#000000CC] tracking-wide">
                Status
              </th>
              <th className="py-3 px-3 lg:py-4 lg:px-4 xl:px-5 text-left text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-[#000000CC] tracking-wide">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-[#dfdfdf]/60 border-t border-[#dfdfdf]">
            {UsersManagementData.map((item, index) => (
              <tr className="hover:bg-gray-50/30 transition-colors" key={index}>
                {/* Report ID */}
                <td className="py-4 px-4 text-[13px] font-normal text-[#000000E5] font-mono">
                  {item.id}
                </td>

                {/* User Name */}
                <td className="py-4 px-4 text-[13px] font-normal text-[#000000E5] whitespace-nowrap">
                  {item.username}
                </td>

                {/* Reported By */}
                <td className="py-4 px-4 text-[13px] font-normal text-[#000000E5] whitespace-nowrap">
                  {item.reportedby}
                </td>

                {/* Content Type */}
                <td className="py-4 px-4 text-[13px] font-normal text-[#000000E5] whitespace-nowrap">
                  {item.type}
                </td>

                {/* Violation Type */}
                <td className="py-4 px-4 text-[13px] font-normal text-[#000000E5]">
                  {item.violationtype}
                </td>

                {/* Date */}
                <td className="py-4 px-4 text-[13px] font-normal text-[#000000E5] whitespace-nowrap">
                  {item.date}
                </td>

                {/* Status */}
                <td className="py-4 px-4 text-[13px] font-normal text-[#000000E5]">
                  <span className="font-medium">{item.status}</span>
                </td>

                {/* Button */}
                <td className="py-3 px-4 whitespace-nowrap">
                  <div className="flex gap-2">
                    <button className="bg-[#e45252] text-white rounded-full py-1.5 px-5 text-xs lg:text-sm font-medium hover:bg-[#c93d3d] transition-colors">
                      Ban
                    </button>

                    <button className="bg-[#e45252] text-white rounded-full py-1.5 px-5 text-xs lg:text-sm font-medium hover:bg-[#c93d3d] transition-colors">
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserReports;