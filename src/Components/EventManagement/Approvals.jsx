import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const ApprovalsData = [
  {
    name: "John Doe",
    title: "Sports Run 2024",
    date: "Sep 5,2024",
    location: "Riverbank, Chicago",
    staus: "Approved",
  },
  {
    name: "John Doe",
    title: "Winter Tournament 2024",
    date: "Sep 5,2024",
    location: "Riverbank, Chicago",
    staus: "Approved",
  },
  {
    name: "John Doe",
    title: "Spring Gala 2024",
    date: "Sep 5,2024",
    location: "Riverbank, Chicago",
    staus: "Approved",
  },
  {
    name: "John Doe",
    title: "Sports Conference 2024",
    date: "Sep 5,2024",
    location: "Riverbank, Chicago",
    staus: "Approved",
  },
];

const Approvals = () => {
  const [openCard, setOpenCard] = useState(null);

  return (
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)]">
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-5 border border-white border-b-[#e5e5e5]">
        {/* Heading */}
        <h2 className="text-[17px] font-semibold text-[#000000E5]">
          Event Approvals
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
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Organizer Name
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Event Title
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Proposed Date
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Location
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Status
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Action
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {ApprovalsData.map((item, index) => (
            <tr className="relative" key={index}>
              {/* organizer Name */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {item.name}
              </td>

              {/* Event Title */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {item.title}
              </td>

              {/* Proposed Date */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {item.date}
              </td>

              {/* Location */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {item.location}
              </td>

              {/* Status */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {item.staus}
              </td>

              {/* Button */}
              <td className="px-5 py-4">
                <div className="flex gap-2">
                  <button className="bg-[#e45252] text-white rounded-full py-2 px-4 text-[14px] font-medium">
                    View Details
                  </button>

                  <button
                    onClick={() =>
                      setOpenCard(openCard === index ? null : index)
                    }
                    className="bg-[#e45252] text-white rounded-full py-2 px-[30px] text-[14px] font-medium"
                  >
                    Reject
                  </button>
                </div>

                {/* Reason Card */}
                {openCard === index && (
                  <div className="absolute top-12 right-24 bg-white w-[160px] h-[180px] rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.08)] border border-[#d9d9d9] z-50">
                    {/* Header */}
                    <div className="flex items-center justify-center relative py-2">
                      <h3 className="text-[9px] font-medium text-[#000000]">
                        ADD REASON
                      </h3>

                      <button
                        onClick={() => setOpenCard(null)}
                        className="absolute right-2 top-2 bg-[#e45252] text-white rounded-full p-[2px]"
                      >
                        <IoClose size={15} />
                      </button>
                    </div>

                    {/* Textarea */}
                    <div className="px-3 mt-1">
                      <input
                        placeholder="Type Here........."
                        className="w-full h-[100px] bg-[#f3eded] rounded-lg outline-none resize-none text-[11px] p-2 placeholder:text-[#7d7d7d] shadow-[0_0_10px_rgba(0,0,0,0.08)]"
                      />

                      {/* Submit Button */}
                      <div className="flex justify-center mt-1">
                        <button className="bg-[#e45252] text-white text-[10px] px-6 py-1.5 rounded-full">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Approvals;
