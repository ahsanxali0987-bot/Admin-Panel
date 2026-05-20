import React from "react";
import { IoFilterOutline } from "react-icons/io5";

const ApprovalTabs = ({
  activeTab = "Pending",
  sortBy,
  sortOpen,
  setSortOpen,
  setSortBy,
}) => {
  const tabs = ["Pending Requests", "Approved Features", "Rejected Requests"];
  const sortOptions = ["Newest", "Oldest", "Highest Price", "Expiring Soon"];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 bg-white px-2 sm:px-4 gap-3">
      {/* Scrollable Tabs Wrapper */}
      <div className="flex items-center overflow-x-auto no-scrollbar -mb-px w-full sm:w-auto">
        {tabs.map((tab) => {
          const isActive = tab.startsWith(activeTab);
          return (
            <button
              key={tab}
              className={`px-4 sm:px-5 py-3 text-[14px] sm:text-[15px] font-semibold whitespace-nowrap border-none bg-transparent cursor-pointer transition-all ${
                isActive
                  ? "border-b-2 border-solid border-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Dropdown Action Wrapper */}
      <div className="relative self-end sm:self-center pb-2 sm:pb-0 pr-2">
        <button
          onClick={() => setSortOpen(!sortOpen)}
          className="flex items-center gap-1.5 border border-solid border-gray-300 hover:border-black rounded-xl px-3 py-1.5 text-[13px] font-medium text-black bg-white cursor-pointer transition-colors"
        >
          <IoFilterOutline className="text-sm" /> {sortBy}
        </button>

        {sortOpen && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setSortOpen(false)}
            />
            <div className="absolute right-0 top-full mt-1.5 w-40 bg-white border border-solid border-gray-200 rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] z-50 p-1.5 animate-in fade-in slide-in-from-top-1 duration-150">
              {sortOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => {
                    setSortBy(opt);
                    setSortOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-[13px] border-none rounded-lg cursor-pointer transition-colors ${
                    sortBy === opt
                      ? "text-[#E45252] bg-red-50/50 font-semibold"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ApprovalTabs;
