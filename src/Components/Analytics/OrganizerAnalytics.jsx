import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";

const data = [
  { day: "16", organizer: 60, player: 55 },
  { day: "17", organizer: 55, player: 50 },
  { day: "18", organizer: 50, player: 45 },
  { day: "19", organizer: 60, player: 55 },
  { day: "20", organizer: 80, player: 75 },
  { day: "21", organizer: 75, player: 85 },
  { day: "22", organizer: 65, player: 70 },
  { day: "23", organizer: 55, player: 60 },
  { day: "24", organizer: 50, player: 55 },
  { day: "25", organizer: 60, player: 65 },
  { day: "26", organizer: 75, player: 100 },
  { day: "27", organizer: 70, player: 90 },
  { day: "28", organizer: 65, player: 80 },
  { day: "29", organizer: 80, player: 90 },
  { day: "30", organizer: 90, player: 95 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-solid border-gray-100 rounded-xl px-3 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-[12px] font-[Poppins]">
      <p className="text-gray-400 mb-1.5 font-medium m-0">Jan {label}</p>
      <div className="space-y-1">
        {payload.map((entry) => (
          <p
            key={entry.name}
            className="flex justify-between gap-5 my-0.5 font-semibold m-0"
            style={{ color: entry.color }}
          >
            <span>{entry.name}:</span>
            <span className="text-gray-900">{entry.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

// Valid custom SVG dynamic label builder function for tracking peak badges cleanly
const renderCustomLabel =
  (bgColor) =>
  ({ cx, cy, value }) => {
    if (!cx || !cy) return null;
    return (
      <g>
        {/* Label Background Badge Capsule */}
        <rect
          x={cx - 16}
          y={cy - 26}
          width={32}
          height={18}
          rx={4}
          fill={bgColor}
        />
        {/* Label Text Value */}
        <text
          x={cx}
          y={cy - 14}
          fill="#ffffff"
          textAnchor="middle"
          fontSize="11px"
          fontWeight="700"
          fontFamily="Poppins"
        >
          {value}
        </text>
      </g>
    );
  };

const OrganizerAnalytics = () => {
  return (
    <div className="w-full bg-white rounded-2xl border border-solid border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] overflow-hidden font-[Poppins]">
      {/* Header Section */}
      <div className="p-5 items-center flex justify-between border-b border-solid border-gray-50">
        <h3 className="text-gray-900 font-bold text-[16px] m-0">
          Player/Organizer Analytics
        </h3>
        <button className="flex items-center gap-1 bg-transparent border-none text-xs font-bold text-gray-400 hover:text-gray-600 cursor-pointer transition-colors">
          More <IoIosArrowRoundForward className="text-lg" />
        </button>
      </div>

      {/* Stat Cards Row Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5">
        <div className="flex flex-col gap-2">
          <div className="w-full p-4 border border-solid border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.01)] rounded-xl bg-white box-border">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-gray-400 font-semibold tracking-wide uppercase">
                  Organizer
                </span>
                <span className="text-[12px] text-amber-500 font-bold bg-amber-50 px-2 py-0.5 rounded-md">
                  + 22%
                </span>
              </div>
              <span className="text-[26px] text-slate-800 font-bold tracking-tight mt-1">
                8,950
              </span>
            </div>
          </div>
          <p className="text-[11.5px] text-gray-400 font-medium m-0 pl-1">
            Jan 16 - Jan 30 organizers Joined
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-full p-4 border border-solid border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.01)] rounded-xl bg-white box-border">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-gray-400 font-semibold tracking-wide uppercase">
                  Player
                </span>
                <span className="text-[12px] text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded-md">
                  - 24%
                </span>
              </div>
              <span className="text-[26px] text-slate-800 font-bold tracking-tight mt-1">
                1,520
              </span>
            </div>
          </div>
          <p className="text-[11.5px] text-gray-400 font-medium m-0 pl-1">
            Jan 16 - Jan 30 players Joined
          </p>
        </div>
      </div>

      {/* Area Chart Canvas Section */}
      <div className="p-4 sm:p-5 pr-6 pl-2 w-full box-border">
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 5, left: -25, bottom: 0 }}
          >
            <defs>
              <linearGradient id="organizerGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FCAF45" stopOpacity={0.18} />
                <stop offset="95%" stopColor="#FCAF45" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="playerGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E45252" stopOpacity={0.18} />
                <stop offset="95%" stopColor="#E45252" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#F3F4F6"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 11, fontWeight: 500 }}
              interval={1}
            />
            <YAxis hide={true} domain={[30, 120]} />
            <Tooltip content={<CustomTooltip />} />

            {/* Organizer peak baseline tracker dot point reference */}
            <ReferenceDot
              x="24"
              y={50}
              r={5}
              fill="white"
              stroke="#FCAF45"
              strokeWidth={2.5}
              label={renderCustomLabel("#FCAF45")}
              isFront={true}
            />

            {/* Player peak baseline tracker dot point reference */}
            <ReferenceDot
              x="26"
              y={100}
              r={5}
              fill="white"
              stroke="#E45252"
              strokeWidth={2.5}
              label={renderCustomLabel("#E45252")}
              isFront={true}
            />

            <Area
              type="monotone"
              dataKey="organizer"
              name="Organizer"
              stroke="#FCAF45"
              strokeWidth={2.5}
              fill="url(#organizerGrad)"
              dot={false}
              activeDot={{
                r: 5,
                fill: "#FCAF45",
                stroke: "white",
                strokeWidth: 2,
              }}
            />
            <Area
              type="monotone"
              dataKey="player"
              name="Player"
              stroke="#E45252"
              strokeWidth={2.5}
              fill="url(#playerGrad)"
              dot={false}
              activeDot={{
                r: 5,
                fill: "#E45252",
                stroke: "white",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrganizerAnalytics;
