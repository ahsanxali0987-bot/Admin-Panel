import React from "react";
import { SlCalender } from "react-icons/sl";

const OverviewData = [
  {
    icon: <SlCalender />,
    title: "Pendin Payment",
    payment: "$25,000",
  },
  {
    icon: <SlCalender />,
    title: "Paid Payment",
    payment: "$18,000",
  },
  {
    icon: <SlCalender />,
    title: "Total Payment",
    payment: "$7,000",
  },
];

const Overview = () => {
  return (
    <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.06)] border border-gray-100 overflow-hidden">
      {/* Card Heading */}
      <div className="text-[16px] sm:text-[18px] font-semibold text-[#000000E5] border-b border-[#dfdfdf] p-4 bg-white">
        Platform Financial Overview
      </div>

      {/* Grid: Stacks on mobile, scales into 3 columns on tablets and desktops */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4">
        {OverviewData.map((item, index) => (
          <div
            key={index}
            className="bg-[#ffb3b3]/70 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] py-5 px-6 sm:px-10 flex flex-col gap-3 sm:gap-4 items-center justify-between text-center transition-transform hover:scale-[1.01]"
          >
            <div className="text-[#e45252] bg-white p-2.5 rounded-full text-lg flex items-center justify-center shadow-sm">
              {item.icon}
            </div>
            <p className="text-black text-[14px] sm:text-[16px] font-medium leading-tight">
              {item.title}
            </p>
            <p className="text-black text-[20px] sm:text-[22px] font-bold tracking-tight">
              {item.payment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
