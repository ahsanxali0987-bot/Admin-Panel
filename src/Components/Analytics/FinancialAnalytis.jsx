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

// Clean static dataset reference
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

// Re-styled isolated legend panel aligned perfectly with layout boundaries
const CustomLegend = () => (
  <div className="flex items-center justify-end gap-5 px-5 pt-4 pb-2 flex-wrap">
    {LEGEND_ITEMS.map(({ color, label }) => (
      <span
        key={label}
        className="flex items-center gap-2 text-[12.5px] font-medium text-gray-500"
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

// High fidelity custom hover tooltips 
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-gray-900/95 border border-solid border-gray-800 rounded-xl px-4 py-3 text-white text-[13px] shadow-xl backdrop-blur-xs">
      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider m-0 mb-2">
        Interval: {label}
      </p>
      <div className="space-y-1.5">
        {payload.map((entry) => (
          <p
            key={entry.name}
            className="flex justify-between items-center gap-6 m-0 text-[12.5px]"
            style={{ color: entry.color }}
          >
            <span className="text-gray-300">{entry.name}</span>
            <span className="font-bold text-white">${entry.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

const FinancialAnalytics = () => {
  return (
    <div className="w-full bg-white rounded-2xl border border-solid border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] overflow-hidden font-[Poppins]">
      {/* Dynamic Header Section */}
      <div className="flex justify-between items-center p-5 border-b border-solid border-gray-50">
        <h3 className="text-[16px] font-bold text-gray-900 m-0">
          Data Management
        </h3>
        <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
          Financial Hub
          </span>
      </div>

      {/* Legends Area */}
      <CustomLegend />

      {/* Recharts Canvas Wrapper with explicit paddings for ticks */}
      <div className="p-4 sm:p-5 pr-6 w-full box-border">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
          >
            {/* Clean structural horizontal divider grids */}
            <CartesianGrid stroke="#F3F4F6" vertical={false} strokeDasharray="4" />
            
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12, fontWeight: 500 }}
              padding={{ left: 20, right: 20 }}
            />
            <YAxis
              domain={[0, 120]}
              ticks={[0, 20, 40, 60, 80, 100, 120]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12, fontWeight: 500 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#F3F4F6', strokeWidth: 1.5 }} />
            
            {/* Smooth curved monotone layout lines structure */}
            <Line
              type="monotone"
              dataKey="ticketSales"
              name="Ticket Sales"
              stroke="#7B5EA7"
              strokeWidth={3}
              dot={{ r: 4, fill: "#7B5EA7", strokeWidth: 0 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
            <Line
              type="monotone"
              dataKey="refunds"
              name="Refunds"
              stroke="#FFD600"
              strokeWidth={3}
              dot={{ r: 4, fill: "#FFD600", strokeWidth: 0 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
            <Line
              type="monotone"
              dataKey="registrationFees"
              name="Registration Fees"
              stroke="#E74C4C"
              strokeWidth={3}
              dot={{ r: 4, fill: "#E74C4C", strokeWidth: 0 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinancialAnalytics;