import React from "react";
import Overview from "../Components/PaymentSetting/Overview";
import History from "../Components/PaymentSetting/History";
import DataManagement from "../Components/PaymentSetting/DataManagement";

const PaymentSetting = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Overview */}
      <Overview />

      {/* History */}
      <History />

      {/* Data Management */}
      <DataManagement />

      {/* PaymentSetting Footer */}
      <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden mb-6 p-4 md:p-0">
        {/* Mobile View Stack */}
        <div className="md:hidden space-y-4">
          <div>
            <h4 className="text-[15px] font-semibold text-gray-900 m-0">
              Export Event Data
            </h4>
            <p className="text-xs text-gray-400 mt-0.5">
              Data for Analysis and Reporting
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="w-full flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
              <span className="text-xs font-medium text-gray-700">
                Player Registrations
              </span>
              <button className="bg-[#e45252] text-white rounded-full py-1.5 px-4 text-xs font-medium">
                Export PDF
              </button>
            </div>
            <div className="w-full flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-100">
              <span className="text-xs font-medium text-gray-700">
                Financial Records
              </span>
              <button className="bg-[#e45252] text-white rounded-full py-1.5 px-4 text-xs font-medium">
                Export PDF
              </button>
            </div>
          </div>
        </div>

        {/* Desktop View Table */}
        <table className="hidden md:table w-full border-collapse">
          <thead>
            <tr className="bg-gray-50/50 border-b border-gray-100">
              <th className="py-3.5 px-5 text-left text-[14px] sm:text-[15px] font-medium text-[#000000CC] whitespace-nowrap">
                Export Event Data
              </th>
              <th className="py-3.5 px-5 text-left text-[14px] sm:text-[15px] font-medium text-[#000000CC] whitespace-nowrap">
                Player Registrations
              </th>
              <th className="py-3.5 px-5 text-left text-[14px] sm:text-[15px] font-medium text-[#000000CC] whitespace-nowrap">
                Financial Records
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50/10">
              <td className="py-4 px-5 text-[14px] text-[#000000E5] align-middle">
                Data for Analysis and Reporting
              </td>
              <td className="py-4 px-5">
                <button className="bg-[#e45252] text-white rounded-full py-2.5 px-5 text-xs sm:text-sm font-medium hover:bg-[#d04444] shadow-sm whitespace-nowrap">
                  Export in PDF
                </button>
              </td>
              <td className="py-4 px-5">
                <button className="bg-[#e45252] text-white rounded-full py-2.5 px-5 text-xs sm:text-sm font-medium hover:bg-[#d04444] shadow-sm whitespace-nowrap">
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

export default PaymentSetting;
