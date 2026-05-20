import React from "react";

const QuotationList = ({ data, onSelect }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300">
      {/* Header */}
      <div className="px-4 py-3.5 sm:px-6 sm:py-4 border-b border-[#E0E0E0]">
        <h1 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-black/90 m-0">
          All Quotations
        </h1>
      </div>

      {/* --- MOBILE RESPONSIVE LIST CARD SYSTEM (md:hidden) --- */}
      <div className="block md:hidden divide-y divide-gray-100">
        {data.map((item) => (
          <div key={item.id} className="p-4 flex flex-col gap-3 bg-white active:bg-gray-50">
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-gray-400">No: #{item.id}</span>
              <button
                onClick={() => onSelect(item)}
                className="bg-[#E45252] text-white rounded-full text-[12px] font-medium px-4 py-1.5 hover:bg-[#d04444] transition-colors"
              >
                View Detail
              </button>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">Quotation Description</p>
              <p className="text-[14px] text-black/90 font-normal mt-0.5 line-clamp-2">{item.quotation}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- TABLE SYSTEM: SCALES ACROSS TABLETS, LAPTOPS & PCs (md:block) --- */}
      <div className="hidden md:block overflow-x-auto w-full">
        <table className="w-full border-collapse table-auto">
          <thead>
            <tr className="bg-gray-50/70 border-b border-gray-100">
              <th className="py-3 px-4 lg:px-6 text-left text-[14px] lg:text-[16px] font-semibold text-black w-24">
                No
              </th>
              <th className="py-3 px-4 lg:px-6 text-left text-[14px] lg:text-[16px] font-semibold text-black">
                Quotation
              </th>
              <th className="py-3 px-4 lg:px-6 text-left text-[14px] lg:text-[16px] font-semibold text-black w-36">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50/50 transition-colors duration-100 group"
              >
                <td className="py-3.5 px-4 lg:px-6 text-[13px] lg:text-[14px] font-mono text-black/90">
                  {item.id}
                </td>
                <td className="py-3.5 px-4 lg:px-6 text-[13px] lg:text-[14px] font-normal text-black/80">
                  {item.quotation}
                </td>
                <td className="py-2 px-4 lg:px-6 whitespace-nowrap">
                  <button
                    onClick={() => onSelect(item)}
                    className="bg-[#E45252] text-white rounded-full text-[13px] lg:text-[14px] font-medium px-4 py-1.5 lg:px-5 lg:py-2 cursor-pointer hover:bg-[#d04444] transition-all active:scale-95 shadow-sm"
                  >
                    View Detail
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

export default QuotationList;