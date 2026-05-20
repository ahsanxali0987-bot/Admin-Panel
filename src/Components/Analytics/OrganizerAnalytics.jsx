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
    <div className="bg-white border border-gray-100 rounded-lg px-3 py-2 shadow-[0_0_10px_rgba(0,0,0,0.08)] text-[12px]">
      <p className="text-gray-400 mb-1 font-medium">Jan {label}</p>
      {payload.map((entry) => (
        <p
          key={entry.name}
          className="flex justify-between gap-4 my-0.5 font-semibold"
          style={{ color: entry.color }}
        >
          <span>{entry.name}</span>
          <span>{entry.value}</span>
        </p>
      ))}
    </div>
  );
};

const CustomDot = ({ cx, cy, value, color, label }) => {
  if (value === undefined) return null;
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={6}
        fill="white"
        stroke={color}
        strokeWidth={2}
      />
    </g>
  );
};

const OrganizerAnalytics = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden border-b-2 border-[#d9d9d9]">
      {/* Header */}
      <div className="p-4 text-[#555F7E] items-center flex justify-between">
        <h1 className="text-[#000000] font-semibold text-[18px]">
          Player/Organizer Analytics
        </h1>
        <p className="flex items-center cursor-pointer hover:text-gray-700 transition-colors">
          More <IoIosArrowRoundForward />
        </p>
      </div>

      {/* Stat Cards */}
      <div className="flex justify-between my-3 px-5">
        <div className="flex flex-col gap-3">
          <div className="w-[200px] h-[80px] p-3 shadow-[0_0_10px_rgba(0,0,0,0.08)] shadow-[#d9d9d9] rounded-lg bg-white">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-[#8E95A9] font-medium">
                  Organizer
                </span>
                <span className="text-[12px] text-[#FCAF45] font-medium">
                  + 22%
                </span>
              </div>
              <span className="text-[22px] text-[#1C2A53] font-semibold">
                8950
              </span>
            </div>
          </div>
          <p className="text-[12px] text-[#8E95A9] font-medium">
            Jan 16 - Jan 30 organizers Joined
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-[200px] h-[80px] p-3 shadow-[0_0_10px_rgba(0,0,0,0.08)] shadow-[#d9d9d9] rounded-lg bg-white">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-[#8E95A9] font-medium">
                  Player
                </span>
                <span className="text-[12px] text-[#E45252] font-medium">
                  24%
                </span>
              </div>
              <span className="text-[22px] text-[#1C2A53] font-semibold">
                1520
              </span>
            </div>
          </div>
          <p className="text-[12px] text-[#8E95A9] font-medium">
            Jan 16 - Jan 30 players Joined
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="px-2 pb-4 pt-2">
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            data={data}
            margin={{ top: 20, right: 20, left: -30, bottom: 0 }}
          >
            <defs>
              <linearGradient id="organizerGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FCAF45" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#FCAF45" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="playerGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#E45252" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#E45252" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#f0f0f0"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#bbb", fontSize: 11 }}
              interval={1}
            />
            <YAxis hide={true} domain={[30, 120]} />
            <Tooltip content={<CustomTooltip />} />

            {/* Organizer peak label */}
            <ReferenceDot
              x="24"
              y={50}
              r={6}
              fill="white"
              stroke="#FCAF45"
              strokeWidth={2}
              label={{
                value: "50",
                position: "top",
                fill: "#fff",
                fontSize: 11,
                fontWeight: 700,
                background: "#FCAF45",
              }}
            />

            {/* Player peak label */}
            <ReferenceDot
              x="26"
              y={100}
              r={6}
              fill="white"
              stroke="#E45252"
              strokeWidth={2}
              label={{
                value: "100",
                position: "top",
                fill: "#fff",
                fontSize: 11,
                fontWeight: 700,
              }}
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
