import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import { MdOutlineWidgets } from "react-icons/md";

import { FaBuildingUser } from "react-icons/fa6";

import { MdOutlineCardMembership } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";
import { RiAdminFill } from "react-icons/ri";
import { TiTickOutline } from "react-icons/ti";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { GoDot } from "react-icons/go";
import { RiSettings5Line } from "react-icons/ri";
import { PiChatTeardropDotsThin } from "react-icons/pi";
import { LuBellDot } from "react-icons/lu";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io"; // Added Close Icon for mobile convenience

const SidebarData = [
  {
    Icon: MdOutlineWidgets,
    title: "Home",
    branch: [
      { title: "Platform Overview", path: "/" },
      { title: "User Management", path: "/user-management" },
      { title: "Event Management", path: "/events" },
    ],
  },
  { Icon: FaBuildingUser, title: "User Management", path: "/users-management" },
  {
    Icon: MdOutlineCardMembership,
    title: "Membership Management",
    branch: [
      { title: "List of Members", path: "/membership" },
      { title: "Membership Setting", path: "/membership-settings" },
    ],
  },
  {
    Icon: VscGraph,
    title: "Feature Management",
    branch: [
      { title: "Feature Approval", path: "/feature-approval" },
      { title: "Boost Player Profile", path: "/boost-player-profile" },
      { title: "Boost Organizer Profile", path: "/boost-organizer-profile" },
      { title: "Boost Event Visibility", path: "/boost-event-visibility" },
    ],
  },
  {
    Icon: BsGraphUpArrow,
    title: "Communication Setting",
    path: "/communication",
  },
  { Icon: HiOutlinePhotograph, title: "Analytics", path: "/analytics" },
  { Icon: RiAdminFill, title: "Admin Management", path: "/admins" },
  {
    Icon: AiOutlineExclamationCircle,
    title: "Payment Setting",
    path: "/payments",
  },
  { Icon: BsFillQuestionSquareFill, title: "Quotes Request", path: "/quotes" },
  {
    Icon: IoIosNotificationsOutline,
    title: "Notifications & Alerts",
    path: "/notifications",
  },
  { Icon: TiTickOutline, title: "Reports", path: "/reports" },
];

// CHANGED: Added Destructured Props
const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const [openBranches, setOpenBranches] = useState({ Home: true });

  const toggleBranch = (title) => {
    setOpenBranches((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const isItemActive = (item) => {
    if (item.path) return location.pathname === item.path;
    if (item.branch)
      return item.branch.some((b) => location.pathname === b.path);
    return false;
  };

  return (
    <>
      {/* Dark Backdrop overlay for mobile screen view */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Sidebar Component Container */}
      <div
        className={`fixed top-0 left-0 h-full z-50 md:z-auto md:static bg-white shadow-[0_0_15px_rgba(0,0,0,0.15)] font-[Poppins] w-[280px] sm:w-[300px] transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />

        <div className="p-5 bg-white shadow-[0_4px_6px_rgba(0,0,0,0.1)] min-h-screen flex flex-col h-full overflow-y-auto">
          {/* Top Logo & Mobile Close Trigger Row */}
          <div className="flex items-center justify-between w-full">
            <img
              src="Logo.png"
              alt="Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain"
            />
            <button
              className="md:hidden p-1 rounded-md text-gray-500 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose size={24} />
            </button>
          </div>

          {/* Welcome */}
          <h1 className="text-[#15172C] font-semibold text-[20px] mt-2">
            Welcome, Admin
          </h1>

          {/* Right Icons */}
          <div className="block md:hidden">
            <div className="flex items-center gap-2 md:gap-3">
              <button className="w-[36px] h-[36px] md:w-[38px] md:h-[38px] flex items-center justify-center rounded-full bg-[#f8f8f8]">
                <RiSettings5Line size={18} className="text-[#7c7c7c]" />
              </button>
              <button className="w-[36px] h-[36px] md:w-[38px] md:h-[38px] flex items-center justify-center rounded-full bg-[#f8f8f8]">
                <PiChatTeardropDotsThin size={18} className="text-[#7c7c7c]" />
              </button>
              <button className="w-[36px] h-[36px] md:w-[38px] md:h-[38px] flex items-center justify-center rounded-full bg-[#f8f8f8]">
                <LuBellDot size={18} className="text-[#7c7c7c]" />
              </button>
              <button className="w-[36px] h-[36px] md:w-[38px] md:h-[38px] flex items-center justify-center rounded-full bg-[#f8f8f8]">
                <FaSignOutAlt size={16} className="text-[#7c7c7c]" />
              </button>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col gap-5 mt-8 flex-1">
            {SidebarData.map((item, index) => {
              const Icon = item.Icon;
              const active = isItemActive(item);
              const isOpenBranch = openBranches[item.title];

              if (item.branch) {
                return (
                  <div key={index}>
                    <button
                      onClick={() => toggleBranch(item.title)}
                      className="flex gap-3 items-center pl-4 w-full text-left bg-transparent border-none cursor-pointer p-0"
                    >
                      <span
                        className={`w-5 h-5 flex-shrink-0 ${active ? "text-[#e45252]" : "text-[#000000B2]"}`}
                      >
                        <Icon />
                      </span>
                      <p
                        className={`text-sm font-normal transition-all duration-300 ${active ? "text-[#e45252]" : "text-[#000000B2]"}`}
                      >
                        {item.title}
                      </p>
                    </button>

                    {isOpenBranch && (
                      <div className="flex flex-col gap-2 mt-2 pl-12">
                        {item.branch.map((branchItem, branchIndex) => {
                          const isBranchActive =
                            location.pathname === branchItem.path;
                          return (
                            <Link
                              to={branchItem.path}
                              key={branchIndex}
                              onClick={() => setIsOpen(false)}
                            >
                              <p
                                className={`text-[13px] transition-all duration-300 flex items-center gap-1 ${isBranchActive ? "text-[#e45252]" : "text-[#000000B2]"}`}
                              >
                                <GoDot />
                                {branchItem.title}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  to={item.path}
                  key={index}
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex gap-3 items-center pl-4">
                    <span
                      className={`w-5 h-5 flex-shrink-0 ${active ? "text-[#e45252]" : "text-[#000000B2]"}`}
                    >
                      <Icon />
                    </span>
                    <p
                      className={`text-sm font-normal transition-all duration-300 ${active ? "text-[#e45252]" : "text-[#000000B2]"}`}
                    >
                      {item.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Logout Button */}
          <button className="text-white bg-[#e45252] w-full py-2.5 rounded-xl mt-8 text-[14px] font-medium self-start hover:bg-[#d04444] transition-colors duration-150">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
