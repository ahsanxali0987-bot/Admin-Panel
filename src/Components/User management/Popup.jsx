import React from "react";
import { FaStar } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Popup = ({ user, onClose }) => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] w-full mx- h-full overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between py-3 px-5 border-b border-[#e5e5e5]">
          <h1 className="text-[18px] text-[#000000E5] font-semibold">User</h1>
          <RxCross1
            className="bg-[#e45252] text-white w-9 h-9 rounded-full p-2 cursor-pointer"
            onClick={onClose}
          />
        </div>

        {/* Body */}
        <div className="p-20 flex flex-col items-center gap-4">
          <img
            src="pic.jpg"
            alt={user.name}
            className="w-36 h-36 rounded-full object-cover"
          />

          <div className="flex flex-col items-center gap-1 mt-2">
            <p className="text-[17px] font-medium text-[#666666]">
              <span className="text-[#333333]">Name:</span> {user.name}
            </p>
            <p className="text-[17px] font-medium text-[#666666]">
              <span className="text-[#333333]">Role:</span> {user.role}
            </p>
            <p className="text-[14px] text-[#ffff00] text-center flex gap-2 justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>{" "}
          </div>

          {/* Description */}
          <p className="text-sm text-[#666666] text-center leading-relaxed">
            {user.description ||
              "Lorem ipsum dolor sit amet consectetur. Pretium purus sed lacus nibh. Varius sit lobortis arcu a fermentum."}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            {["Block", "Unblock", "Suspend", "Un Suspend"].map((action) => (
              <button
                key={action}
                className="bg-[#e45252] text-white rounded-full py-2 px-5 text-sm font-medium hover:bg-[#c93e3e] transition-colors"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
