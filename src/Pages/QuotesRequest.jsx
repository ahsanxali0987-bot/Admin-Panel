import React, { useState } from "react";

const quotations = [
  {
    id: 1,
    quotation: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    eventName: "Corporate Football Tournament",
    eventType: "Outdoor",
    dateTime: "11 AM 12/12/12",
    duration: "2 days",
    expectedParticipants: "11 player/10 Teams/500 Audience",
    specialRequests: "A/V setup",
    serviceSelected: "lorem ipsum",
    status: "Pending Review",
  },
  {
    id: 2,
    quotation: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    eventName: "Corporate Football Tournament",
    eventType: "Outdoor",
    dateTime: "11 AM 12/12/12",
    duration: "2 days",
    expectedParticipants: "11 player/10 Teams/500 Audience",
    specialRequests: "A/V setup",
    serviceSelected: "lorem ipsum",
    status: "Pending Review",
  },
  {
    id: 3,
    quotation: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    eventName: "Corporate Football Tournament",
    eventType: "Outdoor",
    dateTime: "11 AM 12/12/12",
    duration: "2 days",
    expectedParticipants: "11 player/10 Teams/500 Audience",
    specialRequests: "A/V setup",
    serviceSelected: "lorem ipsum",
    status: "Pending Review",
  },
  {
    id: 4,
    quotation: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    eventName: "Corporate Football Tournament",
    eventType: "Outdoor",
    dateTime: "11 AM 12/12/12",
    duration: "2 days",
    expectedParticipants: "11 player/10 Teams/500 Audience",
    specialRequests: "A/V setup",
    serviceSelected: "lorem ipsum",
    status: "Pending Review",
  },
  {
    id: 5,
    quotation: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    eventName: "Corporate Football Tournament",
    eventType: "Outdoor",
    dateTime: "11 AM 12/12/12",
    duration: "2 days",
    expectedParticipants: "11 player/10 Teams/500 Audience",
    specialRequests: "A/V setup",
    serviceSelected: "lorem ipsum",
    status: "Pending Review",
  },
  {
    id: 6,
    quotation: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    eventName: "Corporate Football Tournament",
    eventType: "Outdoor",
    dateTime: "11 AM 12/12/12",
    duration: "2 days",
    expectedParticipants: "11 player/10 Teams/500 Audience",
    specialRequests: "A/V setup",
    serviceSelected: "lorem ipsum",
    status: "Pending Review",
  },
  {
    id: 7,
    quotation: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    eventName: "Corporate Football Tournament",
    eventType: "Outdoor",
    dateTime: "11 AM 12/12/12",
    duration: "2 days",
    expectedParticipants: "11 player/10 Teams/500 Audience",
    specialRequests: "A/V setup",
    serviceSelected: "lorem ipsum",
    status: "Pending Review",
  },
  {
    id: 8,
    quotation: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    eventName: "Corporate Football Tournament",
    eventType: "Outdoor",
    dateTime: "11 AM 12/12/12",
    duration: "2 days",
    expectedParticipants: "11 player/10 Teams/500 Audience",
    specialRequests: "A/V setup",
    serviceSelected: "lorem ipsum",
    status: "Pending Review",
  },
  {
    id: 9,
    quotation: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    eventName: "Corporate Football Tournament",
    eventType: "Outdoor",
    dateTime: "11 AM 12/12/12",
    duration: "2 days",
    expectedParticipants: "11 player/10 Teams/500 Audience",
    specialRequests: "A/V setup",
    serviceSelected: "lorem ipsum",
    status: "Pending Review",
  },
  {
    id: 10,
    quotation: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    eventName: "Corporate Football Tournament",
    eventType: "Outdoor",
    dateTime: "11 AM 12/12/12",
    duration: "2 days",
    expectedParticipants: "11 player/10 Teams/500 Audience",
    specialRequests: "A/V setup",
    serviceSelected: "lorem ipsum",
    status: "Pending Review",
  },
  {
    id: 11,
    quotation: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    eventName: "Corporate Football Tournament",
    eventType: "Outdoor",
    dateTime: "11 AM 12/12/12",
    duration: "2 days",
    expectedParticipants: "11 player/10 Teams/500 Audience",
    specialRequests: "A/V setup",
    serviceSelected: "lorem ipsum",
    status: "Pending Review",
  },
  {
    id: 12,
    quotation: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    eventName: "Corporate Football Tournament",
    eventType: "Outdoor",
    dateTime: "11 AM 12/12/12",
    duration: "2 days",
    expectedParticipants: "11 player/10 Teams/500 Audience",
    specialRequests: "A/V setup",
    serviceSelected: "lorem ipsum",
    status: "Pending Review",
  },
  {
    id: 13,
    quotation: "Lorem Ipsum Dolor Sit Amet Consectetur.",
    eventName: "Corporate Football Tournament",
    eventType: "Outdoor",
    dateTime: "11 AM 12/12/12",
    duration: "2 days",
    expectedParticipants: "11 player/10 Teams/500 Audience",
    specialRequests: "A/V setup",
    serviceSelected: "lorem ipsum",
    status: "Pending Review",
  },
];

