import React, { useState } from "react";
import { FeatureApprovalData } from "../Data/FeatureApproval";
import ApprovalTabs from "./ApprovalTabs";
import ModalContent from "./ModalContent";

const FeatureApproval = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Sort By");
  const [selected, setSelected] = useState(null);
  const [showReject, setShowReject] = useState(false);

  const closeAll = () => {
    setSelected(null);
    setShowReject(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-[Poppins] p-3 sm:p-5 md:p-6 lg:p-8 box-border">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="w-full max-w-[1450px] mx-auto bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-solid border-gray-100 overflow-hidden">
        {/* Render Extracted Tab Filters */}
        <ApprovalTabs
          sortBy={sortBy}
          sortOpen={sortOpen}
          setSortOpen={setSortOpen}
          setSortBy={setSortBy}
        />

        {/* ── Mobile Layout: Dynamic Response Cards (Hidden on Desktop) ── */}
        <div className="block md:hidden p-4 space-y-3.5">
          {FeatureApprovalData.map((row) => (
            <div
              key={row.id}
              className="bg-white border border-solid border-gray-100 p-4 rounded-xl shadow-xs space-y-3"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 m-0">
                    {row.name}
                  </h4>
                  <span className="text-[12px] font-medium text-gray-400 block mt-0.5">
                    {row.type}
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide bg-amber-50 text-amber-700 border border-solid border-amber-200">
                  {row.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 bg-gray-50 p-2.5 rounded-lg text-[13px]">
                <div>
                  <span className="text-gray-400 block text-[11px] uppercase font-medium">
                    Duration:
                  </span>{" "}
                  <span className="font-medium text-gray-800">
                    {row.duration}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[11px] uppercase font-medium text-right">
                    Amount:
                  </span>{" "}
                  <p className="font-bold text-gray-900 m-0 text-right">
                    {row.amount}
                  </p>
                </div>
              </div>

              <div className="flex gap-2 pt-1.5">
                <button
                  onClick={() => {
                    setSelected(row);
                    setShowReject(false);
                  }}
                  className="flex-1 py-2 text-xs font-bold rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 border-none cursor-pointer transition-colors"
                >
                  View Details
                </button>
                <button className="px-4 py-2 text-xs font-bold rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 border-none cursor-pointer transition-colors">
                  Accept
                </button>
                <button className="px-4 py-2 text-xs font-bold rounded-lg text-white bg-[#E45252] hover:bg-[#cc3e3e] border-none cursor-pointer transition-colors">
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Desktop Layout: Standard Structured Data Grid (Hidden on Mobile) ── */}
        <div className="hidden md:block overflow-x-auto w-full">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-50/70 border-b border-solid border-gray-100">
                {[
                  "User / Event Name",
                  "Type",
                  "Boost Duration",
                  "Amount Paid",
                  "Status",
                  "Action",
                ].map((h) => (
                  <th
                    key={h}
                    className={`px-5 py-3.5 text-[14px] font-semibold text-gray-500 ${h === "Action" ? "text-right pr-12" : ""}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {FeatureApprovalData.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-50/30 transition-colors"
                >
                  <td className="px-5 py-4 text-gray-900 font-bold text-[14px]">
                    {row.name}
                  </td>
                  <td className="px-5 py-4 text-gray-600 text-[14px]">
                    {row.type}
                  </td>
                  <td className="px-5 py-4 text-gray-600 text-[14px] font-medium">
                    {row.duration}
                  </td>
                  <td className="px-5 py-4 text-gray-900 text-[14px] font-semibold">
                    {row.amount}
                  </td>
                  <td className="px-5 py-4 text-[14px]">
                    <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-solid border-amber-200">
                      {row.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right pr-6">
                    <div className="inline-flex gap-2">
                      <button
                        onClick={() => {
                          setSelected(row);
                          setShowReject(false);
                        }}
                        className="px-4 py-1.5 text-xs font-bold rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200 border-none cursor-pointer transition-all"
                      >
                        View
                      </button>
                      <button className="px-4 py-1.5 text-xs font-bold rounded-full text-white bg-emerald-600 hover:bg-emerald-700 border-none cursor-pointer transition-all">
                        Accept
                      </button>
                      <button className="px-4 py-1.5 text-xs font-bold rounded-full text-white bg-[#E45252] hover:bg-[#cc3e3e] border-none cursor-pointer transition-all">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Modal Overlay Layer Portal ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
          onClick={closeAll}
        >
          <ModalContent
            row={selected}
            onClose={closeAll}
            showReject={showReject}
            setShowReject={setShowReject}
          />
        </div>
      )}
    </div>
  );
};

export default FeatureApproval;
