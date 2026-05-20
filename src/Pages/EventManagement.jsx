import React from "react";
import Approvals from "../Components/EventManagement/Approvals";
import UpcomingEvents from "../Components/EventManagement/UpcomingEvents";
import PastEvents from "../Components/EventManagement/PastEvents";

const EventManagement = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Approvals */}
      <Approvals />

      {/* UpcomingEvents */}
      <UpcomingEvents />

      {/* PastEvents */}
      <PastEvents />
    </div>
  );
};

export default EventManagement;
