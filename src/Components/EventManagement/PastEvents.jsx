import React from "react";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const PastEventsData = [
  {
    title: "Sports Run 2024",
    date: "Aug 15, 2024, 10:00 AM",
    location: "Central Park, NYC",
    totalrevenue: "$15,000",
  },
  {
    title: "Spring Gala 2024",
    date: "Aug 15, 2024, 10:00 AM",
    location: "Central Park, NYC",
    totalrevenue: "$20,000",
  },
  {
    title: "Sports Conference 2024",
    date: "Aug 15, 2024, 10:00 AM",
    location: "Central Park, NYC",
    totalrevenue: "$10,000",
  },
];

const PastEvents = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden w-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-5 border-b border-[#e5e5e5]">
        {/* Heading */}
        <h2 className="text-[16px] sm:text-[17px] font-semibold text-[#000000E5]">
          Past Events
        </h2>

        {/* Button */}
        <button className="text-[#e45252] border border-[#e45252] rounded-full px-4 sm:px-5 py-1.5 font-medium text-xs sm:text-sm hover:bg-[#e45252]/5 transition-colors">
          View All
        </button>
      </div>

      {/* --- MOBILE MODULAR STACK VIEW --- */}
      <div className="block md:hidden divide-y divide-[#dfdfdf]">
        {PastEventsData.map((item, index) => (
          <div key={index} className="p-4 flex flex-col gap-2.5 bg-white">
            <div className="flex justify-between items-start">
              <h4 className="text-[14px] font-semibold text-black leading-tight">
                {item.title}
              </h4>
              <span className="text-[12px] font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                {item.totalrevenue}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-1 text-[12px] text-gray-600">
              <p><span className="text-gray-400 font-medium">Date:</span> {item.date}</p>
              <p><span className="text-gray-400 font-medium">Location:</span> {item.location}</p>
            </div>

            <div className="flex justify-between items-center mt-1 pt-1 border-t border-gray-50">
              {/* Rating on Mobile */}
              <div className="flex items-center gap-0.5">
                <span className="text-[#ffdb20] flex items-center">
                  <FaStar size={12} /><FaStar size={12} /><FaStar size={12} />
                </span>
                <span className="flex items-center text-gray-200">
                  <CiStar size={14} /><CiStar size={14} />
                </span>
                <span className="text-xs text-gray-500 ml-1">(4.5)</span>
              </div>

              <button className="bg-[#e45252] text-white rounded-full py-1.5 px-4 text-xs font-medium active:bg-[#c93d3d]">
                View Details
              </button>
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
                Event Title
              </th>
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Date & Time
              </th>
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Location
              </th>
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Total Revenue
              </th>
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Players Ratings
              </th>
              <th className="py-3.5 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-[#dfdfdf]/60 border-t border-[#dfdfdf]">
            {PastEventsData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50/30 transition-colors">
                {/* Title */}
                <td className="py-4 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5]">
                  {item.title}
                </td>

                {/* Date */}
                <td className="py-4 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5] whitespace-nowrap">
                  {item.date}
                </td>

                {/* Location */}
                <td className="py-4 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5]">
                  {item.location}
                </td>

                {/* Total Revenue */}
                <td className="py-4 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5] whitespace-nowrap">
                  {item.totalrevenue}
                </td>

                {/* Rating */}
                <td className="py-4 px-5">
                  <div className="flex items-center gap-1 text-[13px] text-[#000000E5]">
                    <span className="text-[#ffdb20] flex items-center">
                      <FaStar /><FaStar /><FaStar />
                    </span>
                    <span className="flex items-center text-gray-300">
                      <CiStar /><CiStar />
                    </span>
                    <p className="ml-1 text-xs text-gray-500">(4.5)</p>
                  </div>
                </td>

                {/* Button */}
                <td className="py-3 px-5 whitespace-nowrap">
                  <button className="bg-[#e45252] text-white rounded-full py-1.5 px-5 text-xs lg:text-sm font-medium hover:bg-[#c93d3d] transition-colors">
                    View Details
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

export default PastEvents;