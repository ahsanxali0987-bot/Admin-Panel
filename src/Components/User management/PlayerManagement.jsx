import React from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";

const PlayerManagementData = {
  Buttons: [
    {
      icon: <SlCalender />,
      text: "Active Players",
      number: 150,
    },
    {
      icon: <SlCalender />,
      text: "Banned Players",
      number: 5,
    },
    {
      icon: <SlCalender />,
      text: "Suspend Players",
      number: 10,
    },
  ],

  TableData: [
    {
      playername: "John Doe",
      status: "Active",
      role: "Player",
      lastactivity: "Today, 10:00 AM",
    },
    {
      playername: "John Doe",
      status: "Suspended",
      role: "Player",
      lastactivity: "Today, 10:00 AM",
    },
    {
      playername: "John Doe",
      status: "Active",
      role: "Player",
      lastactivity: "Today, 10:00 AM",
    },
    {
      playername: "John Doe",
      status: "Active",
      role: "Player",
      lastactivity: "Today, 10:00 AM",
    },
  ],
};

const PlayerManagement = ({ onViewDetails }) => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden w-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-5">
        <h2 className="text-[16px] sm:text-[17px] font-semibold text-[#000000E5]">
          Player Management
        </h2>

        <button className="text-[#e45252] border border-[#e45252] rounded-full px-4 sm:px-5 py-1.5 font-medium text-xs sm:text-sm flex items-center gap-2 hover:bg-[#e45252]/5 transition-colors">
          <GiSettingsKnobs className="rotate-90 text-sm sm:text-base" />
          Filters
        </button>
      </div>

      {/* Top Cards/Buttons Grid */}
      {/* Handled mobile compression */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 border-t border-[#dfdfdf]">
        {PlayerManagementData.Buttons.map((item, index) => (
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

      {/* --- MOBILE MODULAR STACK VIEW --- */}
      <div className="block md:hidden border-t border-[#dfdfdf] divide-y divide-[#dfdfdf]">
        {PlayerManagementData.TableData.map((item, index) => (
          <div key={index} className="p-4 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-[14px] font-semibold text-black">
                {item.playername}
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

            <div className="flex justify-between items-center text-[12px] text-[#00000099]">
              <div className="flex items-center gap-1">
                <span className="text-[#ffdb20] flex items-center">
                  <FaStar size={12} />
                  <FaStar size={12} />
                  <FaStar size={12} />
                </span>
                <span className="flex items-center text-gray-300">
                  <CiStar size={14} />
                  <CiStar size={14} />
                </span>
                <span className="text-black ml-0.5">(4.5)</span>
              </div>
              <span>{item.lastactivity}</span>
            </div>

            <div className="flex justify-end mt-1 pt-2 border-t border-gray-50">
              <button
                className="bg-[#e45252] text-white rounded-full py-1.5 px-5 text-xs font-medium active:bg-[#c93d3d]"
                onClick={() =>
                  onViewDetails({
                    name: item.playername,
                    role: item.role || "Player",
                  })
                }
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- DESKTOP TABLE VIEW --- */}
      <table className="hidden md:table w-full border-collapse">
        <thead>
          <tr className="border-t border-[#dfdfdf] bg-gray-50/50">
            <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
              Player Name
            </th>
            <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
              Status
            </th>
            <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
              Rating
            </th>
            <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
              Last Activity
            </th>
            <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[#dfdfdf]/60 border-t border-[#dfdfdf]">
          {PlayerManagementData.TableData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50/40 transition-colors">
              <td className="py-3 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5]">
                {item.playername}
              </td>
              <td className="py-3 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5]">
                <span
                  className="text-black font-normal"
                >
                  {item.status}
                </span>
              </td>

              {/* FIXED ALIGNMENT: Standard table cell styling instead of raw flex wrap with offsets */}
              <td className="py-3 px-5">
                <div className="flex items-center gap-1 text-[13px] text-[#000000E5]">
                  <span className="text-[#ffdb20] flex items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  <span className="flex items-center">
                    <CiStar />
                    <CiStar />
                  </span>
                  <p className="ml-1 text-xs text-gray-500">(4.5)</p>
                </div>
              </td>

              <td className="py-3 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5] whitespace-nowrap">
                {item.lastactivity}
              </td>

              <td className="py-2 px-5">
                <button
                  className="bg-[#e45252] text-white rounded-full py-1.5 px-5 text-xs lg:text-sm font-medium hover:bg-[#c93d3d] transition-colors"
                  onClick={() =>
                    onViewDetails({
                      name: item.playername,
                      role: item.role || "Player",
                    })
                  }
                >
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

export default PlayerManagement;
