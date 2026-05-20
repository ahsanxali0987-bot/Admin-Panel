import React from "react";
import { RxCross1 } from "react-icons/rx";

const FilterPopup = ({ setopen }) => {
  return (
    <div>
      <div className="flex justify-between items-center px-4 py-3 ">
        <h1 className="text-[14px] text-[#000000] font-medium mb-2">
          Filter Option
        </h1>
        <RxCross1
          size={15}
          className="text-[#000000] cursor-pointer"
          onClick={() => setopen(false)}
        />
      </div>
      <hr className="text-[#f3f3f5] h-1" />
      <div className="px-4 flex flex-col gap-1">
        <>
          <label className="text-[#000000] font-normal text-[13px]">
            Location
          </label>
          <input
            type="text"
            className="border border-[#808080] w-full  rounded-md"
          />
        </>
        <>
          <label className="text-[#000000] font-normal text-[13px]">
            Event Type
          </label>
          <input
            type="text"
            className="border border-[#808080] w-full  rounded-md"
          />
        </>
        <>
          <label className="text-[#000000] font-normal text-[13px]">
            Ratings
          </label>
          <input
            type="text"
            className="border border-[#808080] w-full  rounded-md"
          />
        </>
        <>
          <label className="text-[#000000] font-normal text-[13px]">
            Account Status
          </label>
          <input
            type="text"
            className="border border-[#808080] w-full  rounded-md"
          />
        </>
        <>
          <label className="text-[#000000] font-normal text-[13px]">
            User Role
          </label>
          <input
            type="text"
            className="border border-[#808080] w-full  rounded-md"
          />
        </>
        <>
          <label className="text-[#000000] font-normal text-[13px]">
            Active
          </label>
          <input
            type="text"
            className="border border-[#808080] w-full  rounded-md"
          />
        </>
        <button className="text-white w-full rounded-full bg-[#e45252] py-[6px] my-2">
          Apply
        </button>
      </div>
    </div>
  );
};

export default FilterPopup;
