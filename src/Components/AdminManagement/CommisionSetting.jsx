import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";

const commissionRows = [
  {
    eventname: "Foot Ball",
    commission: "500$",
  },
  {
    eventname: "Foot Ball",
    commission: "500$",
  },
  {
    eventname: "Foot Ball",
    commission: "500$",
  },
  {
    eventname: "Foot Ball",
    commission: "500$",
  },
  {
    eventname: "Foot Ball",
    commission: "500$",
  },
  {
    eventname: "Foot Ball",
    commission: "500$",
  },
  {
    eventname: "Foot Ball",
    commission: "500$",
  },
  {
    eventname: "Foot Ball",
    commission: "500$",
  },
  {
    eventname: "Foot Ball",
    commission: "500$",
  },
  {
    eventname: "Foot Ball",
    commission: "500$",
  },
];

const CommisionSetting = () => {
  const [commissionRate, setCommissionRate] = useState("10 %");
  const [flatRate, setFlatRate] = useState("10 %");
  const [chargeOnCreation, setChargeOnCreation] = useState(true);
  const [deductDirect, setDeductDirect] = useState(true);
  const [sendInvoice, setSendInvoice] = useState(true);

  return (
    <div className="flex flex-col gap-5">
      {/* Featured Cards */}
      <div className="flex gap-20 px-10">
        <div className="flex-1 bg-[#FADADD] rounded-xl p-4 flex flex-col items-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.08)]">
          <div className="w-9 h-9 rounded-full bg-[#E45252] flex items-center justify-center">
            <span className="text-white text-[16px]">
              <SlCalender />
            </span>
          </div>
          <p className="text-[12px] font-semibold text-black text-center">
            Featured Player
          </p>
          <p className="text-[20px] font-bold text-black">1000+</p>
        </div>
        <div className="flex-1 bg-[#FADADD] rounded-xl p-4 flex flex-col items-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.08)]">
          <div className="w-9 h-9 rounded-full bg-[#E45252] flex items-center justify-center">
            <span className="text-white text-[16px]">
              <SlCalender />
            </span>
          </div>
          <p className="text-[12px] font-semibold text-black text-center">
            Featured Organizer
          </p>
          <p className="text-[20px] font-bold text-black">550+</p>
        </div>
        <div className="flex-1 bg-[#FADADD] rounded-xl p-4 flex flex-col items-center gap-2 shadow-[0_0_10px_rgba(0,0,0,0.08)]">
          <div className="w-9 h-9 rounded-full bg-[#E45252] flex items-center justify-center">
            <span className="text-white text-[16px]">
              <SlCalender />
            </span>
          </div>
          <p className="text-[12px] font-semibold text-black text-center">
            Featured Events
          </p>
          <p className="text-[20px] font-bold text-black">100+</p>
        </div>
      </div>

      {/* Commission Settings */}
      <div className="bg-white border border-[#E0E0E0] rounded-xl p-5 shadow-[0_0_10px_rgba(0,0,0,0.08)] flex flex-col gap-4">
        <h3 className="text-[16px] font-semibold text-black m-0">
          Commission Settings
        </h3>
        <div className="flex justify-between items-center">
          <div>
            {" "}
            <p className="text-[13px] font-medium text-black mb-1">
              Commission Rate (%)
            </p>
            <input
              value={commissionRate}
              onChange={(e) => setCommissionRate(e.target.value)}
              className="w-[600px] border border-black rounded-lg px-3 py-2 text-[13px] outline-none focus:border-[#5ADB5A]"
            />
          </div>
          <button className="bg-[#1CC800] text-white text-[14px] font-semibold h-[42px] px-10 py-2 rounded-lg border-none cursor-pointer hover:bg-[#19b000] transition-colors shadow-[0_0_10px_rgba(0,0,0,0.08)]">
            Save
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[13px] font-medium text-black mb-1">
              Flat Rate or Percentage
            </p>
            <input
              value={flatRate}
              onChange={(e) => setFlatRate(e.target.value)}
              className="w-[600px] border border-black rounded-lg px-3 py-2 text-[13px] outline-none focus:border-[#5ADB5A]"
            />
          </div>
          <button className="bg-[#1CC800] text-white text-[14px] font-semibold h-[42px] px-10 py-2 rounded-lg border-none cursor-pointer hover:bg-[#19b000] transition-colors shadow-[0_0_10px_rgba(0,0,0,0.08)]">
            Save
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <label className="flex items-center gap-2 cursor-pointer text-[13px] text-black">
              <input
                type="checkbox"
                checked={chargeOnCreation}
                onChange={() => setChargeOnCreation(!chargeOnCreation)}
                className="w-4 h-4 accent-[#5ADB5A]"
              />
              Charge commission on event creation
            </label>
          </div>
          <button className="bg-[#1CC800] text-white text-[14px] font-semibold h-[42px] px-10 py-2 rounded-lg border-none cursor-pointer hover:bg-[#19b000] transition-colors shadow-[0_0_10px_rgba(0,0,0,0.08)]">
            Save
          </button>
        </div>
      </div>

      {/* View Commission */}
      <div className="bg-white border border-[#E0E0E0] rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-[#E0E0E0]">
          <h3 className="text-[16px] font-semibold text-black">
            View Commission
          </h3>
          <span className="text-[13px] font-medium text-red-500 cursor-pointer hover:underline">
            View All
          </span>
        </div>
        <div className="px-10 py-3">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-[13px] font-semibold text-black pb-2">
                  Event Name
                </th>
                <th className="text-right text-[13px] font-semibold text-black pb-2">
                  Commission
                </th>
              </tr>
            </thead>
            <tbody>
              {commissionRows.map((row, i) => (
                <tr key={i}>
                  <td className="py-[6px] text-[13px] font-normal text-black/80">
                    {row.eventname}
                  </td>
                  <td className="py-[6px] text-[13px] pr-10 font-normal text-right text-black/80">
                    {row.commission}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white border border-[#E0E0E0] rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.08)] flex flex-col gap-3">
        <h3 className="text-[16px] font-semibold text-black m-0 border-b border-[#E0E0E0] px-5 pt-5">
          Payment Method
        </h3>
        <div className="px-10 pb-5 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <label className="flex items-start gap-2 cursor-pointer text-[13px] text-black">
              <input
                type="checkbox"
                checked={deductDirect}
                onChange={() => setDeductDirect(!deductDirect)}
                className="w-4 h-4 mt-[2px] accent-[#5ADB5A]"
              />
              Deducting It Directly From The Event Payment
            </label>
            <button className="bg-[#1CC800] text-white text-[14px] font-semibold h-[42px] px-10 py-2 rounded-lg border-none cursor-pointer hover:bg-[#19b000] transition-colors shadow-[0_0_10px_rgba(0,0,0,0.08)]">
              Save
            </button>
          </div>
          <div className="flex justify-between items-center">
            <label className="flex items-start gap-2 cursor-pointer text-[13px] text-black">
              <input
                type="checkbox"
                checked={sendInvoice}
                onChange={() => setSendInvoice(!sendInvoice)}
                className="w-4 h-4 mt-[2px] accent-[#5ADB5A]"
              />
              Send An Invoice To The Organizer For The Commission
            </label>
            <button className="bg-[#1CC800] text-white text-[14px] font-semibold h-[42px] px-10 py-2 rounded-lg border-none cursor-pointer hover:bg-[#19b000] transition-colors shadow-[0_0_10px_rgba(0,0,0,0.08)]">
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Save Update */}
      <button className="w-[500px] mx-auto bg-[#E45252] text-white text-[15px] font-semibold py-3 rounded-xl border-none cursor-pointer hover:bg-[#d04444] transition-colors duration-150">
        SAVE UPDATE
      </button>
    </div>
  );
};

export default CommisionSetting;
