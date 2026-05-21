import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

const EventFeedbackData = [
  {
    eventname: "Event 1",
    totalreviews: "120",
    positiveratings: "100",
    negativeratings: "20",
    sentiment: "Positive",
  },
  {
    eventname: "Event 1",
    totalreviews: "120",
    positiveratings: "100",
    negativeratings: "20",
    sentiment: "Positive",
  },
  {
    eventname: "Event 1",
    totalreviews: "120",
    positiveratings: "100",
    negativeratings: "20",
    sentiment: "Positive",
  },
  {
    eventname: "Event 1",
    totalreviews: "120",
    positiveratings: "100",
    negativeratings: "20",
    sentiment: "Positive",
  },
];

const EventFeedback = () => {
  return (
    <div className="w-full rounded-2xl font-[Poppins]">
      {/* Header Section */}
      <div className="py-4 px-5">
        <h2 className="text-[17px] font-semibold text-[#000000E5] border-b-2 border-[#d9d9d9] pb-2 m-0">
          Event Feedback
        </h2>
      </div>

      {/* ── Mobile Layout: Responsive Card List (Hidden on Desktop) ── */}
      <div className="block lg:hidden p-4 space-y-4">
        {EventFeedbackData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-solid border-gray-100 p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-3"
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-[15px] font-bold text-gray-900 m-0">
                  {item.eventname}
                </h4>
                <div className="flex items-center gap-1 mt-1 text-[13px] text-[#000000E5]">
                  <div className="text-[#ffdb20] flex items-center gap-0.5">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className="text-[#ffdb20] flex items-center gap-0.5">
                    <CiStar />
                    <CiStar />
                  </div>
                  <span className="text-black font-medium ml-1">(4.5)</span>
                </div>
              </div>
              <span className="text-[12px] font-semibold text-green-600 bg-green-50 px-2.5 py-0.5 rounded-md">
                {item.sentiment}
              </span>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-3 gap-2 bg-gray-50/50 p-2.5 rounded-lg text-center text-[12px]">
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold mb-0.5">
                  Total
                </span>
                <span className="font-semibold text-gray-800">
                  {item.totalreviews}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold mb-0.5">
                  Positive
                </span>
                <span className="font-semibold text-green-600">
                  {item.positiveratings}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block text-[10px] uppercase font-bold mb-0.5">
                  Negative
                </span>
                <span className="font-semibold text-red-500">
                  {item.negativeratings}
                </span>
              </div>
            </div>

            <button className="w-full bg-[#e45252] hover:bg-[#cc3e3e] text-white rounded-full py-2 text-xs font-bold border-none cursor-pointer transition-colors">
              View Report
            </button>
          </div>
        ))}
      </div>

      {/* ── Desktop Layout: Standard Wide Table (Hidden on Mobile) ── */}
      <div className="hidden lg:block overflow-x-auto w-full">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-solid border-gray-100">
              {[
                "Event Name",
                "Average Rating",
                "Total Reviews",
                "Positive Review",
                "Negative Review",
                "Sentiment",
                "Action",
              ].map((heading) => (
                <th
                  key={heading}
                  className="py-4 px-5 text-[15px] font-semibold text-[#000000CC] whitespace-nowrap"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {EventFeedbackData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50/30 transition-colors">
                {/* Event Name */}
                <td className="py-4 px-5 text-[13.5px] font-normal text-[#000000E5] align-middle">
                  {item.eventname}
                </td>

                {/* Stars Rating Cell (Perfect horizontal centering alignment fixed) */}
                <td className="py-4 px-5 align-middle">
                  <div className="inline-flex items-center gap-1 text-[13.5px] text-[#000000E5]">
                    <span className="text-[#ffdb20] inline-flex items-center gap-0.5">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                    <span className="text-[#ffdb20] inline-flex items-center gap-0.5">
                      <CiStar />
                      <CiStar />
                    </span>
                    <span className="text-gray-400 font-medium ml-1">
                      (4.5)
                    </span>
                  </div>
                </td>

                {/* Total Reviews */}
                <td className="py-4 px-5 text-[13.5px] font-normal text-[#000000E5] align-middle">
                  {item.totalreviews}
                </td>

                {/* Positive Review */}
                <td className="py-4 px-5 text-[13.5px] font-normal text-[#000000E5] align-middle">
                  {item.positiveratings}
                </td>

                {/* Negative Review */}
                <td className="py-4 px-5 text-[13.5px] font-normal text-[#000000E5] align-middle">
                  {item.negativeratings}
                </td>

                {/* Sentiment */}
                <td className="py-4 px-5 text-[13.5px] font-normal text-[#000000E5] align-middle">
                  {item.sentiment}
                </td>

                {/* View Action Trigger Button */}
                <td className="py-3 px-5 align-middle">
                  <button className="bg-[#e45252] hover:bg-[#cc3e3e] text-white rounded-full py-1.5 px-6 text-xs font-semibold border-none cursor-pointer transition-colors shadow-xs whitespace-nowrap">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventFeedback;
