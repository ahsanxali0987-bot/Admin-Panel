import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuPencilLine } from "react-icons/lu";
import ToggleButton from "./ToggleButton";

/* ── Static data: payment gateways with initial enabled state ── */
const initialGateways = [
  { id: 1, name: "Stripe", enabled: true },
  { id: 2, name: "PayPal", enabled: true },
];

/* ── Static data: transaction fee structure per gateway ── */
const transactionFeesData = [
  { id: 1, gateway: "Stripe", fee: "2.9%", feeType: "Percentage" },
  { id: 2, gateway: "PayPal", fee: "$0.30 + 2.9%", feeType: "Flat + %" },
];

/* ── Static data: live monitoring stats per gateway ── */
const monitorGatewaysData = [
  { id: 1, gateway: "Stripe", status: "Online", processed: 1200, failed: 5 },
  { id: 2, gateway: "PayPal", status: "Online", processed: 800, failed: 10 },
];

const PaymentSettings = () => {
  /* Local state — manages enabled/disabled state of each payment gateway */
  const [paymentGateways, setPaymentGateways] = useState(initialGateways);

  /* Flips the enabled flag for the gateway matching the given id */
  const toggleGateway = (id) =>
    setPaymentGateways((prev) =>
      prev.map((g) => (g.id === id ? { ...g, enabled: !g.enabled } : g)),
    );

  return (
    <div>
      {/* ── Section header with Commission Setting shortcut ── */}
      <div className="text-[16px] font-semibold text-[#000000E5] bg-white px-4 pt-2 pb-2 flex items-center justify-between">
        <span>Payment Settings Section</span>
        {/* Navigates to commission configuration (wiring pending) */}
        <Link to="/commission-setting">
          <button className="bg-[#e45252] hover:bg-[#cc3e3e] text-white text-[12px] font-semibold px-4 py-1.5 rounded-md transition-colors">
            Commission Setting
          </button>
        </Link>
      </div>

      {/* ── Sub-section 1: Payment Gateways ── */}
      <div className="rounded-lg overflow-hidden px-5 pt-3 pb-2">
        <p className="text-[14px] font-semibold text-[#000000CC] pb-2">
          1. Payment Gateways
        </p>
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr>
              <th className="py-1 px-4 text-left text-[13px] font-medium text-[#000000CC]">
                Payment Gateway
              </th>
              <th className="py-1 px-4 text-right text-[13px] font-medium text-[#000000CC]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {paymentGateways.map((gw) => (
              <tr key={gw.id}>
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {gw.name}
                </td>
                <td className="py-2 px-4">
                  <div className="flex justify-end items-center gap-2">
                    {/* Toggle to activate/deactivate this gateway */}
                    <ToggleButton
                      enabled={gw.enabled}
                      onToggle={() => toggleGateway(gw.id)}
                    />
                    {/* Edit gateway configuration (wiring pending) */}
                    <button className="w-8 h-8 rounded-full bg-[#e45252] flex items-center justify-center hover:bg-[#cc3e3e] transition-colors">
                      <LuPencilLine className="text-white" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="h-[9px] bg-white border-none" />

      {/* ── Sub-section 2: Transaction Fees ── */}
      <div className="rounded-lg overflow-hidden px-5 pt-3 pb-2">
        <p className="text-[14px] font-semibold text-[#000000CC] pb-2">
          2. Transaction Fees
        </p>
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr>
              <th className="py-1 px-4 text-left text-[13px] font-medium text-[#000000CC]">
                Payment Gateway
              </th>
              <th className="py-1 px-4 text-left text-[13px] font-medium text-[#000000CC]">
                Transaction Fee
              </th>
              <th className="py-1 px-4 text-left text-[13px] font-medium text-[#000000CC]">
                Fee Type
              </th>
              <th className="py-1 px-4 text-right text-[13px] font-medium text-[#000000CC]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {transactionFeesData.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {item.gateway}
                </td>
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {item.fee}
                </td>
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {item.feeType}
                </td>
                <td className="py-2 px-4">
                  {/* Edit fee configuration for this gateway (wiring pending) */}
                  <div className="flex justify-end">
                    <button className="w-8 h-8 rounded-full bg-[#e45252] flex items-center justify-center hover:bg-[#cc3e3e] transition-colors">
                      <LuPencilLine className="text-white" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="h-[9px] bg-white border-none" />

      {/* ── Sub-section 3: Monitor Payment Gateways ── */}
      <div className="rounded-lg overflow-hidden px-5 pt-3 pb-5">
        <p className="text-[14px] font-semibold text-[#000000CC] pb-2">
          3. Monitor Payment Gateways
        </p>
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr>
              <th className="py-1 px-4 text-left text-[13px] font-medium text-[#000000CC]">
                Payment Gateway
              </th>
              <th className="py-1 px-4 text-left text-[13px] font-medium text-[#000000CC]">
                Status
              </th>
              <th className="py-1 px-4 text-left text-[13px] font-medium text-[#000000CC]">
                Transactions Processed
              </th>
              <th className="py-1 px-4 text-left text-[13px] font-medium text-[#000000CC]">
                Failed Transactions
              </th>
              <th className="py-1 px-4 text-right text-[13px] font-medium text-[#000000CC]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {monitorGatewaysData.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {item.gateway}
                </td>
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {item.status}
                </td>
                {/* toLocaleString adds thousands separator for readability */}
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {item.processed.toLocaleString()}
                </td>
                <td className="py-2 px-4 text-[13px] text-[#000000E5]">
                  {item.failed}
                </td>
                <td className="py-2 px-4">
                  {/* View detailed transaction log for this gateway */}
                  <div className="flex justify-end">
                    <button className="bg-[#e45252] hover:bg-[#cc3e3e] text-white text-[12px] font-semibold px-4 py-1 rounded-md transition-colors">
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="bg-white h-14" />
    </div>
  );
};

export default PaymentSettings;
