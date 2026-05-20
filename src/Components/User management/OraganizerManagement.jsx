import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const OraganizerManagementData = {
  // FIXED: Updated text values to reflect Organizers instead of Players
  Buttons: [
    {
      icon: <SlCalender />,
      text: "Active Organizers",
      number: 150,
    },
    {
      icon: <SlCalender />,
      text: "Banned Organizers",
      number: 5,
    },
    {
      icon: <SlCalender />,
      text: "Suspended Organizers",
      number: 10,
    },
  ],
  TableData: [
    {
      organizename: "John Doe",
      status: "Active",
      events: 25,
      financialactivity: "$10,000",
    },
    {
      organizename: "John Doe",
      status: "Suspended",
      events: 10,
      financialactivity: "$2,500",
    },
    {
      organizename: "John Doe",
      status: "Active",
      events: 15,
      financialactivity: "$7,000",
    },
    {
      organizename: "John Doe",
      status: "Active",
      events: 20,
      financialactivity: "$5,000",
    },
  ],
};

const OraganizerManagement = ({ onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden w-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-5">
        {/* FIXED: Heading renamed correctly */}
        <h2 className="text-[16px] sm:text-[17px] font-semibold text-[#000000E5]">
          Organizer Management
        </h2>

        <button className="text-[#e45252] border border-[#e45252] rounded-full px-4 sm:px-5 py-1.5 font-medium text-xs sm:text-sm flex items-center gap-2 hover:bg-[#e45252]/5 transition-colors">
          <GiSettingsKnobs className="rotate-90 text-sm sm:text-base" />
          Filters
        </button>
      </div>

      {/* Top Cards Grid */}
      {/* Handled extreme padding compression for small devices */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 border-t border-[#dfdfdf]">
        {OraganizerManagementData.Buttons.map((item, index) => (
          <div
            key={index}
            className="bg-[#ffb3b3] rounded-xl shadow-sm py-3 px-4 sm:px-3 md:px-5 flex gap-3 items-center justify-between text-center"
          >
            <div className="text-[#e45252] bg-white p-2 rounded-full text-base sm:text-lg flex-shrink-0">
              {item.icon}
            </div>
            <p className="text-black text-xs md:text-sm font-medium flex-1 text-left sm:text-center px-1">
              {item.text}
            </p>
            <p className="text-black text-lg md:text-xl font-semibold flex-shrink-0">
              {item.number}
            </p>
          </div>
        ))}
      </div>

      {/* --- MOBILE MODULAR STACK VIEW (md:hidden) --- */}
      <div className="block md:hidden border-t border-[#dfdfdf] divide-y divide-[#dfdfdf]">
        {OraganizerManagementData.TableData.map((item, index) => (
          <div key={index} className="p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-[14px] font-semibold text-black">
                {item.organizename}
              </span>
              <span
                className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
                  item.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {item.status}
              </span>
            </div>

            {/* Event & Finance Details Info row */}
            <div className="grid grid-cols-2 gap-1 my-1 text-[12px] bg-gray-50 p-2 rounded-lg">
              <p className="text-gray-600">
                Events:{" "}
                <strong className="text-black font-medium">
                  {item.events}
                </strong>
              </p>
              <p className="text-gray-600 text-right">
                Finance:{" "}
                <strong className="text-black font-medium">
                  {item.financialactivity}
                </strong>
              </p>
            </div>

            {/* Stars Rating and CTA Action Button container */}
            <div className="flex justify-between items-center mt-1 pt-1">
              <div className="flex items-center gap-0.5">
                <span className="text-[#ffdb20] flex items-center">
                  <FaStar size={12} />
                  <FaStar size={12} />
                  <FaStar size={12} />
                </span>
                <span className="flex items-center text-gray-200">
                  <CiStar size={14} />
                  <CiStar size={14} />
                </span>
                <span className="text-xs text-gray-500 ml-1">(4.5)</span>
              </div>

              <button
                className="bg-[#e45252] text-white rounded-full py-1.5 px-4 text-xs font-medium active:bg-[#c93d3d]"
                onClick={() => onViewDetails({ name: item.organizename })}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- DESKTOP TABLE VIEW (md:table) --- */}
      {/* Wrapped in layout wrapper to handle widescreen flow without container layout shifting */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-t border-[#dfdfdf] bg-gray-50/50">
              <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Organizer Name
              </th>
              <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Status
              </th>
              <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Total Events
              </th>
              <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Rating
              </th>
              <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Financial Overview
              </th>
              <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#dfdfdf]/60 border-t border-[#dfdfdf]">
            {OraganizerManagementData.TableData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50/40 transition-colors">
                <td className="py-3 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5]">
                  {item.organizename}
                </td>
                <td className="py-3 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5]">
                  <span className="text-black font-normal">{item.status}</span>
                </td>
                <td className="py-3 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5]">
                  {item.events}
                </td>

                {/* FIXED: Removed inline flex from td container element to protect table rows breakdown */}
                <td className="py-3 px-5">
                  <div className="flex items-center gap-1 text-[13px] text-[#000000E5]">
                    <span className="text-[#ffdb20] flex items-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                    <span className="flex items-center text-gray-300">
                      <CiStar />
                      <CiStar />
                    </span>
                    <p className="ml-1 text-xs text-gray-500">(4.5)</p>
                  </div>
                </td>

                <td className="py-3 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5] whitespace-nowrap">
                  {item.financialactivity}
                </td>
                <td className="py-2 px-5">
                  <button
                    className="bg-[#e45252] text-white rounded-full py-1.5 px-5 text-xs lg:text-sm font-medium hover:bg-[#c93d3d] transition-colors"
                    onClick={() => onViewDetails({ name: item.organizename })}
                  >
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

export default OraganizerManagement;
