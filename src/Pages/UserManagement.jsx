import React, { useState } from "react";
import PlayerManagement from "../Components/User management/PlayerManagement";
import OraganizerManagement from "../Components/User management/OraganizerManagement";
import Popup from "../Components/User management/Popup";

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex flex-col gap-5 relative">
      {/* PlayerManagement */}
      <PlayerManagement onViewDetails={setSelectedUser} />
      
      {/* OraganizerManagement */}
      <OraganizerManagement onViewDetails={setSelectedUser} />

      {selectedUser && (
        <Popup user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
};

export default UserManagement;