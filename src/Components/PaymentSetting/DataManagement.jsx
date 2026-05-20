import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const DataManagementData = [
  {
    data: "Export data for all players",
    registrationdeatails: "Export in PDF",
    participationhistory: "Export in PDF",
    paymenthistory: "Export in PDF",
  },
  {
    data: "Export data for all organizers",
    registrationdeatails: "Export in PDF",
    participationhistory: "Export in PDF",
    paymenthistory: "Export in PDF",
  },
  {
    data: "Export data for all events",
    registrationdeatails: "Export in PDF",
    participationhistory: "Export in PDF",
    paymenthistory: "Export in PDF",
  },
];

const DataManagement = () => {
  return (
    <div className="bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-x-auto">
      {/* Heading */}
      <div className="text-[18px] font-semibold text-[#000000E5] p-4">
        Data Management
      </div>

      {/* Table */}
      <table className="w-full border-collapse border-y-2 border-[#dfdfdf]">
        {/* Table body */}
        <thead>
          {/* Table heading */}
          <tr>
            <th className="py-4 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Export User Data
            </th>
            <th className="py-4 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Registration Details
            </th>
            <th className="py-4 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Participation History
            </th>
            <th className="py-4 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Payment History
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {DataManagementData.map((item, index) => {
            return (
              <tr key={index}>
                <td className="py-1 px-5 text-[15px] font-normal text-[#000000E5]">
                  {item.data}
                </td>
                <td className="py-1 px-5">
                  <button className="bg-[#e45252] text-white rounded-full py-3 px-5 text-sm font-medium">
                    {item.registrationdeatails}
                  </button>
                </td>
                <td className="py-1 px-5">
                  <button className="bg-[#e45252] text-white rounded-full py-3 px-5 text-sm font-medium">
                    {item.participationhistory}
                  </button>
                </td>
                <td className="py-1 px-5 pb-5">
                  <button className="bg-[#e45252] text-white rounded-full py-3 px-5 text-sm font-medium">
                    {item.paymenthistory}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Search */}
      <div className="p-3">
        <div className="flex items-center justify-between mb-3">
          {/* Header */}
          <h1 className="text-[18px] text-[#000000E5] font-semibold">
            Individual Data
          </h1>

          {/* Searchbar */}
          <div className="w-[600px] items-center flex shadow-[0_0_10px_rgba(0,0,0,0.08)] px-2">
            <input
              type="text"
              className="py-2 px-5 w-full"
              placeholder="Select Oraganizer/player/Events"
            />
            <IoIosArrowUp className="rotate-180 text-[#909090]" />
          </div>
        </div>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-5" />
              {[
                "Registration Details",
                "Participation History",
                "Payment History",
              ].map((col) => (
                <th
                  key={col}
                  className="px-5 text-left text-[16px] font-medium text-[#000000CC]"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr>
              <td className="py-1 px-5 text-[15px] font-normal text-[#000000E5]">
                Export data for Single player
              </td>
              <td className="py-1 px-5">
                <button className="bg-[#e45252] text-white rounded-full py-3 px-5 text-sm font-medium">
                  Export in PDF
                </button>
              </td>
              <td className="py-1 px-5">
                <button className="bg-[#e45252] text-white rounded-full py-3 px-5 text-sm font-medium">
                  Export in PDF
                </button>
              </td>
              <td className="py-1 px-5 pb-5">
                <button className="bg-[#e45252] text-white rounded-full py-3 px-5 text-sm font-medium">
                  Export in PDF
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataManagement;
