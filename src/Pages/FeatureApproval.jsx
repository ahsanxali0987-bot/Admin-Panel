import React, { useState } from "react";
import ApprovalTabs from "../Components/FeatureApproval/ApprovalTabs";
import { FeatureApprovalData } from "../Data/FeatureApproval";
import ModalContent from "../Components/FeatureApproval/ModalContent";
import PendingRequestsTable from "../Components/FeatureApproval/PendingRequestsTable";
import RejectedRequestsTable from "../Components/FeatureApproval/RejectedRequestsTable";
import ApprovedFeaturesTable from "../Components/FeatureApproval/ApprovedFeaturesTable";

const FeatureApproval = () => {
  // ── States ────────────────────────────────────────────────────────
  // Figma tab links ke exact text matches ke sath mapping state
  const [activeTab, setActiveTab] = useState("Pending Requests");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Sort By");
  
  // Modal handlers ke liye profile state variables
  const [selected, setSelected] = useState(null);
  const [showReject, setShowReject] = useState(false);

  // ── Action Handlers (Figma Flow Logic) ────────────────────────────
  const handleAccept = (row) => {
    console.log("Accepted request for:", row.name);
    // Yahan aap apni accept API hit kar sakte hain
  };

  const handleRejectTrigger = (row) => {
    setSelected(row);
    setShowReject(true); // Modal pop open karke rejection reason dikhane ke liye
  };

  const handleRevoke = (id) => {
    console.log("Revoking access for Row ID:", id);
  };

  const handleRestore = (id) => {
    console.log("Restoring request for Row ID:", id);
  };

  const closeAll = () => {
    setSelected(null);
    setShowReject(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-[Poppins] p-4 sm:p-6 box-border">
      {/* Poppins Google Font Link */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="w-full max-w-[1450px] mx-auto bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-solid border-gray-100 overflow-hidden">
        
        {/* ── Tabs Filter Panel Component ── */}
        {/* Is component ke andar jab tabs par click ho, toh setInternal activeTab update hona chahiye */}
        <ApprovalTabs
          sortBy={sortBy}
          sortOpen={sortOpen}
          setSortOpen={setSortOpen}
          setSortBy={setSortBy}
          activeTab={activeTab}
          setActiveTab={setActiveTab} 
        />

        {/* ── Conditional Table Context Component System ── */}
        <div className="w-full transition-all duration-200">
          {activeTab === "Pending Requests" && (
            <PendingRequestsTable 
              data={FeatureApprovalData} 
              onAccept={handleAccept} 
              onReject={handleRejectTrigger}
              onView={(row) => { setSelected(row); setShowReject(false); }}
            />
          )}
          
          {activeTab === "Approved Features" && (
            <ApprovedFeaturesTable 
              data={FeatureApprovalData} 
              onRevoke={handleRevoke} 
            />
          )}
          
          {activeTab === "Rejected Requests" && (
            <RejectedRequestsTable 
              data={FeatureApprovalData} 
              onRestore={handleRestore} 
            />
          )}
        </div>
      </div>

      {/* ── Global Action Modal Layer Portal ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200"
          onClick={closeAll}
        >
          <ModalContent
            row={selected}
            onClose={closeAll}
            showReject={showReject}
            setShowReject={setShowReject}
          />
        </div>
      )}
    </div>
  );
};

export default FeatureApproval;