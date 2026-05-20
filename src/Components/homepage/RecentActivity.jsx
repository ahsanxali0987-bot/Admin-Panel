import React from "react";

const recentActivities = [
  {
    activityType: "New Registration",
    description: "5 users signed up today",
    userDetails: "-",
    timeDate: "Today, 10:00 AM",
  },
  {
    activityType: "Event Created",
    description: '"Summer Fest 2024" added',
    userDetails: "User A",
    timeDate: "Yesterday",
  },
  {
    activityType: "New Registration",
    description: "5 users signed up today",
    userDetails: "-",
    timeDate: "Today, 11:30 AM",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden w-full">
      {/* Header */}
      <div className="flex items-center justify-between py-4 px-5">
        {/* Heading */}
        <h2 className="text-[16px] sm:text-[17px] font-semibold text-[#000000E5]">
          Recent Activity
        </h2>

        {/* Button */}
        <button className="text-[#e45252] border border-[#e45252] rounded-full px-4 sm:px-5 py-1.5 font-medium text-xs sm:text-sm hover:bg-[#e45252]/5 transition-colors">
          View All
        </button>
      </div>

      {/* --- MOBILE STACK VIEW --- */}
      <div className="block md:hidden border-t border-[#dfdfdf] divide-y divide-[#dfdfdf]">
        {recentActivities.map((activity, index) => (
          <div key={index} className="p-4 flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <span className="text-[14px] font-semibold text-[#e45252]">
                {activity.activityType}
              </span>
              <span className="text-[12px] text-[#00000099] whitespace-nowrap">
                {activity.timeDate}
              </span>
            </div>
            
            <p className="text-[13px] font-medium text-[#000000E5]">
              {activity.description}
            </p>
            
            <div className="flex justify-between items-center mt-1 pt-1 border-t border-gray-50">
              <span className="text-[12px] text-[#00000099]">
                User: <strong className="text-black font-medium">{activity.userDetails}</strong>
              </span>
              <button className="bg-[#e45252] text-white rounded-full py-1.5 px-4 text-xs font-medium active:bg-[#c93d3d]">
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- DESKTOP TABLE VIEW --- */}
      <table className="hidden md:table w-full border-collapse">
        <thead>
          <tr className="border-t border-[#dfdfdf]">
            <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
              Activity Type
            </th>
            <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
              Description
            </th>
            <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
              User/Details
            </th>
            <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
              Time/Date
            </th>
            <th className="py-3 px-5 text-left text-[15px] lg:text-[16px] font-medium text-[#000000CC]">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[#dfdfdf]/60 border-t border-[#dfdfdf]">
          {recentActivities.map((activity, index) => (
            <tr key={index} className="hover:bg-gray-50/40 transition-colors">
              <td className="py-3 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5]">
                {activity.activityType}
              </td>
              <td className="py-3 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5]">
                {activity.description}
              </td>
              <td className="py-3 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5]">
                {activity.userDetails}
              </td>
              <td className="py-3 px-5 text-[13px] lg:text-[14px] font-normal text-[#000000E5] whitespace-nowrap">
                {activity.timeDate}
              </td>
              <td className="py-2 px-5">
                <button className="bg-[#e45252] text-white rounded-full py-1.5 px-5 text-xs lg:text-sm font-medium hover:bg-[#c93d3d] transition-colors">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivity;