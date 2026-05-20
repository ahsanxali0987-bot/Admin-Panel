import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuPencilLine } from "react-icons/lu";
import ToggleButton from "./ToggleButton";

const initialGateways = [
  { id: 1, name: "Stripe", enabled: true },
  { id: 2, name: "PayPal", enabled: true },
];

const transactionFeesData = [
  { id: 1, gateway: "Stripe", fee: "2.9%", feeType: "Percentage" },
  { id: 2, gateway: "PayPal", fee: "$0.30 + 2.9%", feeType: "Flat + %" },
];

const monitorGatewaysData = [
  { id: 1, gateway: "Stripe", status: "Online", processed: 1200, failed: 5 },
  { id: 2, gateway: "PayPal", status: "Online", processed: 800, failed: 10 },
];

const PaymentSettings = () => {
  const [paymentGateways, setPaymentGateways] = useState(initialGateways);

  const toggleGateway = (id) =>
    setPaymentGateways((prev) =>
      prev.map((g) => (g.id === id ? { ...g, enabled: !g.enabled } : g)),
    );

  return (
    <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-6 bg-[#F5F5F5] min-h-screen box-border font-[Poppins]">
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <div className="bg-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden">
        {/* ── Section header with Commission Setting shortcut ── */}
        <div className="text-[16px] sm:text-[18px] font-semibold text-[#000000E5] bg-white px-4 py-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-[#dfdfdf]">
          <span>Payment Settings Section</span>
          <Link to="/commission-setting" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#e45252] hover:bg-[#cc3e3e] text-white text-[12px] font-semibold px-4 py-2 rounded-md transition-colors shadow-xs">
              Commission Setting
            </button>
          </Link>
        </div>

        {/* ── Sub-section 1: Payment Gateways ── */}
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <p className="text-[14px] sm:text-[15px] font-semibold text-[#000000CC] pb-3 m-0">
            1. Payment Gateways
          </p>

          {/* Mobile Gateway View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
            {paymentGateways.map((gw) => (
              <div
                key={gw.id}
                className="bg-gray-50 p-4 rounded-xl border border-gray-200/60 flex items-center justify-between shadow-xs"
              >
                <span className="text-[14px] font-medium text-gray-900">
                  {gw.name}
                </span>
                <div className="flex items-center gap-3">
                  <ToggleButton
                    enabled={gw.enabled}
                    onToggle={() => toggleGateway(gw.id)}
                  />
                  <button className="w-8 h-8 rounded-full bg-[#e45252] flex items-center justify-center hover:bg-[#cc3e3e] transition-colors shadow-xs">
                    <LuPencilLine className="text-white text-sm" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Gateway Table */}
          <div className="hidden md:block overflow-x-auto w-full rounded-xl border border-gray-100 bg-gray-50/30">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-[#dfdfdf]">
                  <th className="py-3 px-5 text-left text-[13px] sm:text-[14px] font-medium text-[#000000CC]">
                    Payment Gateway
                  </th>
                  <th className="py-3 px-5 text-right text-[13px] sm:text-[14px] font-medium text-[#000000CC] pr-8">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {paymentGateways.map((gw) => (
                  <tr
                    key={gw.id}
                    className="hover:bg-gray-50/40 transition-colors"
                  >
                    <td className="py-3.5 px-5 text-[13px] sm:text-[14px] text-[#000000E5] font-medium">
                      {gw.name}
                    </td>
                    <td className="py-2 px-5 pr-6">
                      <div className="flex justify-end items-center gap-3">
                        <ToggleButton
                          enabled={gw.enabled}
                          onToggle={() => toggleGateway(gw.id)}
                        />
                        <button className="w-8 h-8 rounded-full bg-[#e45252] flex items-center justify-center hover:bg-[#cc3e3e] transition-colors shadow-xs">
                          <LuPencilLine className="text-white text-sm" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Sub-section 2: Transaction Fees ── */}
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <p className="text-[14px] sm:text-[15px] font-semibold text-[#000000CC] pb-3 m-0">
            2. Transaction Fees
          </p>

          {/* Mobile Fees View */}
          <div className="space-y-3 md:hidden">
            {transactionFeesData.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 p-4 rounded-xl border border-gray-200/60 space-y-2 shadow-xs"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-bold text-gray-900">
                    {item.gateway}
                  </span>
                  <button className="w-7 h-7 rounded-full bg-[#e45252] flex items-center justify-center hover:bg-[#cc3e3e] transition-colors shadow-xs">
                    <LuPencilLine className="text-white text-xs" />
                  </button>
                </div>
                <div className="grid grid-cols-2 text-xs pt-1 border-t border-gray-200/40">
                  <div>
                    <span className="text-gray-400">Fee Rate:</span>{" "}
                    <span className="font-semibold text-gray-800">
                      {item.fee}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400">Type:</span>{" "}
                    <span className="font-medium text-gray-800">
                      {item.feeType}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Fees Table */}
          <div className="hidden md:block overflow-x-auto w-full rounded-xl border border-gray-100 bg-gray-50/30">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-[#dfdfdf]">
                  {[
                    "Payment Gateway",
                    "Transaction Fee",
                    "Fee Type",
                    "Action",
                  ].map((th) => (
                    <th
                      key={th}
                      className={`py-3 px-5 text-left text-[13px] sm:text-[14px] font-medium text-[#000000CC] ${th === "Action" ? "text-right pr-8" : ""}`}
                    >
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {transactionFeesData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50/40 transition-colors"
                  >
                    <td className="py-3.5 px-5 text-[13px] text-[#000000E5] font-medium">
                      {item.gateway}
                    </td>
                    <td className="py-3.5 px-5 text-[13px] text-gray-700 font-mono">
                      {item.fee}
                    </td>
                    <td className="py-3.5 px-5 text-[13px] text-gray-600">
                      {item.feeType}
                    </td>
                    <td className="py-2 px-5 pr-6 text-right">
                      <button className="w-8 h-8 rounded-full inline-flex items-center justify-center bg-[#e45252] hover:bg-[#cc3e3e] transition-colors shadow-xs">
                        <LuPencilLine className="text-white text-sm" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Sub-section 3: Monitor Payment Gateways ── */}
        <div className="p-4 sm:p-6">
          <p className="text-[14px] sm:text-[15px] font-semibold text-[#000000CC] pb-3 m-0">
            3. Monitor Payment Gateways
          </p>

          {/* Mobile Monitor Cards View */}
          <div className="space-y-3.5 md:hidden">
            {monitorGatewaysData.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 p-4 rounded-xl border border-gray-200/60 space-y-3 shadow-xs"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[15px] font-bold text-gray-900">
                    {item.gateway}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium text-green-700 bg-green-50 border border-green-200">
                    {item.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs bg-white p-2.5 rounded-lg border border-gray-100">
                  <div>
                    <span className="text-gray-400 block mb-0.5">
                      Processed:
                    </span>
                    <span className="font-bold text-gray-900 text-[13px] font-mono">
                      {item.processed.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-400 block mb-0.5">Failed:</span>
                    <span className="font-bold text-red-600 text-[13px] font-mono">
                      {item.failed}
                    </span>
                  </div>
                </div>
                <button className="w-full bg-[#e45252] hover:bg-[#cc3e3e] text-white text-[12px] font-semibold py-2 rounded-md transition-colors shadow-xs">
                  View Logs
                </button>
              </div>
            ))}
          </div>

          {/* Desktop Monitor Table */}
          <div className="hidden md:block overflow-x-auto w-full rounded-xl border border-gray-100 bg-gray-50/30">
            <table className="w-full border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-gray-50 border-b border-[#dfdfdf]">
                  {[
                    "Payment Gateway",
                    "Status",
                    "Transactions Processed",
                    "Failed Transactions",
                    "Action",
                  ].map((th) => (
                    <th
                      key={th}
                      className={`py-3 px-5 text-left text-[13px] sm:text-[14px] font-medium text-[#000000CC] ${th === "Action" ? "text-right pr-8" : ""}`}
                    >
                      {th}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {monitorGatewaysData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50/40 transition-colors"
                  >
                    <td className="py-3.5 px-5 text-[13px] text-[#000000E5] font-medium">
                      {item.gateway}
                    </td>
                    <td className="py-3.5 px-5 text-[13px]">
                      <span className="px-2 py-0.5 rounded text-xs font-medium ">
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-[13px] text-gray-800 font-mono">
                      {item.processed.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-5 text-[13px] font-semibold font-mono">
                      {item.failed}
                    </td>
                    <td className="py-2 px-5 text-right pr-6">
                      <button className="bg-[#e45252] hover:bg-[#cc3e3e] text-white text-[12px] font-semibold px-4 py-1.5 rounded-md transition-colors shadow-xs">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSettings;
