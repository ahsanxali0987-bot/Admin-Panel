import React from "react";

const PendingRequestsTable = ({ data, onAccept, onReject, onView }) => {
  const pendingData = data.filter(
    (row) => !row.status || row.status.toLowerCase() === "pending",
  );

  return (
    <div className="w-full font-[Poppins]">
      {/* ── Mobile Layout: Responsive Card View (Hidden on Desktop) ── */}
      <div className="block md:hidden p-4 space-y-4">
        {pendingData.map((row) => (
          <div
            key={row.id}
            className="bg-white border border-solid border-gray-100 p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-3"
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
                Pending
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 bg-gray-50 p-2.5 rounded-lg text-[13px]">
              <div>
                <span className="text-gray-400 block text-[11px] uppercase font-medium">
                  Duration:
                </span>
                <span className="font-medium text-gray-800">
                  {row.duration || "30 Days"}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block text-[11px] uppercase font-medium text-right">
                  Amount:
                </span>
                <p className="font-bold text-gray-900 m-0 text-right">
                  {row.amount || "$20"}
                </p>
              </div>
            </div>

            {/* Figma Action Buttons Setup for Mobile */}
            <div className="flex justify-end gap-2 pt-1">
              <button
                onClick={() => onView(row)}
                className="px-4 py-2 text-xs font-bold rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 border-none cursor-pointer transition-colors"
              >
                View
              </button>
              <button
                onClick={() => onAccept(row)}
                className="px-4 py-2 text-xs font-bold rounded-full bg-emerald-600 text-white hover:bg-emerald-700 border-none cursor-pointer transition-colors"
              >
                Accept
              </button>
              <button
                onClick={() => onReject(row)}
                className="px-4 py-2 text-xs font-bold rounded-full bg-[#E45252] text-white hover:bg-[#cc3e3e] border-none cursor-pointer transition-colors"
              >
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
            <tr className="bg-white border-b border-solid border-gray-100">
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
                  className={`px-6 py-4 text-[14px] font-semibold text-gray-900 ${
                    h === "Action" ? "text-right pr-20" : ""
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {pendingData.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50/30 transition-colors"
              >
                <td className="px-6 py-4.5 font-bold text-[14px] text-gray-900">
                  {row.name}
                </td>
                <td className="px-6 py-4.5 text-[14px] text-gray-600">
                  {row.type}
                </td>
                <td className="px-6 py-4.5 text-[14px] text-gray-600 font-medium">
                  {row.duration || "30 Days"}
                </td>
                <td className="px-6 py-4.5 text-[14px] text-gray-900 font-semibold">
                  {row.amount || "$20"}
                </td>
                <td className="px-6 py-4.5 text-[14px]">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-solid border-amber-200">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-3 text-right pr-8">
                  <div className="inline-flex gap-2">
                    <button
                      onClick={() => onView(row)}
                      className="px-4 py-1.5 text-xs font-bold rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 border-none cursor-pointer transition-all"
                    >
                      View
                    </button>
                    <button
                      onClick={() => onAccept(row)}
                      className="px-4 py-1.5 text-xs font-bold rounded-full text-white bg-emerald-600 hover:bg-emerald-700 border-none cursor-pointer transition-all"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => onReject(row)}
                      className="px-4 py-1.5 text-xs font-bold rounded-full text-white bg-[#E45252] hover:bg-[#cc3e3e] border-none cursor-pointer transition-all"
                    >
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
  );
};

export default PendingRequestsTable;
