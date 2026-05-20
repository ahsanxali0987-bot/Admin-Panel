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
      <table className="my-5">
        <thead>
          <tr>
            <th className="px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Export Event Data
            </th>
            <th className="px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Player Registrations
            </th>
            <th className="px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Financial Records
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-1 px-5">
              <td className="text-[13px] font-normal text-[#000000E5]">
                Data for Analysis and Reporting
              </td>
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
  );
};

export default PaymentSetting;
