import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { label: "120", ticketSales: 35, refunds: 50, registrationFees: 65 },
  { label: "100", ticketSales: 83, refunds: 15, registrationFees: 57 },
  { label: "80", ticketSales: 83, refunds: 90, registrationFees: 110 },
  { label: "60", ticketSales: 45, refunds: 47, registrationFees: 62 },
  { label: "40", ticketSales: 50, refunds: 25, registrationFees: 12 },
  { label: "20", ticketSales: 85, refunds: 115, registrationFees: 47 },
  { label: "0", ticketSales: 47, refunds: 15, registrationFees: 8 },
];

const LEGEND_ITEMS = [
  { color: "#7B5EA7", label: "Ticket Sales" },
  { color: "#FFD600", label: "Refunds" },
  { color: "#E74C4C", label: "Registration Fees" },
];

const CustomLegend = () => (
  <div className="flex items-center justify-end gap-5 mb-3">
    {LEGEND_ITEMS.map(({ color, label }) => (
      <span
        key={label}
        className="flex items-center gap-1.5 text-[13px] text-gray-500"
      >
        <span
          className="w-2.5 h-2.5 rounded-full inline-block flex-shrink-0"
          style={{ backgroundColor: color }}
        />
        {label}
      </span>
    ))}
  </div>
);

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#1a1a2e] border border-[#2a2a4a] rounded-xl px-4 py-2.5 text-white text-[13px] shadow-[0_0_10px_rgba(0,0,0,0.08)]">
      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
        {label}
      </p>
      {payload.map((entry) => (
        <p
          key={entry.name}
          className="flex justify-between gap-5 my-0.5"
          style={{ color: entry.color }}
        >
          <span>{entry.name}</span>
          <span className="font-bold">{entry.value}</span>
        </p>
      ))}
    </div>
  );
};

const FinancialAnalytics = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Heading */}
      <div className="text-[18px] font-semibold text-[#000000E5] p-4 border-b-2 border-[#d9d9d9]">
        Data Management
      </div>

      <CustomLegend />

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 4, right: 8, left: -12, bottom: 0 }}
        >
          <CartesianGrid stroke="#ebebeb" vertical={true} />
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#999", fontSize: 12 }}
          />
          <YAxis
            domain={[0, 120]}
            ticks={[0, 20, 40, 60, 80, 100, 120]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#bbb", fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="linear"
            dataKey="ticketSales"
            name="Ticket Sales"
            stroke="#7B5EA7"
            strokeWidth={2}
            dot={{ r: 4, fill: "#7B5EA7" }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="linear"
            dataKey="refunds"
            name="Refunds"
            stroke="#FFD600"
            strokeWidth={2}
            dot={{ r: 4, fill: "#FFD600" }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="linear"
            dataKey="registrationFees"
            name="Registration Fees"
            stroke="#E74C4C"
            strokeWidth={2}
            dot={{ r: 4, fill: "#E74C4C" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinancialAnalytics;
