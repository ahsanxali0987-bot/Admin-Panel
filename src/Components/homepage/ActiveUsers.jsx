import React from "react";
import { SlCalender } from "react-icons/sl";

const ActiveUsers = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden w-full h-full flex flex-col">
      {/* Heading */}
      <h1 className="text-[16px] sm:text-[18px] text-[#000000E5] font-semibold p-4">
        Active users
      </h1>

      {/* Dividing line */}
      <hr className="border-t border-[#ececec]" />

      {/* Content Container */}
      <div className="p-4 sm:p-6 lg:p-8 flex flex-wrap justify-center gap-x-[4%] gap-y-4 sm:gap-y-6 items-stretch max-w-[600px] mx-auto w-full">
        
        {/* Card 1 - Total Active Users */}
        <div className="bg-[#ffb3b3] w-[46%] min-w-[130px] rounded-xl p-3 sm:p-4 flex flex-col justify-between items-center text-center shadow-sm">
          <div className="bg-white p-2 rounded-full w-fit shadow-sm shrink-0">
            <SlCalender className="text-[#e45252] text-[14px] sm:text-[18px]" />
          </div>
          <div className="mt-2 flex flex-col justify-center items-center w-full">
            <h2 className="text-[12px] sm:text-[14px] lg:text-[16px] text-black font-medium leading-tight min-h-[32px] sm:min-h-[40px] flex items-center justify-center">
              Total active users
            </h2>
            <span className="text-[18px] sm:text-[22px] lg:text-[26px] text-black font-semibold mt-1">
              120
            </span>
          </div>
        </div>

        {/* Card 2 - Active Players */}
        <div className="bg-[#b5e3f8] w-[46%] min-w-[130px] rounded-xl p-3 sm:p-4 flex flex-col justify-between items-center text-center shadow-sm">
          <div className="bg-white p-2 rounded-full w-fit shadow-sm shrink-0">
            <SlCalender className="text-[#08a0e9] text-[14px] sm:text-[18px]" />
          </div>
          <div className="mt-2 flex flex-col justify-center items-center w-full">
            <h2 className="text-[12px] sm:text-[14px] lg:text-[16px] text-black font-medium leading-tight min-h-[32px] sm:min-h-[40px] flex items-center justify-center">
              Active players
            </h2>
            <span className="text-[18px] sm:text-[22px] lg:text-[26px] text-black font-semibold mt-1">
              95
            </span>
          </div>
        </div>

        {/* Card 3 - Active Organisers (Centered Below) */}
        <div className="bg-[#ffe7b3] w-[46%] min-w-[130px] rounded-xl p-3 sm:p-4 flex flex-col justify-between items-center text-center shadow-sm">
          <div className="bg-white p-2 rounded-full w-fit shadow-sm shrink-0">
            <SlCalender className="text-[#fcaf45] text-[14px] sm:text-[18px]" />
          </div>
          <div className="mt-2 flex flex-col justify-center items-center w-full">
            <h2 className="text-[12px] sm:text-[14px] lg:text-[16px] text-black font-medium leading-tight min-h-[32px] sm:min-h-[40px] flex items-center justify-center">
              Active organisers
            </h2>
            <span className="text-[18px] sm:text-[22px] lg:text-[26px] text-black font-semibold mt-1">
              25
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ActiveUsers;