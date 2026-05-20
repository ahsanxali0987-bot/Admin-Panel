import React from "react";
import EventCategories from "./settings/EventCategories";
import WhoCanJoin from "./settings/WhoCanJoin";
import EventVisibility from "./settings/EventVisibility";
import CommunicationPreferences from "./settings/CommunicationPreferences";
import TimeZone from "./settings/TimeZone";
import PaymentSettings from "./settings/PaymentSettings";

const Setting = () => (
  <div className="rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.08)]">
    {/* ── Page header ── */}
    <div className="text-[18px] font-semibold text-[#000000E5] border-b border-[#dfdfdf] p-4 bg-white">
      System Settings & Configuration
    </div>

    {/* ── Platform Configuration sub-heading ── */}
    <p className="text-[16px] font-semibold text-[#000000E5] bg-white px-4 pt-4 pb-2">
      Platform Configuration Section
    </p>

    {/* Event Categories */}
    <EventCategories />
    <hr className="h-[9px] bg-white border-none" />

    {/* Who Can Join */}
    <WhoCanJoin />
    <hr className="h-[15px] bg-white border-none" />

    {/* Event Visibility */}
    <EventVisibility />
    <hr className="h-[15px] bg-white border-none" />

    {/* Communication Preferences */}
    <CommunicationPreferences />
    <hr className="h-[15px] bg-white border-none" />

    {/* TimeZone */}
    <TimeZone />

    {/* PaymentSettings */}
    <PaymentSettings />
  </div>
);

export default Setting;
