import React from "react";
import EventAnalytics from "../Components/Analytics/EventAnalytics";
import FinancialAnalytics from "../Components/Analytics/FinancialAnalytis";
import OrganizerAnalytics from "../Components/Analytics/OrganizerAnalytics";
import EventFeedback from "../Components/Analytics/EventFeedback";

const Analytics = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* EventAnalytics */}
      <EventAnalytics />

      {/* FinancialAnalytics */}
      <FinancialAnalytics />

      {/* OrganizerAnalytics */}
      <OrganizerAnalytics />

      {/* EventFeedback */}
      <EventFeedback />
    </div>
  );
};

export default Analytics;
