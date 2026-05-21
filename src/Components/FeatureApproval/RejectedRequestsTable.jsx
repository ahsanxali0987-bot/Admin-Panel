import React from "react";

const RejectedRequestsTable = ({ data, onRestore }) => {
  const rejectedData = data.filter((row) => row.rejectReason);

  return (
    <div className="w-full font-[Poppins]">
      {/* ── Mobile Layout ── */}
      <div className="block md:hidden p-4 space-y-4">
        {rejectedData.map((row) => (
          <div
            key={row.id}
            className="bg-white border border-solid border-gray-100 p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-3"
          >
            <div className="flex justify-between items-center border-b border-solid border-gray-50 pb-2">
              <span className="text-[12px] font-bold text-red-500 bg-red-50 px-2.5 py-0.5 rounded-md">
                Rejected Request
              </span>
              <span className="text-[11px] font-medium text-gray-400">
                {row.name}
              </span>
            </div>

            <div className="text-[13px] text-gray-700 bg-gray-50/50 p-3 rounded-lg border border-solid border-gray-100 leading-relaxed">
              <span className="text-gray-400 block text-[10px] uppercase font-bold tracking-wider mb-1">
                Reason To Reject:
              </span>
              {row.rejectReason}
            </div>

            <button
              onClick={() => onRestore(row.id)}
              className="w-full py-2 text-xs font-bold rounded-full text-white bg-[#E45252] hover:bg-[#cc3e3e] border-none cursor-pointer transition-colors"
            >
              Restore Request
            </button>
          </div>
        ))}
      </div>

      {/* ── Desktop Layout ── */}
      <div className="hidden md:block overflow-x-auto w-full">
        <table className="w-full border-collapse text-left table-fixed">
          <thead>
            <tr className="bg-white border-b border-solid border-gray-100">
              <th className="px-8 py-4 text-[14px] font-semibold text-gray-900 w-[75%]">
                Reason To Reject
              </th>
              <th className="px-8 py-4 text-[14px] font-semibold text-gray-900 text-center w-[25%]">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {rejectedData.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50/20 transition-colors"
              >
                <td className="px-8 py-5 text-[13.5px] text-gray-600 font-normal leading-relaxed pr-12 whitespace-normal break-words">
                  {row.rejectReason}
                </td>
                <td className="px-8 py-5 text-center">
                  <button
                    onClick={() => onRestore(row.id)}
                    className="px-6 py-2 text-xs font-bold rounded-full text-white bg-[#E45252] hover:bg-[#cc3e3e] border-none cursor-pointer transition-colors whitespace-nowrap"
                  >
                    Restore Request
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

export default RejectedRequestsTable;
