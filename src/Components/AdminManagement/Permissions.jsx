import React from "react";

const PermissionsData = [
  {
    adminame: "Alice",
    Role: "Moderator",
    Permissions: "Edit Posts, View Comments",
    status: "Active",
    actionbuttona: "Edit",
    actionbuttonb: "Remove",
  },
  {
    adminame: "Bob",
    Role: "Financial Manager",
    Permissions: "View Financials, Update Reports",
    status: "Active",
    actionbuttona: "Edit",
    actionbuttonb: "Remove",
  },
  {
    adminame: "Charlie",
    Role: "Moderator",
    Permissions: "Edit Posts, View Comments",
    status: "Inactive",
    actionbuttona: "Assign Role",
    actionbuttonb: "Remove",
  },
];

const Permissions = () => {
  return (
    <div className="bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.08)]">
      {" "}
      {/* Heading */}{" "}
      <div className="text-[18px] font-semibold text-[#000000E5] border-b border-[#dfdfdf] p-4">
        {" "}
        Admin Roles & Permissions{" "}
      </div>{" "}
      {/* Table */}{" "}
      <table className="w-full border-collapse">
        {" "}
        {/* Table body */}{" "}
        <thead>
          {" "}
          {/* Table heading */}{" "}
          <tr className="border-t border-[#dfdfdf]">
            {" "}
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              {" "}
              Admin Name{" "}
            </th>{" "}
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              {" "}
              Role{" "}
            </th>{" "}
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              {" "}
              Permissions{" "}
            </th>{" "}
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              {" "}
              Status{" "}
            </th>{" "}
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              {" "}
              Action{" "}
            </th>{" "}
          </tr>{" "}
        </thead>{" "}
        {/* Table Body */}{" "}
        <tbody>
          {" "}
          {PermissionsData.map((admin, index) => (
            <tr key={index}>
              {" "}
              {/* Activity Type */}{" "}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {" "}
                {admin.adminame}{" "}
              </td>{" "}
              {/* Description */}{" "}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {" "}
                {admin.Role}{" "}
              </td>{" "}
              {/* User/Details */}{" "}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {" "}
                {admin.Permissions}{" "}
              </td>{" "}
              {/* Time/Date */}{" "}
              <td className="px-5 text-[13px] font-normal text-[#000000E5] whitespace-nowrap">
                {" "}
                {admin.status}{" "}
              </td>{" "}
              {/* Button */}{" "}
              <td className="py-2 px-5 flex gap-2">
                {" "}
                <button className="bg-[#e45252] text-white rounded-full py-2 px-8 text-sm font-medium">
                  {" "}
                  {admin.actionbuttona}{" "}
                </button>{" "}
                <button className="bg-[#e45252] text-white rounded-full py-2 px-5 text-sm font-medium">
                  {" "}
                  {admin.actionbuttonb}{" "}
                </button>{" "}
              </td>{" "}
            </tr>
          ))}{" "}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
};

export default Permissions;
