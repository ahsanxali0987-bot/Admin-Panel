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
    <div className="min-h-screen bg-[#F5F5F5] font-[Poppins]">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-[#E0E0E0]">
          <h1 className="text-[20px] font-semibold text-black/90 font-[Poppins] m-0">
            All Platinum Member
          </h1>
        </div>

        {/* Table */}
        <div className="p-5">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {[
                  "Organizer Name",
                  "Country",
                  "Subscription Status",
                  "Next Feature Date",
                  "Action",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="py-2 px-5 text-left text-[18px] font-semibold text-black whitespace-nowrap font-[Poppins]"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {ListOfMembersData.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="cursor-pointer transition-colors duration-150 "
                  >
                    {/* Organizer Name */}
                    <td className="py-[10px] px-5 text-[13px] font-normal text-black/90 font-[Poppins]">
                      {item.organizername}
                    </td>

                    {/* Country */}
                    <td className="py-[10px] px-5 text-[13px] font-normal text-black/90 font-[Poppins]">
                      {item.country}
                    </td>

                    {/* Subscription Status */}
                    <td className="py-[10px] px-5 text-[13px] font-normal text-black/90 font-[Poppins]">
                      <div className="flex items-center gap-2">
                        {item.subscriptionstatus}
                        <span className="w-[10px] h-[10px] rounded-full bg-[#5ADB5A] shrink-0" />
                      </div>
                    </td>

                    {/* Next Feature Date */}
                    <td className="py-[10px] px-5 text-[13px] font-normal text-black/90 font-[Poppins]">
                      <div className="flex items-center gap-2">
                        {item.nextfeaturedate}
                        <LuPencilLine
                          className="text-[#555555] cursor-pointer shrink-0"
                          size={14}
                        />
                      </div>
                    </td>

                    {/* Action */}
                    <td className="py-[10px] px-5">
                      <button className="bg-[#E45252] text-white rounded-full text-[16px] font-medium px-[18px] py-1 font-[Poppins] tracking-[0.02em] capitalize leading-[1.5] border-none cursor-pointer">
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
