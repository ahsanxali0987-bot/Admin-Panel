import React from "react";

const ContentModerationData = [
  {
    id: "C001",
    type: "Image",
    uploadedby: "Admin",
    date: "Dec 25, 2024",
    flaggedcontent: "Abusive Language",
    status: "Pending",
  },
  {
    id: "C001",
    type: "Video",
    uploadedby: "User456",
    date: "Dec 25, 2024",
    flaggedcontent: "Inappropriate Content",
    status: "Approved",
  },
  {
    id: "C001",
    type: "Text",
    uploadedby: "Admin",
    date: "Dec 25, 2024",
    flaggedcontent: "Hate Speech",
    status: "Pending",
  },
  {
    id: "C001",
    type: "Image",
    uploadedby: "Admin",
    date: "Dec 25, 2024",
    flaggedcontent: "Abusive Language",
    status: "Approved",
  },
  {
    id: "C001",
    type: "Image",
    uploadedby: "Admin",
    date: "Dec 25, 2024",
    flaggedcontent: "Abusive Language",
    status: "Approved",
  },
];

const ContentModeration = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto bg-white rounded-xl sm:rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.06)] md:shadow-[0_0_12px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300">
      {/* Header - Fluid Padding & Typography across device viewports */}
      <div className="flex items-center justify-between py-3 px-4 sm:py-4 sm:px-5 lg:px-6 border-b border-[#e5e5e5]">
        {/* Responsive Heading size */}
        <h2 className="text-[15px] sm:text-[16px] md:text-[17px] xl:text-[19px] font-semibold text-[#000000E5]">
          Content Moderation
        </h2>

        {/* Responsive Button sizing and interactive state scaling */}
        <button className="text-[#e45252] border border-[#e45252] rounded-full px-4 sm:px-5 py-1 sm:py-1.5 font-medium text-xs sm:text-sm xl:text-base hover:bg-[#e45252]/5 transition-all duration-200 active:scale-95">
          View All
        </button>
      </div>

      {/* --- 1. MOBILE RESPONSIVE STACK LAYOUT --- */}
      <div className="block md:hidden divide-y divide-[#dfdfdf]">
        {ContentModerationData.map((item, index) => (
          <div
            key={index}
            className="p-4 flex flex-col gap-3 bg-white hover:bg-gray-50/40"
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="text-[10px] font-mono text-gray-400 block tracking-wider">
                  ID: #{item.id}
                </span>
                <h4 className="text-[14px] font-semibold text-black mt-0.5">
                  Type:{" "}
                  <span className="font-medium text-gray-700">{item.type}</span>
                </h4>
              </div>

              {/* Dynamic Status Badging */}
              <span
                className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                  item.status === "Approved"
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {item.status}
              </span>
            </div>

            {/* Modular Info Box */}
            <div className="grid grid-cols-2 gap-2 text-[12px] bg-gray-50 p-2.5 rounded-xl border border-gray-100">
              <div>
                <p className="text-gray-400 font-medium text-[9px] uppercase tracking-wider">
                  Flagged For
                </p>
                <p className="text-red-600 font-medium mt-0.5 truncate">
                  {item.flaggedcontent}
                </p>
              </div>
              <div>
                <p className="text-gray-400 font-medium text-[9px] uppercase tracking-wider text-right">
                  Uploaded By
                </p>
                <p className="text-gray-700 font-normal mt-0.5 text-right">
                  {item.uploadedby}
                </p>
                <p className="text-gray-400 text-[10px] text-right mt-0.5">
                  {item.date}
                </p>
              </div>
            </div>

            {/* Mobile Action Trigger */}
            <div className="flex justify-end pt-0.5">
              <button className="w-full sm:w-auto text-center bg-[#e45252] text-white rounded-full py-2 px-6 text-xs font-medium active:bg-[#c93d3d] shadow-sm">
                Review
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- 2. TABLE VIEW: TABLETS, LAPTOPS & WIDESCREEN PCs (md:block) --- */}
      <div className="hidden md:block overflow-x-auto w-full">
        <table className="w-full border-collapse table-auto">
          {/* Table Headings with responsive sizing multipliers */}
          <thead>
            <tr className="bg-gray-50/60 border-b border-[#dfdfdf]">
              <th className="py-3 px-3 lg:py-4 lg:px-4 xl:px-5 text-left text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-[#000000CC] tracking-wide">
                Content ID
              </th>
              <th className="py-3 px-3 lg:py-4 lg:px-4 xl:px-5 text-left text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-[#000000CC] tracking-wide">
                Content Type
              </th>
              <th className="py-3 px-3 lg:py-4 lg:px-4 xl:px-5 text-left text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-[#000000CC] tracking-wide">
                Uploaded By
              </th>
              <th className="py-3 px-3 lg:py-4 lg:px-4 xl:px-5 text-left text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-[#000000CC] tracking-wide">
                Date
              </th>
              <th className="py-3 px-3 lg:py-4 lg:px-4 xl:px-5 text-left text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-[#000000CC] tracking-wide">
                Flagged Content
              </th>
              <th className="py-3 px-3 lg:py-4 lg:px-4 xl:px-5 text-left text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-[#000000CC] tracking-wide">
                Status
              </th>
              <th className="py-3 px-3 lg:py-4 lg:px-4 xl:px-5 text-left text-[12px] lg:text-[13px] xl:text-[14px] font-medium text-[#000000CC] tracking-wide">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body - Scaled widths, pads, and heights across laptops & setups */}
          <tbody className="divide-y divide-[#dfdfdf]/60">
            {ContentModerationData.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50/40 transition-colors duration-150 group"
              >
                {/* Content ID */}
                <td className="py-3.5 px-4 lg:py-4 lg:px-5 xl:px-6 text-[12px] lg:text-[13px] xl:text-[14px] font-mono text-[#000000E5]">
                  {item.id}
                </td>

                {/* Content Type */}
                <td className="py-3.5 px-4 lg:py-4 lg:px-5 xl:px-6 text-[12px] lg:text-[13px] xl:text-[14px] font-normal text-[#000000E5] whitespace-nowrap">
                  {item.type}
                </td>

                {/* Uploaded By */}
                <td className="py-3.5 px-4 lg:py-4 lg:px-5 xl:px-6 text-[12px] lg:text-[13px] xl:text-[14px] font-normal text-[#000000E5] whitespace-nowrap">
                  {item.uploadedby}
                </td>

                {/* Date */}
                <td className="py-3.5 px-4 lg:py-4 lg:px-5 xl:px-6 text-[12px] lg:text-[13px] xl:text-[14px] font-normal text-[#000000E5] whitespace-nowrap">
                  {item.date}
                </td>

                {/* Flagged Content */}
                <td className="py-3.5 px-4 lg:py-4 lg:px-5 xl:px-6 text-[12px] lg:text-[13px] xl:text-[14px] font-normal text-[#000000E5]">
                  {item.flaggedcontent}
                </td>

                {/* Status */}
                <td className="py-3.5 px-4 lg:py-4 lg:px-5 xl:px-6 text-[12px] lg:text-[13px] xl:text-[14px] font-medium">
                  <span>{item.status}</span>
                </td>

                {/* Action button */}
                <td className="py-2 px-4 lg:py-3 lg:px-5 xl:px-6 whitespace-nowrap">
                  <button className="bg-[#e45252] text-white rounded-full py-1.5 px-5 lg:px-6 xl:px-7 text-xs lg:text-sm font-medium hover:bg-[#c93d3d] shadow-sm hover:shadow-md transition-all duration-200 active:scale-95">
                    Review
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

export default ContentModeration;
