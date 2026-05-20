import React from "react";
import { LuPencilLine } from "react-icons/lu";

const ListOfMembersData = [
  {
    organizername: "Lorem Ipsum",
    country: "UAE",
    subscriptionstatus: "Active",
    nextfeaturedate: "March 12 /25",
    action: "Cancel",
  },
  {
    organizername: "Lorem Ipsum",
    country: "UAE",
    subscriptionstatus: "Active",
    nextfeaturedate: "March 12 /25",
    action: "Cancel",
  },
  {
    organizername: "Lorem Ipsum",
    country: "UAE",
    subscriptionstatus: "Active",
    nextfeaturedate: "March 12 /25",
    action: "Cancel",
  },
  {
    organizername: "Lorem Ipsum",
    country: "UAE",
    subscriptionstatus: "Active",
    nextfeaturedate: "March 12 /25",
    action: "Cancel",
  },
  {
    organizername: "Lorem Ipsum",
    country: "UAE",
    subscriptionstatus: "Active",
    nextfeaturedate: "March 12 /25",
    action: "Cancel",
  },
  {
    organizername: "Lorem Ipsum",
    country: "UAE",
    subscriptionstatus: "Active",
    nextfeaturedate: "March 12 /25",
    action: "Cancel",
  },
  {
    organizername: "Lorem Ipsum",
    country: "UAE",
    subscriptionstatus: "Active",
    nextfeaturedate: "March 12 /25",
    action: "Cancel",
  },
  {
    organizername: "Lorem Ipsum",
    country: "UAE",
    subscriptionstatus: "Active",
    nextfeaturedate: "March 12 /25",
    action: "Cancel",
  },
  {
    organizername: "Lorem Ipsum",
    country: "UAE",
    subscriptionstatus: "Active",
    nextfeaturedate: "March 12 /25",
    action: "Cancel",
  },
  {
    organizername: "Lorem Ipsum",
    country: "UAE",
    subscriptionstatus: "Active",
    nextfeaturedate: "March 12 /25",
    action: "Cancel",
  },
  {
    organizername: "Lorem Ipsum",
    country: "UAE",
    subscriptionstatus: "Active",
    nextfeaturedate: "March 12 /25",
    action: "Cancel",
  },
  {
    organizername: "Lorem Ipsum",
    country: "UAE",
    subscriptionstatus: "Active",
    nextfeaturedate: "March 12 /25",
    action: "Cancel",
  },
];

