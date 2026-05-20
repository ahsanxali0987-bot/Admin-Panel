import React, { useState } from "react";
import QuotationList from "../Components/QuotesRequest/QuotationList";
import { QuotationRequestData } from "../Data/QuotationRequestData";
import QuotationDetail from "../Components/QuotesRequest/QuotationDetail";

const QuotesRequest = () => {
  const [selectedQuotation, setSelectedQuotation] = useState(null);

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-[Poppins] flex justify-center items-start">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Main Structural Framework Container */}
      <div className="w-full max-w-[1300px] mx-auto">
        {!selectedQuotation ? (
          <QuotationList
            data={QuotationRequestData}
            onSelect={setSelectedQuotation}
          />
        ) : (
          <QuotationDetail
            quotation={selectedQuotation}
            onClose={() => setSelectedQuotation(null)}
          />
        )}
      </div>
    </div>
  );
};

export default QuotesRequest;
