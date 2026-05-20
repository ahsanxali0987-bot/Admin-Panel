import React, { useState } from "react";

const notificationSections = [
  {
    title: "Platform Notifications",
    items: [
      "Notify me about new events, cancellations, and schedule changes.",
      "Receive email updates about event changes and new schedules.",
      "Show event update alerts within the app.",
    ],
  },
  {
    title: "User Alerts",
    items: [
      "Notify me when I receive new messages.",
      "Send me an email when I get a new message.",
      "Show in-app notifications for new messages.",
    ],
  },
  {
    title: "Event Notifications",
    items: [
      "Notify me about registration status and payment reminders.",
      "Send email reminders for registration deadlines and payment status.",
      "Show registration and payment alerts within the app.",
    ],
  },
];

const Toggle = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative inline-flex items-center w-[52px] h-[26px] rounded-full transition-colors duration-200 border-none cursor-pointer flex-shrink-0 ${
      enabled ? "bg-[#5ADB5A]" : "bg-gray-300"
    }`}
  >
    {/* ON label */}
    {enabled && (
      <span className="absolute left-[6px] text-white text-[9px] font-semibold tracking-wide">
        ON
      </span>
    )}
    {/* Knob */}
    <span
      className={`absolute top-[3px] w-5 h-5 bg-white rounded-full shadow transition-all duration-200 ${
        enabled ? "left-[28px]" : "left-[3px]"
      }`}
    />
  </button>
);

const Notifications = () => {
  // Build initial toggle state: all ON
  const initialState = notificationSections.reduce((acc, section) => {
    section.items.forEach((_, i) => {
      acc[`${section.title}-${i}`] = true;
    });
    return acc;
  }, {});

  const [toggles, setToggles] = useState(initialState);

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-[Poppins]">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E0E0E0]">
          <h1 className="text-[20px] font-semibold text-black/90 m-0">
            Notifications & Alerts
          </h1>
        </div>

        {/* Sections */}
        <div className="px-6 py-4 space-y-6">
          {notificationSections.map((section) => (
            <div key={section.title}>
              {/* Section Title */}
              <h2 className="text-[15px] font-semibold text-black mb-3 m-0">
                {section.title}
              </h2>

              {/* Items */}
              <div className="space-y-3">
                {section.items.map((item, i) => {
                  const key = `${section.title}-${i}`;
                  return (
                    <div
                      key={key}
                      className="flex items-center justify-between gap-4"
                    >
                      {/* Bullet + Text */}
                      <div className="flex items-center gap-2">
                        <span className="text-black text-[13px] leading-none">
                          •
                        </span>
                        <span className="text-[13px] font-normal text-black/80">
                          {item}
                        </span>
                      </div>

                      {/* Toggle */}
                      <Toggle
                        enabled={toggles[key]}
                        onToggle={() => handleToggle(key)}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Divider (except after last section) */}
              {section.title !== "Event Notifications" && (
                <div className="mt-5 border-b border-[#E0E0E0]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
