import React from "react";
import { PermissionsData } from "../../Data/PermissionsData";

const Permissions = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto bg-[#F5F5F5] box-border font-[Poppins]">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
        {/* Heading */}
        <div className="text-[16px] sm:text-[18px] font-semibold text-[#000000E5] border-b border-[#dfdfdf] p-4 sm:px-6 bg-white">
          Admin Roles & Permissions
        </div>

        {/* ── Mobile Responsive Cards View (Hidden on Desktop) ── */}
        <div className="block md:hidden divide-y divide-gray-100">
          {PermissionsData.map((admin, index) => (
            <div key={index} className="p-4 space-y-3 bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-[15px] font-semibold text-gray-900 m-0">
                    {admin.adminame}
                  </h4>
                  <span className="text-xs inline-block bg-gray-100 text-gray-800 px-2 py-0.5 rounded mt-1 font-medium">
                    {admin.Role}
                  </span>
                </div>
                <span
                  className={`px-2.5 py-0.5 rounded text-xs font-medium ${
                    admin.status?.toLowerCase() === "active"
                      ? "text-green-700 bg-green-50"
                      : "text-amber-700 bg-amber-50"
                  }`}
                >
                  {admin.status}
                </span>
              </div>

              <div className="text-[13px] text-gray-600 bg-gray-50 p-2.5 rounded border border-gray-100">
                <span className="font-medium text-gray-400 block text-xs mb-0.5">
                  Permissions
                </span>
                {admin.Permissions}
              </div>

              {/* Action Buttons Stack */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button className="bg-[#e45252] hover:bg-[#cc3e3e] text-white rounded-full py-2 text-xs font-medium transition-colors shadow-xs">
                  {admin.actionbuttona}
                </button>
                <button className="bg-[#e45252] hover:bg-[#cc3e3e] text-white rounded-full py-2 text-xs font-medium transition-colors shadow-xs">
                  {admin.actionbuttonb}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Desktop Table View (Hidden on Mobile) ── */}
        <div className="hidden md:block overflow-x-auto w-full">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50/75 border-b border-[#dfdfdf]">
                {["Admin Name", "Role", "Permissions", "Status", "Action"].map(
                  (heading) => (
                    <th
                      key={heading}
                      className="py-3.5 px-5 text-left text-[14px] sm:text-[15px] font-medium text-[#000000CC] whitespace-nowrap"
                    >
                      {heading}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {PermissionsData.map((admin, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50/40 transition-colors"
                >
                  <td className="py-4 px-5 text-[13px] font-medium text-[#000000E5]">
                    {admin.adminame}
                  </td>
                  <td className="py-4 px-5 text-[13px] text-gray-700">
                    {admin.Role}
                  </td>
                  <td className="py-4 px-5 text-[13px] text-gray-600 max-w-[300px] truncate">
                    {admin.Permissions}
                  </td>
                  <td className="py-4 px-5 text-[13px] whitespace-nowrap">
                    <span
                      className={`px-2.5 py-0.5 rounded text-xs font-medium ${
                        admin.status?.toLowerCase() === "active"
                          ? "text-green-700 bg-green-50"
                          : "text-amber-700 bg-amber-50"
                      }`}
                    >
                      {admin.status}
                    </span>
                  </td>
                  <td className="py-3 px-5">
                    <div className="flex gap-2 items-center">
                      <button className="bg-[#e45252] hover:bg-[#cc3e3e] text-white rounded-full py-1.5 px-5 text-xs font-medium transition-colors whitespace-nowrap shadow-xs">
                        {admin.actionbuttona}
                      </button>
                      <button className="bg-[#e45252] hover:bg-[#cc3e3e] text-white rounded-full py-1.5 px-4 text-xs font-medium transition-colors whitespace-nowrap shadow-xs">
                        {admin.actionbuttonb}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Permissions;
