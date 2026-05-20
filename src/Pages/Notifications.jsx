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

const Notifications = () => {
  // Initial state logic build: saare alerts default ON rahenge
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
    <div className="min-h-screen bg-[#F5F5F5] font-[Poppins] flex justify-center items-start">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Main Container - Automatically scales up to 1000px max layout limits */}
      <div className="w-full max-w-[1000px] bg-white rounded-xl sm:rounded-2xl shadow-[0_0_12px_rgba(0,0,0,0.06)] border border-gray-100/40 overflow-hidden transition-all duration-300">
        
        {/* Module Header Area */}
        <div className="px-4 py-4 sm:px-6 sm:py-5 lg:px-8 border-b border-[#E0E0E0]">
          <h1 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-semibold text-black/95 m-0 tracking-wide">
            Notifications & Alerts
          </h1>
        </div>

        {/* Categories Structural Block Container */}
        <div className="px-4 py-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
          {notificationSections.map((section, sectionIdx) => (
            <div key={section.title}>
              
              {/* Category Heading Title */}
              <h2 className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-semibold text-black mb-3 sm:mb-4 m-0 tracking-tight">
                {section.title}
              </h2> 

              {/* Items Container List */}
              <div className="space-y-3 sm:space-y-4">
                {section.items.map((item, i) => {
                  const key = `${section.title}-${i}`;
                  const isEnabled = toggles[key];

                  return (
                    <div 
                      key={key} 
                      className="flex items-start justify-between gap-4 py-1.5 sm:py-1"
                    >
                      {/* Bullet Icon + Description - items-start ensures clear top alignment if text wraps */}
                      <div className="flex items-start gap-2.5 pt-0.5 sm:pt-0">
                        <span className="text-gray-400 text-[14px] sm:text-[16px] leading-none select-none">
                          •
                        </span>
                        <span className="text-[12.5px] sm:text-[13.5px] md:text-[14.5px] font-normal text-black/80 leading-relaxed max-w-[90%] w-full">
                          {item}
                        </span>
                      </div>

                      {/* INTERNAL TOGGLE SWITCH COMPONENT */}
                      <button
                        onClick={() => handleToggle(key)}
                        className={`relative inline-flex items-center w-[46px] sm:w-[52px] h-[22px] sm:h-[26px] rounded-full transition-colors duration-200 border-none cursor-pointer flex-shrink-0 focus:outline-none select-none ${
                          isEnabled ? "bg-[#5ADB5A]" : "bg-gray-300"
                        }`}
                      >
                        {/* ON Label: Text collapses dynamically */}
                        {isEnabled && (
                          <span className="absolute left-[5px] sm:left-[6px] text-white text-[8px] sm:text-[9px] font-semibold tracking-wide">
                            ON
                          </span>
                        )}
                        {/* Sliding Knob */}
                        <span
                          className={`absolute top-[2px] sm:top-[3px] w-[18px] sm:w-5 h-[18px] sm:h-5 bg-white rounded-full shadow transition-all duration-200 ${
                            isEnabled ? "left-[25px] sm:left-[28px]" : "left-[3px]"
                          }`}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Border Divider */}
              {sectionIdx !== notificationSections.length - 1 && (
                <div className="mt-6 sm:mt-8 border-b border-[#E0E0E0]/80" />
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Notifications;