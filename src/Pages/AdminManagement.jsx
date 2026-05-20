import React from "react";
import Permissions from "../Components/AdminManagement/Permissions";
import Setting from "../Components/AdminManagement/Setting";
import ReportsAndLogs from "../Components/AdminManagement/ReportsAndLogs";

const AdminManagement = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Permissions */}
      <Permissions />
      
      {/* Setting */}
      <Setting />

      {/* Reports and Logs */}
      <ReportsAndLogs />

    </div>
  );
};

export default AdminManagement;
