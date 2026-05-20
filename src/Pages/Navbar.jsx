import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { RiSettings5Line } from "react-icons/ri";
import { PiChatTeardropDotsThin } from "react-icons/pi";
import { LuBellDot } from "react-icons/lu";
import { FaSignOutAlt } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import FilterPopup from "../Components/Navbar.jsx/FilterPopup";

const Navbar = ({ setSidebarOpen }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.08)] sticky top-0 z-30 flex  md:flex-col">
      <div className="flex items-center justify-between px-3 md:px-5 h-[75px]">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <button
            className="block lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <HiOutlineMenuAlt3 size={28} />
          </button>

          {/* Logo */}
          <img
            src="Logo.png"
            alt="Logo"
            className="w-6 md:w-8 lg:w-10 xl:h-12 rounded-full object-cover"
          />

          {/* Title */}
          <p className="hidden sm:block text-[16px] md:text-[20px] font-medium">
            Platform Overview
          </p>
        </div>

        {/* Search */}
        <div className="hidden md:flex border border-[#acadb5] rounded-full w-[350px] lg:w-[420px] h-[45px] items-center pl-4 gap-2 overflow-hidden">
          <CiSearch size={20} className="text-[#acadb5] flex-shrink-0" />

          <input
            type="text"
            className="flex-1 h-full outline-none bg-transparent text-sm"
            placeholder="Search..."
          />

          <div
            className="h-[45px] w-[50px] bg-[#e45252] rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <VscSettings size={20} className="text-white" />
          </div>
        </div>

        {/* Right Icons */}
        <div className="hidden md:block">
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
      </div>

      {/* Mobile Search */}
      <div className="px-3 pb-3 md:hidden mt-4">
        <div className="border border-[#acadb5] rounded-full flex h-[45px] items-center pl-4 gap-2 overflow-hidden">
          <CiSearch size={20} className="text-[#acadb5] flex-shrink-0" />
          <input
            type="text"
            className="flex-1 h-full outline-none bg-transparent text-sm"
            placeholder="Search..."
          />
          <div
            className="h-[45px] w-[50px] bg-[#e45252] rounded-full flex items-center justify-center"
            onClick={() => setOpen(!open)}
          >
            <VscSettings size={20} className="text-white" />
          </div>
        </div>
      </div>

      {/* Popup */}
      <div
        className={`absolute right-5 top-[80px] w-[215px] bg-white rounded-md shadow-[0_0_10px_rgba(0,0,0,0.08)] ${
          open ? "block" : "hidden"
        }`}
      >
        <FilterPopup setopen={setOpen} />
      </div>
    </div>
  );
};

export default Navbar;
