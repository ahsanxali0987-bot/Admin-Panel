import React, { useState } from "react";
import SettingsCard from "../Components/MembershipSetting/SettingsCard.jsx";
import InputField from "../Components/MembershipSetting/InputField.jsx";
import SaveBtnSmall from "../Components/MembershipSetting/SaveBtnSmall.jsx";
import Toggle from "../Components/MembershipSetting/Toggle.jsx";

const MembershipSetting = () => {
  const [silverPrice, setSilverPrice] = useState("100$");
  const [silverDuration, setSilverDuration] = useState("Weekly");
  const [platinumPrice, setPlatinumPrice] = useState("100$");
  const [platinumDuration, setPlatinumDuration] = useState("Monthly");
  const [goldPrice, setGoldPrice] = useState("100$");
  const [goldDuration, setGoldDuration] = useState("Yearly");
  const [creditCard, setCreditCard] = useState(true);
  const [payPal, setPayPal] = useState(true);
  const [organizerAnalytics, setOrganizerAnalytics] = useState(true);
  const [playerAnalytics, setPlayerAnalytics] = useState(true);
  const [autoAnalytics, setAutoAnalytics] = useState(true);
  const [allowMatch, setAllowMatch] = useState(true);
  const [notify, setNotify] = useState(true);

  return (
    <div className="bg-[#F9FAFB] min-h-screen font-['Poppins'] flex justify-center items-start">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Main Responsive Panel Wrapper */}
      <div className="w-full max-w-[1200px] bg-white rounded-xl sm:rounded-2xl shadow-[0_0_12px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden transition-all duration-300">
        {/* Main Header - Fluid text size and pads */}
        <div className="px-4 py-4 sm:px-6 sm:py-5 lg:px-8 border-b border-[#F0F0F0]">
          <h1 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-bold text-black/90 leading-tight">
            Platinum Partner Membership Settings
          </h1>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
          {/* 1. Benefits Section */}
          <section className="mb-8 sm:mb-10">
            <h2 className="text-[14px] sm:text-[16px] md:text-[18px] xl:text-[19px] font-bold text-black mb-3 sm:mb-4">
              Membership Settings
            </h2>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] font-bold text-black/80 mb-2.5">
              Benefits
            </p>

            <div className="p-4 sm:p-5 md:p-6 bg-white border border-[#E0E0E0] rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.04)]">
              <div className="space-y-2.5 sm:space-y-3 text-[11px] sm:text-[13px] md:text-[14px] font-semibold text-gray-800 leading-relaxed">
                <p>
                  Access to Player & Match Analytics (Views, Engagement,
                  Registrations)
                </p>
                <p>Ability to Organize Matches & Events</p>
                <p>Automatically Featured Every Month for 3 Days</p>
                <ul className="list-disc list-outside ml-4 sm:ml-5 space-y-1.5 sm:space-y-2 text-gray-600 font-medium text-[12px] sm:text-[13px]">
                  <li>
                    Their profile will be highlighted as a "Featured Organizer"
                  </li>
                  <li>More visibility to players looking for events</li>
                  <li>Appears at the top of the organizer list</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. General Settings Headline */}
          <h2 className="text-[14px] sm:text-[16px] md:text-[18px] xl:text-[19px] font-bold text-black mb-4">
            General Settings:
          </h2>

          {/* Pricing Grid Layout: 1 col on mobile, 2 cols on tabs, 3 cols on large screen laptops/PC */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <SettingsCard title="Silver Membership">
              <InputField
                label="Price"
                value={silverPrice}
                onChange={setSilverPrice}
              />
              <InputField
                label="Feature Duration"
                value={silverDuration}
                onChange={setSilverDuration}
              />
            </SettingsCard>

            <SettingsCard title="Platinum Membership">
              <InputField
                label="Price"
                value={platinumPrice}
                onChange={setPlatinumPrice}
              />
              <InputField
                label="Feature Duration"
                value={platinumDuration}
                onChange={setPlatinumDuration}
              />
            </SettingsCard>

            <SettingsCard title="Gold Membership">
              <InputField
                label="Price"
                value={goldPrice}
                onChange={setGoldPrice}
              />
              <InputField
                label="Feature Duration"
                value={goldDuration}
                onChange={setGoldDuration}
              />
            </SettingsCard>
          </div>

          {/* 3. Payment Methods Option Layout */}
          <SettingsCard
            title="Payment & Subscription Options"
            subtitle="Available Payment Methods"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
              <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                <label className="flex items-center gap-3 cursor-pointer text-[13px] sm:text-[14px] font-bold text-black select-none">
                  <input
                    type="checkbox"
                    checked={creditCard}
                    onChange={() => setCreditCard(!creditCard)}
                    className="w-4 h-4 sm:w-5 sm:h-5 accent-[#1CC800] rounded-md"
                  />
                  Credit card
                </label>
                <label className="flex items-center gap-3 cursor-pointer text-[13px] sm:text-[14px] font-bold text-black select-none">
                  <input
                    type="checkbox"
                    checked={payPal}
                    onChange={() => setPayPal(!payPal)}
                    className="w-4 h-4 sm:w-5 sm:h-5 accent-[#1CC800] rounded-md"
                  />
                  PayPal
                </label>
              </div>
              <div className="flex justify-end mt-2 sm:mt-0">
                <SaveBtnSmall />
              </div>
            </div>
          </SettingsCard>

          {/* 4. Analytics & Toggles Container */}
          <SettingsCard
            title="Analytics & Match Settings"
            subtitle="Access to Analytics"
          >
            <div className="space-y-4 sm:space-y-5">
              <div className="flex justify-between items-center gap-4">
                <span className="text-[13px] sm:text-[14px] font-medium text-gray-700">
                  Organizer Analytics
                </span>
                <Toggle
                  enabled={organizerAnalytics}
                  onToggle={() => setOrganizerAnalytics(!organizerAnalytics)}
                />
              </div>
              <div className="flex justify-between items-center gap-4">
                <span className="text-[13px] sm:text-[14px] font-medium text-gray-700">
                  Player Analytics
                </span>
                <Toggle
                  enabled={playerAnalytics}
                  onToggle={() => setPlayerAnalytics(!playerAnalytics)}
                />
              </div>
              <div className="flex justify-between items-center gap-4">
                <span className="text-[13px] sm:text-[14px] font-medium text-gray-700 leading-normal">
                  Automatically Enable Analytics After Payment Done
                </span>
                <Toggle
                  enabled={autoAnalytics}
                  onToggle={() => setAutoAnalytics(!autoAnalytics)}
                />
              </div>
            </div>
          </SettingsCard>

          {/* Match Creation section */}
          <SettingsCard title="Match Creation Settings">
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <p className="text-[13px] sm:text-[14px] font-bold text-black mb-1">
                  Allow Match Creation
                </p>
                <p className="text-[12px] sm:text-[13px] text-gray-500 font-medium leading-normal">
                  Members can create matches and events
                </p>
              </div>
              <Toggle
                enabled={allowMatch}
                onToggle={() => setAllowMatch(!allowMatch)}
              />
            </div>
          </SettingsCard>

          {/* 5. Notifications section */}
          <SettingsCard title="Notifications & Alerts" subtitle="Notify">
            <div className="flex justify-between items-center gap-4">
              <span className="text-[12px] sm:text-[13px] md:text-[14px] text-gray-700 font-medium leading-relaxed">
                Send a notification to all Platinum members when the fee is
                updated.
              </span>
              <Toggle enabled={notify} onToggle={() => setNotify(!notify)} />
            </div>
          </SettingsCard>

          {/* Final Submit Button Container - Responsive width adjustment */}
          <div className="mt-8 sm:mt-10 lg:mt-12 w-full max-w-[500px] mx-auto">
            <button className="w-full bg-[#1CC800] text-white py-3 sm:py-4 rounded-xl text-[15px] sm:text-[16px] md:text-[18px] font-bold shadow-[0_4px_14px_rgba(28,200,0,0.2)] hover:bg-[#19b000] active:scale-[0.99] transition-all cursor-pointer border-none uppercase tracking-wide">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSetting;
