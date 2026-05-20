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
    <div className="bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.08)]">
      {/* Heading */}
      <div className="text-[18px] font-semibold text-[#000000E5] border-b border-[#dfdfdf] p-4">
        Platform Financial Overview
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6 p-4 border border-x-[#e5e5e5]">
        {OverviewData.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#ffb3b3] rounded-md shadow-[0_0_10px_rgba(0,0,0,0.08)] py-5 flex flex-col gap-4 items-center justify-between text-center px-10"
            >
              <div className="text-[#e45252] bg-white p-2 rounded-full text-lg items-center">
                {item.icon}
              </div>
              <p className="text-black text-[16px] font-medium">{item.title}</p>
              <p className="text-black text-[22px] font-semibold">
                {item.payment}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
