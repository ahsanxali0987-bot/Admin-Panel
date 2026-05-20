import React from "react";
import ReportsAndLogsData from "../../Data/ReportsAndLogsData";
const { systemLogsData, securityLogsData } = ReportsAndLogsData;

const ReportsAndLogs = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-6 bg-[#F5F5F5] min-h-screen box-border font-[Poppins]">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Main Wrapper Node Container */}
      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
        {/* Module Core Header */}
        <div className="text-[17px] sm:text-[19px] font-semibold text-[#000000E5] px-4 py-4 sm:px-6 bg-white border-b border-[#DFDFDF]">
          Reports & Logs
        </div>

        {/* ── SECTION 1: SYSTEM LOGS LAYER ── */}
        <div className="p-4 sm:p-5 mt-3 bg-gray-100">
          <p className="text-[15px] sm:text-[16px] font-semibold text-[#000000CC] pb-3 m-0 tracking-tight">
            System Logs
          </p>

          {/* Mobile Stacked Logs Cards View (Hidden on Tablet/Desktops) */}
          <div className="block md:hidden space-y-3.5">
            {systemLogsData.map((log) => (
              <div
                key={log.id}
                className="bg-gray-50 rounded-xl p-4 border border-gray-200/60 space-y-3 shadow-xs"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-mono text-gray-400">
                    {log.timestamp}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-md text-xs font-medium ${
                      log.status === "Success" || log.status === "Resolved"
                        ? "text-green-700 bg-green-50"
                        : "text-red-700 bg-red-50"
                    }`}
                  >
                    {log.status}
                  </span>
                </div>
                <div className="space-y-1 text-[13px]">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Type:</span>{" "}
                    <span className="font-medium text-gray-900">
                      {log.logType}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Actor:</span>{" "}
                    <span className="text-gray-800">{log.userAdmin}</span>
                  </div>
                  <p className="text-gray-600 bg-white/80 p-2 rounded border border-gray-100 mt-2 text-xs leading-relaxed">
                    {log.description}
                  </p>
                </div>
                <button className="w-full bg-[#e45252] hover:bg-[#cc3e3e] text-white text-[12px] font-semibold py-2 rounded-full transition-colors shadow-xs mt-1">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Desktop Matrix Grid view (Hidden on Mobile viewports) */}
          <div className="hidden md:block overflow-x-auto w-full rounded-xl border border-gray-100">
            <table className="w-full border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-[#DFDFDF]">
                  {[
                    "Timestamp",
                    "Log Type",
                    "User/Admin",
                    "Description",
                    "Status",
                    "Actions",
                  ].map((th) => (
                    <th
                      key={th}
                      className={`py-3 px-5 text-left text-[14px] font-medium text-[#000000CC] ${th === "Actions" ? "text-right pr-8" : ""}`}
                    >
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {systemLogsData.map((log) => (
                  <tr
                    key={log.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-3.5 px-5 text-[13px] text-[#000000E5] font-mono">
                      {log.timestamp}
                    </td>
                    <td className="py-3.5 px-5 text-[13px] font-medium text-gray-900">
                      {log.logType}
                    </td>
                    <td className="py-3.5 px-5 text-[13px] text-gray-700">
                      {log.userAdmin}
                    </td>
                    <td className="py-3.5 px-5 text-[13px] text-gray-600 max-w-[240px] truncate">
                      {log.description}
                    </td>
                    <td className="py-3.5 px-5 text-[13px]">
                      <span
                        className={`px-2.5 py-0.5 rounded text-xs font-medium`}
                      >
                        {log.status}
                      </span>
                    </td>
                    <td className="py-2 px-5 text-right pr-6">
                      <button className="bg-[#e45252] hover:bg-[#cc3e3e] w-[110px] text-white text-[12px] font-semibold py-1.5 rounded-full transition-colors shadow-xs">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dynamic Structural Divider Gap Element */}
        <div className="h-[1px] bg-gray-200 mx-4 sm:mx-6" />

        {/* ── SECTION 2: SECURITY LOGS LAYER ── */}
        <div className="p-4 sm:p-5 mt-3 bg-gray-100">
          <p className="text-[15px] sm:text-[16px] font-semibold text-[#000000CC] pb-3 m-0 tracking-tight">
            Security Logs
          </p>

          {/* Mobile Stacked Security Cards View (Hidden on Tablet/Desktops) */}
          <div className="block md:hidden space-y-3.5">
            {securityLogsData.map((log) => (
              <div
                key={log.id}
                className="bg-gray-50 rounded-xl p-4 border border-gray-200/60 space-y-3 shadow-xs"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-mono text-gray-400">
                    {log.timestamp}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${
                      log.riskLevel === "Critical"
                        ? "text-red-700 bg-red-50 border border-red-200"
                        : log.riskLevel === "High"
                          ? "text-orange-700 bg-orange-50"
                          : "text-amber-700 bg-amber-50"
                    }`}
                  >
                    {log.riskLevel} Risk
                  </span>
                </div>
                <div className="space-y-1.5 text-[13px]">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Event:</span>{" "}
                    <span className="font-semibold text-gray-900">
                      {log.eventType}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">User Context:</span>{" "}
                    <span className="text-gray-800 font-medium">
                      {log.userAdmin}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">IP Pointer:</span>{" "}
                    <span className="text-gray-600 font-mono text-xs">
                      {log.ipAddress}
                    </span>
                  </div>
                </div>
                <button className="w-full bg-[#e45252] hover:bg-[#cc3e3e] text-white text-[12px] font-semibold py-2 rounded-full transition-colors shadow-xs mt-1">
                  {log.action}
                </button>
              </div>
            ))}
          </div>

          {/* Desktop Security Logs Table Node (Hidden on Mobile viewports) */}
          <div className="hidden md:block overflow-x-auto w-full rounded-xl border border-gray-100">
            <table className="w-full border-collapse min-w-[800px]">
              <thead>
                <tr className="border-b border-[#DFDFDF]">
                  {[
                    "Timestamp",
                    "Event Type",
                    "User/Admin",
                    "IP Address",
                    "Risk Level",
                    "Actions",
                  ].map((th) => (
                    <th
                      key={th}
                      className={`py-3 px-5 text-left text-[14px] font-medium text-[#000000CC] ${th === "Actions" ? "text-right pr-8" : ""}`}
                    >
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {securityLogsData.map((log) => (
                  <tr
                    key={log.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-3.5 px-5 text-[13px] text-[#000000E5] font-mono">
                      {log.timestamp}
                    </td>
                    <td className="py-3.5 px-5 text-[13px] font-semibold text-gray-900">
                      {log.eventType}
                    </td>
                    <td className="py-3.5 px-5 text-[13px] text-gray-700">
                      {log.userAdmin}
                    </td>
                    <td className="py-3.5 px-5 text-[13px] text-gray-600 font-mono text-xs">
                      {log.ipAddress}
                    </td>
                    <td className="py-3.5 px-5 text-[13px]">
                      <span
                        className={`px-2.5 py-0.5 rounded text-xs font-semibold `}
                      >
                        {log.riskLevel}
                      </span>
                    </td>
                    <td className="py-2 px-5 text-right pr-6">
                      <button className="bg-[#e45252] hover:bg-[#cc3e3e] w-[110px] text-white text-[12px] font-semibold py-1.5 rounded-full transition-colors shadow-xs">
                        {log.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAndLogs;
