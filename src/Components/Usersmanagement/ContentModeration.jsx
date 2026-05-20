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
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)]">
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-5 border border-white border-b-[#e5e5e5]">
        {/* Heading */}
        <h2 className="text-[17px] font-semibold text-[#000000E5]">
          Content Moderation
        </h2>

        {/* Button */}
        <button className="text-[#e45252] border border-[#e45252] rounded-full px-5 py-1.5 font-medium text-sm">
          View All
        </button>
      </div>
      {/* Table */}
      <table className="w-full border-collapse">
        {/* Table body */}
        <thead>
          {/* Table heading */}
          <tr>
            <th className="py-1 px-3 text-left text-[16px] font-medium text-[#000000CC]">
              Content ID
            </th>
            <th className="py-1 px-3 text-left text-[16px] font-medium text-[#000000CC]">
              Content Type
            </th>
            <th className="py-1 px-3 text-left text-[16px] font-medium text-[#000000CC]">
              Uploded By
            </th>
            <th className="py-1 px-3 text-left text-[16px] font-medium text-[#000000CC]">
              Date
            </th>
            <th className="py-1 px-3 text-left text-[16px] font-medium text-[#000000CC]">
              Flagged Content
            </th>
            <th className="py-1 px-3 text-left text-[16px] font-medium text-[#000000CC]">
              Status
            </th>
            <th className="py-1 px-3 text-left text-[16px] font-medium text-[#000000CC]">
              Action
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {ContentModerationData.map((item, index) => (
            <tr className="relative" key={index}>
              {/* Content ID */}
              <td className="px-3 text-[13px] font-normal text-[#000000E5]">
                {item.id}
              </td>

              {/* Content Type */}
              <td className="px-3 text-[13px] font-normal text-[#000000E5]">
                {item.type}
              </td>

              {/* Uploded By */}
              <td className="px-3 text-[13px] font-normal text-[#000000E5]">
                {item.uploadedby}
              </td>

              {/* Date */}
              <td className="px-3 text-[13px] font-normal text-[#000000E5]">
                {item.date}
              </td>

              {/* Flagged Content */}
              <td className="px-3 text-[13px] font-normal text-[#000000E5]">
                {item.flaggedcontent}
              </td>

              {/* Status */}
              <td className="px-3 text-[13px] font-normal text-[#000000E5]">
                {item.status}
              </td>

              {/* Button */}
              <td className="px-3 py-4">
                <div className="flex gap-2">
                  <button className="bg-[#e45252] text-white rounded-full py-2 px-[30px] text-[14px] font-medium">
                    Review
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentModeration;
