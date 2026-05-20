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
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-5 border border-white border-b-[#e5e5e5]">
        {/* Heading */}
        <h2 className="text-[17px] font-semibold text-[#000000E5]">
          Past Events
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
              Event Title
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Date & Time
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Location
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Total Revenue
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Players Ratings
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Action
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {PastEventsData.map((item, index) => (
            <tr key={index}>
              {/* Title */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {item.title}
              </td>

              {/* Date */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {item.date}
              </td>

              {/* Location */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {item.location}
              </td>

              {/* Total Revenue */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {item.totalrevenue}
              </td>

              {/* Rating */}
              <td className="flex gap-1 px-2 text-[13px] font-normal text-[#000000E5] pt-5  ">
                <span className="text-[#ffdb20] flex items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="flex items-center gap-1">
                  <CiStar />
                  <CiStar />
                </span>
                <p className="">(4.5)</p>
              </td>

              {/* Button */}
              <td className="py-2 px-5">
                <button className="bg-[#e45252] text-white rounded-full py-2 px-4 text-sm font-medium">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PastEvents;
