import React from "react";

const systemLogsData = [
  {
    id: 1,
    timestamp: "2024-12-26 10:00",
    logType: "Server Error",
    userAdmin: "System",
    description: "Database connection lost",
    status: "Resolved",
  },
  {
    id: 2,
    timestamp: "2024-12-26 10:15",
    logType: "Login Attempt",
    userAdmin: "User123",
    description: "Failed login attempt",
    status: "Failed",
  },
  {
    id: 3,
    timestamp: "2024-12-26 10:20",
    logType: "User Action",
    userAdmin: "Admin_Alice",
    description: "Changed payment settings",
    status: "Success",
  },
];

const securityLogsData = [
  {
    id: 1,
    timestamp: "2024-12-26 10:00",
    eventType: "Failed Login",
    userAdmin: "User456",
    ipAddress: "192.168.1.10",
    riskLevel: "High",
    action: "Block IP",
  },
  {
    id: 2,
    timestamp: "2024-12-26 10:15",
    eventType: "Unauthorized Access",
    userAdmin: "Unknown",
    ipAddress: "10.0.0.5",
    riskLevel: "Critical",
    action: "Review Log",
  },
  {
    id: 3,
    timestamp: "2024-12-26 10:20",
    eventType: "Profile Edit",
    userAdmin: "User789",
    ipAddress: "172.16.0.3",
    riskLevel: "Medium",
    action: "Notify User",
  },
];

const ReportsAndLogs = () => {
  return (
    <div className="bg-white pb-4 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
      <div className="text-[16px] font-semibold text-[#000000E5] px-4 pt-4 pb-2 bg-white border-b-[1px] bordr-[#DFDFDF] mb-3">
        Reports & Logs
      </div>

      {/* ── System Logs ── */}
      <div className="overflow-hidden px-5 pt-3 pb-2 bg-[#F5F5F5]">
        <p className="text-[16px] font-semibold text-[#000000CC] pb-2">
          System Logs
        </p>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-1 pr-4 text-left text-[14px] font-medium text-[#000000CC]">
                Timestamp
              </th>
              <th className="py-1 px-4 text-left text-[14px] font-medium text-[#000000CC]">
                Log Type
              </th>
              <th className="py-1 px-4 text-left text-[14px] font-medium text-[#000000CC]">
                User/Admin
              </th>
              <th className="py-1 px-4 text-left text-[14px] font-medium text-[#000000CC]">
                Description
              </th>
              <th className="py-1 px-4 text-left text-[14px] font-medium text-[#000000CC]">
                Status
              </th>
              <th className="py-2 pl-14 text-left text-[14px] font-medium text-[#000000CC]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {systemLogsData.map((log) => (
              <tr key={log.id}>
                <td className="py-2 pr-4 text-[13px] text-[#000000E5]">
                  {log.timestamp}
                </td>
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {log.logType}
                </td>
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {log.userAdmin}
                </td>
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {log.description}
                </td>
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {log.status}
                </td>
                <td className="py-1">
                  <div className="flex justify-end">
                    <button className="bg-[#e45252] hover:bg-[#cc3e3e] w-[120px] text-white text-[12px] font-semibold px-4 py-1 rounded-full transition-colors">
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="h-[9px] bg-white border-none" />

      {/* ── Security Logs ── */}
      <div className="overflow-hidden px-5 pt-3 pb-2 bg-[#F5F5F5]">
        <p className="text-[16px] font-semibold text-[#000000CC] pb-2">
          Security Logs
        </p>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f5f5f5]">
              <th className="py-1 pr-4 text-left text-[14px] font-medium text-[#000000CC]">
                Timestamp
              </th>
              <th className="py-1 px-4 text-left text-[14px] font-medium text-[#000000CC]">
                Event Type
              </th>
              <th className="py-1 px-4 text-left text-[14px] font-medium text-[#000000CC]">
                User/Admin
              </th>
              <th className="py-1 px-4 text-left text-[14px] font-medium text-[#000000CC]">
                IP Address
              </th>
              <th className="py-1 px-4 text-left text-[14px] font-medium text-[#000000CC]">
                Risk Level
              </th>
              <th className="py-1 pl-14 text-left text-[13px] font-medium text-[#000000CC]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {securityLogsData.map((log) => (
              <tr key={log.id} className="border-t border-[#f0f0f0]">
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {log.timestamp}
                </td>
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {log.eventType}
                </td>
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {log.userAdmin}
                </td>
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {log.ipAddress}
                </td>
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {log.riskLevel}
                </td>
                <td className="py-2">
                  <div className="flex justify-end">
                    <button className="bg-[#e45252] hover:bg-[#cc3e3e] w-[120px] text-white text-[12px] font-semibold px-4 py-1 rounded-full transition-colors">
                      {log.action}
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

export default ReportsAndLogs;
