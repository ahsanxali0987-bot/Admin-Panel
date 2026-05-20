import React, { useState } from "react";

const Toggle = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative inline-flex items-center w-[52px] h-[26px] rounded-full transition-colors duration-200 border-none cursor-pointer flex-shrink-0 ${
      enabled ? "bg-[#1CC800]" : "bg-gray-200"
    }`}
  >
    {enabled && (
      <span className="absolute left-[6px] text-white text-[9px] font-semibold tracking-wide">
        ON
      </span>
    )}
    <span
      className={`absolute top-[3px] w-5 h-5 bg-white rounded-full shadow transition-all duration-200 ${
        enabled ? "left-[28px]" : "left-[3px]"
      }`}
    />
  </button>
);

const SaveBtnSmall = () => (
  <button className="bg-[#1CC800] text-white text-[14px] font-semibold h-[42px] px-6 rounded-lg border-none cursor-pointer hover:bg-[#19b000] transition-colors shadow-[0_0_10px_rgba(0,0,0,0.08)]">
    Save
  </button>
);

const InputField = ({ label, value, onChange }) => (
  <div className="mb-4 last:mb-0">
    <p className="text-[14px] font-semibold text-black mb-2">{label}</p>
    <div className="flex gap-3 items-center">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 h-[42px] border border-[#E0E0E0] rounded-lg px-4 text-[14px] text-black outline-none focus:border-[#1CC800] bg-white shadow-inner"
      />
      <SaveBtnSmall />
    </div>
  </div>
);

const SettingsCard = ({ title, children, subtitle, noPadding = false }) => (
  <div className="mb-8">
    <h3 className="text-[17px] font-bold text-black mb-4">{title}</h3>
    <div
      className={`bg-white border border-gray-100 rounded-xl shadow-[0px_2px_10px_rgba(0,0,0,0.04)] ${noPadding ? "" : "p-6"}`}
    >
      {subtitle && (
        <p className="text-[14px] font-bold text-black mb-4">{subtitle}</p>
      )}
      {children}
    </div>
  </div>
);

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
    <div className="bg-[#F9FAFB] min-h-screen font-['Poppins']">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
        {/* Main Header */}
        <div className="px-8 py-5 border-b border-[#F0F0F0]">
          <h1 className="text-[22px] font-bold text-black/90">
            Platinum Partner Membership Settings
          </h1>
        </div>

        <div className="p-8">
          {/* 1. Benefits Section */}
          <section className="mb-10">
            <h2 className="text-[18px] font-bold text-black mb-4">
              Membership Settings
            </h2>
            <p className="text-[15px] font-bold text-black/80 mb-3">Benefits</p>
            <div className="p-6 bg-white border border-[#E0E0E0] rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.08)]">
              <div className="space-y-3 text-[14px] font-semibold text-gray-800">
                <p>
                  Access to Player & Match Analytics (Views, Engagement,
                  Registrations)
                </p>
                <p>Ability to Organize Matches & Events</p>
                <p>Automatically Featured Every Month for 3 Days</p>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 font-medium">
                  <li>
                    Their profile will be highlighted as a "Featured Organizer"
                  </li>
                  <li>More visibility to players looking for events</li>
                  <li>Appears at the top of the organizer list</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. General Settings (Pricing) */}
          <h2 className="text-[18px] font-bold text-black mb-4">
            General Settings:
          </h2>

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

          {/* 3. Payment Methods */}
          <SettingsCard
            title="Payment & Subscription Options"
            subtitle="Available Payment Methods"
          >
            <div className="flex flex-wrap items-center gap-8">
              <label className="flex items-center gap-3 cursor-pointer text-[14px] font-bold text-black">
                <input
                  type="checkbox"
                  checked={creditCard}
                  onChange={() => setCreditCard(!creditCard)}
                  className="w-5 h-5 accent-[#1CC800] rounded-md"
                />
                Credit card
              </label>
              <label className="flex items-center gap-3 cursor-pointer text-[14px] font-bold text-black">
                <input
                  type="checkbox"
                  checked={payPal}
                  onChange={() => setPayPal(!payPal)}
                  className="w-5 h-5 accent-[#1CC800] rounded-md"
                />
                Pay Pal
              </label>
              <div className="ml-auto">
                <SaveBtnSmall />
              </div>
            </div>
          </SettingsCard>

          {/* 4. Analytics & Match Toggle Settings */}
          <SettingsCard
            title="Analytics & Match Settings"
            subtitle="Access to Analytics"
          >
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-[14px] font-medium text-gray-700">
                  Organizer Analytics
                </span>
                <Toggle
                  enabled={organizerAnalytics}
                  onToggle={() => setOrganizerAnalytics(!organizerAnalytics)}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[14px] font-medium text-gray-700">
                  Player Analytics
                </span>
                <Toggle
                  enabled={playerAnalytics}
                  onToggle={() => setPlayerAnalytics(!playerAnalytics)}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[14px] font-medium text-gray-700">
                  Automatically Enable Analytics After Payment Done
                </span>
                <Toggle
                  enabled={autoAnalytics}
                  onToggle={() => setAutoAnalytics(!autoAnalytics)}
                />
              </div>
            </div>
          </SettingsCard>

          <SettingsCard title="Match Creation Settings">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[14px] font-bold text-black mb-1">
                  Allow Match Creation
                </p>
                <p className="text-[13px] text-gray-500 font-medium">
                  Members Can create matches and events
                </p>
              </div>
              <Toggle
                enabled={allowMatch}
                onToggle={() => setAllowMatch(!allowMatch)}
              />
            </div>
          </SettingsCard>

          {/* 5. Notifications */}
          <SettingsCard title="Notifications & Alerts" subtitle="Notify">
            <div className="flex justify-between items-center gap-4">
              <span className="text-[14px] text-gray-700 font-medium leading-relaxed">
                Send a notification to all Platinum members when the fee is
                updated.
              </span>
              <Toggle enabled={notify} onToggle={() => setNotify(!notify)} />
            </div>
          </SettingsCard>

          {/* Final Submit Button */}
          <div className="mt-12 w-[500px] m-auto">
            <button className="w-full bg-[#1CC800] text-white py-4 rounded-xl text-[18px] font-bold shadow-[0_0_10px_rgba(0,0,0,0.08)] shadow-green-100 hover:bg-[#19b000] transition-all cursor-pointer border-none uppercase tracking-wide">
              Save Setting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSetting;
