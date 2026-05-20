import React from "react";
import DetailRow from "./DetailRow";

const QuotationDetail = ({ quotation, onClose }) => {
  return (
    <div className="bg-white rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 w-full">
      {/* Top Bar / Heading block */}
      <div className="px-4 py-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E0E0E0]">
        <h1 className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-black/90 m-0">
          Quotation Details
        </h1>
        <p className="text-[13px] sm:text-[14px] font-normal text-black/90 m-0 bg-gray-50 px-3 py-1 rounded-md border border-gray-100 self-start sm:self-auto">
          <span className="font-semibold text-gray-500">Status:</span>{" "}
          <span className="text-amber-600 font-medium">{quotation.status || "Pending"}</span>
        </p>
      </div>

      {/* Main Container Area - No hardcoded width block limits */}
      <div className="p-4 sm:p-6 lg:p-8 max-w-[900px] mx-auto w-full">
        <div className="border border-[#E0E0E0] rounded-xl p-4 sm:p-6 relative bg-white shadow-sm">
          {/* Circular Close Action Trigger */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 rounded-full bg-[#E45252] text-white flex items-center justify-center border-none cursor-pointer text-[14px] font-bold hover:bg-[#d04444] transition-all active:scale-90 shadow-sm"
            aria-label="Close details"
          >
            ✕
          </button>

          <h2 className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-black text-center mb-5 sm:mb-6 m-0 tracking-wide">
            Event Summary
          </h2>

          {/* Dynamic Information Mapping Fields */}
          <div className="space-y-3 sm:space-y-4">
            <DetailRow label="Event Name :" value={quotation.eventName} />
            <DetailRow label="Event Type :" value={quotation.eventType} />
            <DetailRow label="Date and Time :" value={quotation.dateTime} />
            <DetailRow label="Duration :" value={quotation.duration} />
            <DetailRow label="Expected Participants :" value={quotation.expectedParticipants} />
            <DetailRow label="Special Requests :" value={quotation.specialRequests} />
            <DetailRow label="Service Selected :" value={quotation.serviceSelected} />
          </div>
        </div>

        {/* Action Buttons Hub: Layout shifts from 100% stack layout on mobile screens to custom flex row layout on bigger screens */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8">
          <button className="w-full sm:w-auto bg-[#E45252] text-white rounded-xl sm:rounded-2xl text-[14px] sm:text-[16px] font-medium px-8 py-2.5 sm:py-2 hover:bg-[#d04444] transition-all active:scale-95 shadow-sm">
            Call Now
          </button>
          <button className="w-full sm:w-auto bg-[#E45252] text-white rounded-xl sm:rounded-2xl text-[14px] sm:text-[16px] font-medium px-8 py-2.5 sm:py-2 hover:bg-[#d04444] transition-all active:scale-95 shadow-sm">
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuotationDetail;