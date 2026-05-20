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
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)]">
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-5 border border-white border-b-[#e5e5e5]">
        {/* Heading */}
        <h2 className="text-[17px] font-semibold text-[#000000E5]">
          User Reports
        </h2>

        {/* Button */}
        <button className="text-[#e45252] border border-[#e45252] rounded-full px-5 py-1.5 font-medium text-sm">
          View All
        </button>
      </div>
      {/* Table */}
      <table className="w-full border-collapse">
        {/* Table body */}
        <thead>
          {/* Table heading */}
          <tr>
            <th className="py-1 px-3 text-left text-[16px] font-medium text-[#000000CC]">
              Report ID
            </th>
            <th className="py-1 px-3 text-left text-[16px] font-medium text-[#000000CC]">
              User Name
            </th>
            <th className="py-1 px-3 text-left text-[16px] font-medium text-[#000000CC]">
              Reported By
            </th>
            <th className="py-1 px-3 text-left text-[16px] font-medium text-[#000000CC]">
              Content Type
            </th>
            <th className="py-1 px-3 text-left text-[16px] font-medium text-[#000000CC]">
              Violation Type
            </th>
            <th className="py-1 px-3 text-left text-[16px] font-medium text-[#000000CC]">
              Date
            </th>
            <th className="py-1 px-3 text-left text-[16px] font-medium text-[#000000CC]">
              Status
            </th>
            <th className="py-1 px-3 text-left text-[16px] font-medium text-[#000000CC]">
              Action
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {UsersManagementData.map((item, index) => (
            <tr className="relative" key={index}>
              {/* Report ID */}
              <td className="px-3 text-[13px] font-normal text-[#000000E5]">
                {item.id}
              </td>

              {/* User Name */}
              <td className="px-3 text-[13px] font-normal text-[#000000E5]">
                {item.username}
              </td>

              {/* Reported By */}
              <td className="px-3 text-[13px] font-normal text-[#000000E5]">
                {item.reportedby}
              </td>

              {/* Content Type */}
              <td className="px-3 text-[13px] font-normal text-[#000000E5]">
                {item.type}
              </td>

              {/* Violation Type */}
              <td className="px-3 text-[13px] font-normal text-[#000000E5]">
                {item.violationtype}
              </td>

              {/* Date */}
              <td className="px-3 text-[13px] font-normal text-[#000000E5]">
                {item.date}
              </td>

              {/* Status */}
              <td className="px-3 text-[13px] font-normal text-[#000000E5]">
                {item.status}
              </td>

              {/* Button */}
              <td className="px-3 py-4">
                <div className="flex gap-2">
                  <button className="bg-[#e45252] text-white rounded-full py-2 px-8 text-[14px] font-medium">
                    Ban
                  </button>

                  <button className="bg-[#e45252] text-white rounded-full py-2 px-[30px] text-[14px] font-medium">
                    View
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserReports;