const QuotationRequest = () => {
  const [selectedQuotation, setSelectedQuotation] = useState(null);

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-[Poppins]">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* ── LIST VIEW ── */}
      {!selectedQuotation && (
        <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-[#E0E0E0]">
            <h1 className="text-[20px] font-semibold text-black/90 m-0">
              All Quotation
            </h1>
          </div>

          {/* Table */}
          <div className="px-6 py-4">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left text-[18px] font-semibold text-black w-24">
                    No
                  </th>
                  <th className="py-2 px-4 text-left text-[18px] font-semibold text-black">
                    Quotation
                  </th>
                  <th className="py-2 px-4 text-left text-[18px] font-semibold text-black w-36">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {quotations.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition-colors duration-100"
                  >
                    {/* No */}
                    <td className="py-[10px] px-4 text-[13px] font-normal text-black/90">
                      {item.id}
                    </td>

                    {/* Quotation */}
                    <td className="py-[10px] px-4 text-[13px] font-normal text-black/90">
                      {item.quotation}
                    </td>

                    {/* Action */}
                    <td className="py-[10px] px-4">
                      <button
                        onClick={() => setSelectedQuotation(item)}
                        className="bg-[#E45252] text-white rounded-full text-[14px] font-medium px-4 py-1 cursor-pointer border-none hover:bg-[#d04444] transition-colors duration-150"
                      >
                        View Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── DETAIL VIEW ── */}
      {selectedQuotation && (
        <div className="bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden">
          {/* Top bar */}
          <div className="px-6 py-4 border-b border-[#E0E0E0] flex items-center justify-between">
            <h1 className="text-[20px] font-semibold text-black/90 m-0">
              Quotation
            </h1>
            <p className="text-[14px] font-normal text-black/90 m-0">
              <span className="font-semibold">Status:</span>{" "}
              {selectedQuotation.status}
            </p>
          </div>

          {/* Event Summary Card */}
          <div className="p-6 w-[900px] mx-auto">
            <div className="border border-[#E0E0E0] rounded-xl p-6 relative">
              {/* Close button */}
              <button
                onClick={() => setSelectedQuotation(null)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-[#E45252] text-white flex items-center justify-center border-none cursor-pointer text-[16px] font-bold leading-none hover:bg-[#d04444] transition-colors"
              >
                ✕
              </button>

              {/* Title */}
              <h2 className="text-[18px] font-bold text-black text-center mb-6 m-0">
                Event Summary
              </h2>

              {/* Details */}
              <div className="space-y-4">
                {[
                  { label: "Event name :", value: selectedQuotation.eventName },
                  { label: "Event Type :", value: selectedQuotation.eventType },
                  {
                    label: "Date and time :",
                    value: selectedQuotation.dateTime,
                  },
                  { label: "Duration :", value: selectedQuotation.duration },
                  {
                    label: "Expected participants :",
                    value: selectedQuotation.expectedParticipants,
                  },
                  {
                    label: "Special requests :",
                    value: selectedQuotation.specialRequests,
                  },
                  {
                    label: "Service selected :",
                    value: selectedQuotation.serviceSelected,
                  },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="text-[14px] font-semibold text-black min-w-[200px]">
                      {label}
                    </span>
                    <span className="text-[14px] font-normal text-black/80">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <button className="bg-[#E45252] text-white rounded-2xl text-[16px] font-medium px-10 py-2 cursor-pointer border-none hover:bg-[#d04444] transition-colors duration-150">
                Call Now
              </button>
              <button className="bg-[#E45252] text-white rounded-2xl text-[16px] font-medium px-10 py-2 cursor-pointer border-none hover:bg-[#d04444] transition-colors duration-150">
                Send Email
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotationRequest;
