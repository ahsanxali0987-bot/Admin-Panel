import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { RiSettings5Line } from "react-icons/ri";
import { PiChatTeardropDotsThin } from "react-icons/pi";
import { LuBellDot } from "react-icons/lu";
import { FaSignOutAlt } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import FilterPopup from "../Components/Navbar.jsx/FilterPopup";

const Navbar = ({ setSidebarOpen }) => {
  const [open, setOpen] = useState(false);
  const [mobileSearchVisible, setMobileSearchVisible] = useState(false);

  return (
    <div className="w-full bg-white shadow-[0_2px_15px_rgba(0,0,0,0.05)] border-b border-gray-100 sticky top-0 z-30 font-[Poppins]">
      {/* Main Navbar Row */}
      <div className="flex items-center justify-between px-4 sm:px-6 h-[75px] max-w-[1440px] mx-auto">
        {/* Left Section: Mobile Trigger, Logo & Brand Title */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="block lg:hidden text-gray-700 hover:text-black transition-colors bg-transparent border-none p-1 cursor-pointer"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open Navigation Sidebar"
          >
            <RxHamburgerMenu size={24} />
          </button>

          <img
            src="Logo.png"
            alt="Platform Logo"
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full object-cover shadow-xs"
          />

          <p className="hidden sm:block text-[15px] md:text-[17px] lg:text-[19px] font-semibold text-gray-800 m-0">
            Platform Overview
          </p>
        </div>

        {/* Desktop & Tablet Search Bar (Hidden on Mobile) */}
        <div className="hidden md:flex border border-solid border-gray-300 rounded-full w-[320px] lg:w-[400px] xl:w-[450px] h-[44px] items-center pl-4 gap-2 bg-gray-50/50 focus-within:border-[#e45252] focus-within:bg-white transition-all relative">
          <CiSearch size={18} className="text-gray-400 flex-shrink-0" />
          <input
            type="text"
            className="flex-1 h-full outline-none bg-transparent text-sm text-gray-800"
            placeholder="Search here..."
          />
          <button
            type="button"
            className="h-[44px] w-[48px] bg-[#e45252] hover:bg-[#cc3e3e] border-none rounded-full flex items-center justify-center cursor-pointer transition-colors shadow-sm flex-shrink-0"
            onClick={() => setOpen(!open)}
          >
            <VscSettings size={18} className="text-white" />
          </button>
        </div>

        {/* Right Action Icons Panel */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Mobile Search Toggle Trigger (Only visible on mobile instead of permanent block) */}
          <button
            type="button"
            onClick={() => setMobileSearchVisible(!mobileSearchVisible)}
            className="flex md:hidden w-9 h-9 items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-gray-100 border-none cursor-pointer transition-colors"
          >
            <CiSearch size={20} />
          </button>

          {/* Desktop Control Icons Utilities */}
          <div className="hidden lg:flex items-center gap-2">
            {[
              { icon: <RiSettings5Line size={18} />, label: "Settings" },
              { icon: <PiChatTeardropDotsThin size={18} />, label: "Messages" },
              { icon: <LuBellDot size={18} />, label: "Notifications" },
              { icon: <FaSignOutAlt size={16} />, label: "Logout" },
            ].map((btn, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={btn.label}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-50 border-none text-gray-500 hover:text-[#e45252] hover:bg-red-50/50 cursor-pointer transition-all"
              >
                {btn.icon}
              </button>
            ))}
          </div>

          {/* Small Profile Quick Indicator for User Context */}
          <div className="w-8 h-8 rounded-full bg-gray-200 border border-solid border-gray-300 overflow-hidden ml-1">
            <div className="w-full h-full bg-[#e45252]/10 flex items-center justify-center text-[11px] font-bold text-[#e45252]">
              AD
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile Expandable Search Tray (Dynamic Slide Down) ── */}
      {mobileSearchVisible && (
        <div className="md:hidden border-t border-solid border-gray-100 px-4 py-3 bg-white animate-in slide-in-from-top duration-200">
          <div className="border border-solid border-gray-300 rounded-full flex h-[42px] items-center pl-3.5 gap-2 bg-gray-50">
            <CiSearch size={18} className="text-gray-400 flex-shrink-0" />
            <input
              type="text"
              className="flex-1 h-full outline-none bg-transparent text-sm text-gray-800"
              placeholder="Search..."
            />
            <button
              type="button"
              className="h-[42px] w-[46px] bg-[#e45252] hover:bg-[#cc3e3e] border-none rounded-full flex items-center justify-center cursor-pointer transition-colors flex-shrink-0"
              onClick={() => setOpen(!open)}
            >
              <VscSettings size={18} className="text-white" />
            </button>
          </div>
        </div>
      )}

      {/* ── Filter Popover Overlay Menu ── */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-4 md:right-6 lg:right-auto lg:left-[55%] xl:left-[60%] top-[70px] w-[240px] bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-solid border-gray-100 z-50 p-1 animate-in fade-in zoom-in-95 duration-150">
            <FilterPopup setopen={setOpen} />
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
