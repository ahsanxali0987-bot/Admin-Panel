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
    <div>
      {/* Header */}
      <div className="py-4 px-5">
        {/* Heading */}
        <h2 className="text-[17px] font-semibold text-[#000000E5] border-b-2 border-[#d9d9d9] pb-2">
          Event Feedback
        </h2>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        {/* Table body */}
        <thead>
          {/* Table heading */}
          <tr>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Event Name
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Average Rating
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Total Reviews
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Positive Review
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Negative Review
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Sentiment
            </th>
            <th className="py-1 px-5 text-left text-[16px] font-medium text-[#000000CC]">
              Action
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {EventFeedbackData.map((item, index) => (
            <tr key={index}>
              {/* Player Name */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {item.eventname}
              </td>

              {/* Rating */}
              <td className="flex gap-1 px-2 text-[13px] font-normal text-[#000000E5] pt-5  ">
                <span className="text-[#ffdb20] flex items-center gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <span className="flex items-center gap-1">
                  <CiStar />
                  <CiStar />
                </span>
                <p className="">(4.5)</p>
              </td>

              {/* Total Reviews */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {item.totalreviews}
              </td>

              {/* Positive Review */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {item.positiveratings}
              </td>

              {/* Negative Review */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {item.negativeratings}
              </td>

              {/* Sentiment */}
              <td className="px-5 text-[13px] font-normal text-[#000000E5]">
                {item.sentiment}
              </td>

              {/* Button */}
              <td className="py-2 px-5">
                <button className="bg-[#e45252] text-white rounded-full py-2 px-6 text-sm font-medium">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventFeedback;
