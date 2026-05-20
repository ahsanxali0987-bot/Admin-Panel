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
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden w-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-5 border-b border-[#e5e5e5]">
        {/* Heading */}
        <h2 className="text-[16px] sm:text-[17px] font-semibold text-[#000000E5]">
          Event Approvals
        </h2>

        {/* Button */}
        <button className="text-[#e45252] border border-[#e45252] rounded-full px-4 sm:px-5 py-1.5 font-medium text-xs sm:text-sm hover:bg-[#e45252]/5 transition-colors">
          View All
        </button>
      </div>

      {/* --- MOBILE MODULAR STACK VIEW --- */}
      <div className="block md:hidden divide-y divide-[#dfdfdf]">
        {ApprovalsData.map((item, index) => (
          <div
            key={index}
            className="p-4 flex flex-col gap-2.5 bg-white relative"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-[14px] font-semibold text-black leading-tight">
                  {item.title}
                </h4>
                <p className="text-[12px] text-gray-500 mt-0.5">
                  By {item.name}
                </p>
              </div>
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700 flex-shrink-0">
                {item.staus}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[12px] bg-gray-50 p-2.5 rounded-xl border border-gray-100">
              <div>
                <p className="text-gray-400 font-medium text-[10px] uppercase tracking-wider">
                  Proposed Date
                </p>
                <p className="text-gray-700 font-normal mt-0.5">{item.date}</p>
              </div>
              <div>
                <p className="text-gray-400 font-medium text-[10px] uppercase tracking-wider text-right">
                  Location
                </p>
                <p className="text-gray-700 font-normal mt-0.5 text-right truncate">
                  {item.location}
                </p>
              </div>
            </div>

            {/* Actions & Popup Panel */}
            <div className="flex flex-col gap-3 mt-1">
              <div className="flex gap-2 justify-end">
                <button className="bg-[#e45252] text-white rounded-full py-1.5 px-4 text-xs font-medium active:bg-[#c93d3d]">
                  View Details
                </button>

                <button
                  onClick={() => setOpenCard(openCard === index ? null : index)}
                  className="bg-[#e45252] text-white rounded-full py-1.5 px-6 text-xs font-medium active:bg-[#c93d3d]"
                >
                  Reject
                </button>
              </div>

              {/* Mobile Reason Card Box */}
              {openCard === index && (
                <div className="w-full bg-white rounded-xl border border-[#d9d9d9] p-3 shadow-md mt-1 animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <h3 className="text-[10px] font-bold text-gray-700 tracking-wider">
                      ADD REASON
                    </h3>
                    <button
                      onClick={() => setOpenCard(null)}
                      className="bg-[#e45252] text-white rounded-full p-1"
                    >
                      <IoClose size={14} />
                    </button>
                  </div>
                  <div className="mt-2">
                    <textarea
                      placeholder="Type Here........."
                      rows={3}
                      className="w-full bg-[#f3eded] rounded-lg outline-none resize-none text-[12px] p-2.5 placeholder:text-[#7d7d7d] border border-transparent focus:border-gray-300 transition-all"
                    />
                    <div className="flex justify-center mt-2">
                      <button className="bg-[#e45252] text-white text-[11px] px-6 py-1.5 rounded-full font-medium w-full sm:w-auto">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* --- DESKTOP TABLE VIEW --- */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Table body */}
          <thead>
            {/* Table heading */}
            <tr className="bg-gray-50/50">
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Organizer Name
              </th>
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Event Title
              </th>
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Proposed Date
              </th>
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Location
              </th>
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Status
              </th>
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-[#dfdfdf]/60 border-t border-[#dfdfdf]">
            {ApprovalsData.map((item, index) => (
              <tr
                className="relative hover:bg-gray-50/30 transition-colors"
                key={index}
              >
                {/* organizer Name */}
                <td className="py-4 px-5 text-[13px] font-normal text-[#000000E5] whitespace-nowrap">
                  {item.name}
                </td>

                {/* Event Title */}
                <td className="py-4 px-5 text-[13px] font-normal text-[#000000E5]">
                  {item.title}
                </td>

                {/* Proposed Date */}
                <td className="py-4 px-5 text-[13px] font-normal text-[#000000E5] whitespace-nowrap">
                  {item.date}
                </td>

                {/* Location */}
                <td className="py-4 px-5 text-[13px] font-normal text-[#000000E5]">
                  {item.location}
                </td>

                {/* Status */}
                <td className="py-4 px-5 text-[13px] font-normal text-[#000000E5]">
                  <span className="font-medium">
                    {item.staus}
                  </span>
                </td>

                {/* Button */}
                <td className="px-5 py-4 whitespace-nowrap">
                  <div className="flex gap-2">
                    <button className="bg-[#e45252] text-white rounded-full py-2 px-4 text-[13px] font-medium hover:bg-[#c93d3d] transition-colors">
                      View Details
                    </button>

                    <button
                      onClick={() =>
                        setOpenCard(openCard === index ? null : index)
                      }
                      className="bg-[#e45252] text-white rounded-full py-2 px-6 text-[13px] font-medium hover:bg-[#c93d3d] transition-colors"
                    >
                      Reject
                    </button>
                  </div>

                  {/* Reason Card */}
                  {openCard === index && (
                    <div className="absolute top-14 right-5 bg-white w-[170px] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-[#d9d9d9] z-50 p-3">
                      {/* Header */}
                      <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
                        <h3 className="text-[10px] font-bold text-gray-700 tracking-wider">
                          ADD REASON
                        </h3>

                        <button
                          onClick={() => setOpenCard(null)}
                          className="bg-[#e45252] text-white rounded-full p-0.5 transition-transform active:scale-95"
                        >
                          <IoClose size={13} />
                        </button>
                      </div>

                      {/* Textarea Input Form */}
                      <div className="mt-2 flex flex-col gap-2">
                        <textarea
                          placeholder="Type Here........."
                          rows={4}
                          className="w-full bg-[#f3eded] rounded-lg outline-none resize-none text-[11px] p-2 placeholder:text-[#7d7d7d] border border-transparent focus:border-gray-300 transition-all"
                        />

                        {/* Submit Button */}
                        <button className="bg-[#e45252] text-white text-[10px] py-1.5 rounded-full font-medium active:bg-[#c93d3d] transition-colors">
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Approvals;
