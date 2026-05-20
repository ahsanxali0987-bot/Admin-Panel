import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const DataManagementData = [
  {
    data: "Export data for all players",
    reg: "Export in PDF",
    part: "Export in PDF",
    pay: "Export in PDF",
  },
  {
    data: "Export data for all organizers",
    reg: "Export in PDF",
    part: "Export in PDF",
    pay: "Export in PDF",
  },
  {
    data: "Export data for all events",
    reg: "Export in PDF",
    part: "Export in PDF",
    pay: "Export in PDF",
  },
];

const DataManagement = () => {
  return (
    <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
      <div className="text-[16px] sm:text-[18px] font-semibold text-[#000000E5] p-4 border-b border-gray-100">
        Data Management
      </div>

      {/* Mobile View Block for Global Exports */}
      <div className="block md:hidden divide-y divide-gray-100 p-2">
        {DataManagementData.map((item, index) => (
          <div key={index} className="p-4 bg-white space-y-3">
            <p className="text-[14px] font-semibold text-gray-900 m-0">
              {item.data}
            </p>
            <div className="grid grid-cols-3 gap-2">
              <button className="bg-[#e45252] text-white rounded-xl py-2 px-1 text-[11px] font-medium text-center shadow-xs">
                Reg. PDF
              </button>
              <button className="bg-[#e45252] text-white rounded-xl py-2 px-1 text-[11px] font-medium text-center shadow-xs">
                History PDF
              </button>
              <button className="bg-[#e45252] text-white rounded-xl py-2 px-1 text-[11px] font-medium text-center shadow-xs">
                Pay PDF
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View Table for Global Exports */}
      <div className="hidden md:block overflow-x-auto w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-[#dfdfdf]">
              {[
                "Export User Data",
                "Registration Details",
                "Participation History",
                "Payment History",
              ].map((h) => (
                <th
                  key={h}
                  className="py-3.5 px-5 text-left text-[14px] sm:text-[15px] font-medium text-[#000000CC] whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {DataManagementData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50/30 transition-colors">
                <td className="py-4 px-5 text-[14px] text-[#000000E5] font-medium">
                  {item.data}
                </td>
                {[item.reg, item.part, item.pay].map((btnText, i) => (
                  <td key={i} className="py-3 px-5">
                    <button className="bg-[#e45252] text-white rounded-full py-2 px-5 text-xs sm:text-sm font-medium hover:bg-[#d04444] shadow-sm whitespace-nowrap">
                      {btnText}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Individual Search Controls Subblock */}
      <div className="p-4 sm:p-5 bg-gray-50/40 border-t border-gray-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <h1 className="text-[16px] sm:text-[18px] text-[#000000E5] font-semibold m-0">
            Individual Data
          </h1>

          <div className="w-full md:max-w-[500px] lg:max-w-[600px] flex items-center bg-white border border-gray-200 rounded-lg shadow-inner px-3 py-0.5 focus-within:border-[#e45252] transition-colors">
            <input
              type="text"
              className="py-2 px-2 w-full text-[13px] sm:text-[14px] outline-none bg-transparent text-black"
              placeholder="Select Organizer / Player / Events"
            />
            <IoIosArrowUp className="rotate-180 text-[#909090] text-lg flex-shrink-0 cursor-pointer" />
          </div>
        </div>

        {/* Elastic Individual Grid/Table Hybrid layout */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-0">
          <div className="md:hidden space-y-3">
            <p className="text-[14px] font-semibold text-gray-900 m-0">
              Export data for Single player
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button className="bg-[#e45252] text-white rounded-full py-2 px-4 text-xs font-medium">
                Registration PDF
              </button>
              <button className="bg-[#e45252] text-white rounded-full py-2 px-4 text-xs font-medium">
                Participation PDF
              </button>
              <button className="bg-[#e45252] text-white rounded-full py-2 px-4 text-xs font-medium">
                Payment PDF
              </button>
            </div>
          </div>

          <table className="hidden md:table w-full border-collapse">
            <thead>
              <tr className="bg-gray-50/70 border-b border-gray-100">
                <th className="py-3 px-5 w-[35%]" />
                {[
                  "Registration Details",
                  "Participation History",
                  "Payment History",
                ].map((col) => (
                  <th
                    key={col}
                    className="py-3 px-5 text-left text-[14px] sm:text-[15px] font-medium text-[#000000CC] whitespace-nowrap"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50/30">
                <td className="py-4 px-5 text-[14px] text-[#000000E5] font-medium">
                  Export data for Single player
                </td>
                {[1, 2, 3].map((key) => (
                  <td key={key} className="py-4 px-5">
                    <button className="bg-[#e45252] text-white rounded-full py-2 px-5 text-xs sm:text-sm font-medium hover:bg-[#d04444] shadow-sm whitespace-nowrap">
                      Export in PDF
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataManagement;
