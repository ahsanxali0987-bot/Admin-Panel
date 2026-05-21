import React from "react";

const ApprovedFeaturesTable = ({ data, onRevoke }) => {
  const approvedData = data.filter(
    (row) =>
      row.status && row.status.toLowerCase() !== "pending" && !row.rejectReason,
  );

  return (
    <div className="w-full font-[Poppins]">
      {/* ── Mobile Layout ── */}
      <div className="block md:hidden p-4 space-y-4">
        {approvedData.map((row) => (
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
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  row.status === "Active"
                    ? "bg-green-50 text-green-700 border border-solid border-green-200"
                    : "bg-blue-50 text-blue-700 border border-solid border-blue-200"
                }`}
              >
                {row.status === "Active" && (
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                )}
                {row.status}
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

            <button
              onClick={() => onRevoke(row.id)}
              className="w-full py-2 text-xs font-bold rounded-full text-white bg-[#E45252] hover:bg-[#cc3e3e] border-none cursor-pointer transition-colors"
            >
              Revoke
            </button>
          </div>
        ))}
      </div>

      {/* ── Desktop Layout ── */}
      <div className="hidden md:block overflow-x-auto w-full">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-white border-b border-solid border-gray-100">
              {[
                "User/Event Name",
                "Type",
                "Boost Duration",
                "Amount Paid",
                "Status",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="px-6 py-4 text-[14px] font-semibold text-gray-900"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {approvedData.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50/40 transition-colors"
              >
                <td className="px-6 py-4.5 text-[14px] text-gray-900 font-medium">
                  {row.name}
                </td>
                <td className="px-6 py-4.5 text-[14px] text-gray-600">
                  {row.type}
                </td>
                <td className="px-6 py-4.5 text-[14px] text-gray-600">
                  {row.duration || "30 Days"}
                </td>
                <td className="px-6 py-4.5 text-[14px] text-gray-900 font-medium">
                  {row.amount || "$20"}
                </td>
                <td className="px-6 py-4.5 text-[14px]">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      row.status === "Active"
                        ? "bg-green-50 text-green-700 border border-solid border-green-200"
                        : "bg-blue-50 text-blue-700 border border-solid border-blue-200"
                    }`}
                  >
                    {row.status === "Active" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    )}
                    {row.status}
                  </span>
                </td>
                <td className="px-6 py-3">
                  <button
                    onClick={() => onRevoke(row.id)}
                    className="px-6 py-1.5 text-xs font-semibold rounded-full text-white bg-[#E45252] hover:bg-[#cc3e3e] border-none cursor-pointer transition-colors"
                  >
                    Revoke
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedFeaturesTable;
