import React from "react";
import UserReports from "../Components/Usersmanagement/UserReports";
import ContentModeration from "../Components/Usersmanagement/ContentModeration";

const UsersManagement = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* User Reports Section */}
      <UserReports />

      {/* Content Moderation Section */}
      <ContentModeration />
    </div>
  );
};

export default UsersManagement;