const ListOfMembers = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-[Poppins] flex flex-col justify-start items-center">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Outer Card Wrapper: Responsive max-width boundary layout */}
      <div className="w-full max-w-[1440px] bg-white rounded-xl sm:rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.06)] md:shadow-[0_0_15px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300">
        {/* Header - Fluid padding blocks & contextual typography sizes */}
        <div className="px-4 py-3.5 sm:px-5 sm:py-4 md:px-6 lg:px-8 border-b border-[#E0E0E0] flex justify-between items-center bg-white">
          <h1 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-semibold text-black/90 font-[Poppins] m-0">
            All Platinum Members
          </h1>
          <span className="text-xs md:text-sm font-medium text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md md:hidden block">
            Total: {ListOfMembersData.length}
          </span>
        </div>

        {/* --- 1. MOBILE CARDS COMPACT TRACK --- */}
        <div className="block md:hidden divide-y divide-[#dfdfdf]/60">
          {ListOfMembersData.map((item, index) => (
            <div
              key={index}
              className="p-4 flex flex-col gap-2.5 bg-white hover:bg-gray-50/20 active:bg-gray-50/60 transition-all"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-[14px] font-semibold text-black/90 tracking-tight">
                    {item.organizername}
                  </h4>
                  <p className="text-[12px] text-gray-400 mt-0.5">
                    Region:{" "}
                    <span className="text-gray-700 font-medium">
                      {item.country}
                    </span>
                  </p>
                </div>
                {/* Status indicator pill block */}
                <div className="flex items-center gap-1.5 bg-green-50 text-green-700 text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-green-100/60">
                  <span>{item.subscriptionstatus}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5ADB5A]" />
                </div>
              </div>

              {/* Dynamic Info Grid Strip */}
              <div className="flex justify-between items-center text-[12px] bg-gray-50/70 p-2.5 rounded-xl border border-gray-100 mt-1">
                <div className="flex items-center gap-1.5 text-gray-600">
                  <span className="text-gray-400 font-medium">
                    Next Feature:
                  </span>
                  <span className="font-normal">{item.nextfeaturedate}</span>
                  <LuPencilLine
                    className="text-gray-400 cursor-pointer"
                    size={13}
                  />
                </div>

                <button className="bg-[#E45252] text-white rounded-full text-[12px] font-medium px-4 py-1 tracking-[0.02em] capitalize active:bg-[#c93d3d] transition-colors shadow-sm">
                  {item.action}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- 2. ADVANCED DESKTOP TABLE WRAPPER --- */}
        <div className="hidden md:block overflow-x-auto w-full p-4 sm:p-5 lg:p-6 xl:p-8">
          <table className="w-full border-collapse table-auto">
            <thead>
              <tr className="border-b-2 border-gray-100">
                {[
                  "Organizer Name",
                  "Country",
                  "Subscription Status",
                  "Next Feature Date",
                  "Action",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="pb-3.5 pt-2 px-4 lg:px-6 xl:px-8 text-left text-[14px] lg:text-[15px] xl:text-[16px] font-semibold text-black/80 whitespace-nowrap font-[Poppins] tracking-wide"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {ListOfMembersData.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="cursor-pointer hover:bg-gray-50/50 transition-colors duration-150 group"
                  >
                    {/* Organizer Name */}
                    <td className="py-3.5 lg:py-4 xl:py-5 px-4 lg:px-6 xl:px-8 text-[13px] lg:text-[14px] xl:text-[15px] font-normal text-black/90 font-[Poppins]">
                      {item.organizername}
                    </td>

                    {/* Country */}
                    <td className="py-3.5 lg:py-4 xl:py-5 px-4 lg:px-6 xl:px-8 text-[13px] lg:text-[14px] xl:text-[15px] font-normal text-black/70 font-[Poppins]">
                      {item.country}
                    </td>

                    {/* Subscription Status */}
                    <td className="py-3.5 lg:py-4 xl:py-5 px-4 lg:px-6 xl:px-8 text-[13px] lg:text-[14px] xl:text-[15px] font-normal text-black/90 font-[Poppins]">
                      <div className="flex items-center gap-2">
                        {item.subscriptionstatus}
                        <span className="w-2 h-2 rounded-full bg-[#5ADB5A] shrink-0 shadow-[0_0_6px_#5ADB5A]" />
                      </div>
                    </td>

                    {/* Next Feature Date */}
                    <td className="py-3.5 lg:py-4 xl:py-5 px-4 lg:px-6 xl:px-8 text-[13px] lg:text-[14px] xl:text-[15px] font-normal text-black/90 font-[Poppins]">
                      <div className="flex items-center gap-2 group-hover:text-black transition-colors">
                        <span>{item.nextfeaturedate}</span>
                        <LuPencilLine
                          className="text-gray-400 hover:text-black cursor-pointer shrink-0 transition-colors opacity-80 group-hover:opacity-100"
                          size={14}
                        />
                      </div>
                    </td>

                    {/* Action button rendering grid */}
                    <td className="py-2 lg:py-3 px-4 lg:px-6 xl:px-8 whitespace-nowrap">
                      <button className="bg-[#E45252] text-white rounded-full text-[13px] lg:text-[14px] xl:text-[15px] font-medium px-5 py-1.5 lg:px-6 lg:py-2 font-[Poppins] tracking-[0.02em] capitalize border-none cursor-pointer hover:bg-[#c93d3d] hover:shadow-sm active:scale-95 transition-all duration-200">
                        {item.action}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListOfMembers;
