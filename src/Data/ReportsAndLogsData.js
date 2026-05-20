const ReportsAndLogsData = {
  systemLogsData: [
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
  ],

  securityLogsData: [
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
  ],
};

export default ReportsAndLogsData;