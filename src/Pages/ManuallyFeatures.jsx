import React, { useState } from "react";
import FeaturePlayer from "../Components/ManuallyFeatures/FeaturePlayer";
import FeatureOrganizer from "../Components/ManuallyFeatures/FeatureOrganizer";
import FeatureEvent from "../Components/ManuallyFeatures/FeatureEvent";

const TABS = [
  { id: "player", label: "Feature Player", component: <FeaturePlayer /> },
  {
    id: "organizer",
    label: "Feature Organizer",
    component: <FeatureOrganizer />,
  },
  { id: "event", label: "Feature Event", component: <FeatureEvent /> },
];

const ManuallyFeatures = ({ isOpen = true, onClose }) => {
  const [activeTab, setActiveTab] = useState("player");

  if (!isOpen) return null;

  const activeComponent = TABS.find((t) => t.id === activeTab)?.component;

  return (
    /* Backdrop */
    <div
      className="flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="bg-white rounded-xl w-full flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-900">
            Manually Feature
          </h2>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 px-5">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 text-[9px] md:text-[10px] lg:text-[13px] font-medium border-b-2 -mb-px transition-colors whitespace-nowrap
                ${
                  activeTab === tab.id
                    ? "border-black text-black"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="px-5 py-4 overflow-y-auto flex-1">
          {activeComponent}
        </div>
      </div>
    </div>
  );
};

export default ManuallyFeatures;
