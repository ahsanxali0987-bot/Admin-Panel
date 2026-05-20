import React from "react";
import ReactApexChart from "react-apexcharts";

const Events = () => {
  const [state] = React.useState({
    series: [200, 215, 15],
    options: {
      chart: { 
        type: "pie",
        parentHeightOffset: 0,
      },
      labels: ["Past Events", "Total Events", "Upcoming Events"],
      colors: ["#1E9BDB", "#FFD91A", "#F45B5B"],
      legend: { show: false }, // Hiding default legend to use custom layout
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val.toFixed(1) + "%"; // Standard percentage display inside pie
        },
        style: { 
          fontSize: "11px", 
          fontWeight: 600, 
          colors: ["#fff"] 
        },
        dropShadow: { enabled: false }
      },
      stroke: { width: 0 },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: { width: "100%" }
        }
      }]
    },
  });

  return (
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden w-full h-full flex flex-col">
      {/* Heading */}
      <h1 className="text-[16px] sm:text-[18px] text-[#000000E5] font-semibold p-4">
        Total Events
      </h1>
      
      {/* Dividing line */}
      <hr className="border-t border-[#ececec]" />
      
      {/* Chart Wrapper Container */}
      <div className="relative flex items-center justify-center flex-grow p-4 min-h-[280px] w-full max-w-[400px] mx-auto">
        
        {/* Dynamic Apex Chart */}
        <div className="max-w-full flex justify-center items-center">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="pie"
            width="100%"
            height={240}
          />
        </div>

        {/* CRITICAL FIX: 
          Using percentage-based absolute positioning (top/bottom/left/right in %) 
          instead of fixed pixels so they scale naturally with screen container bounds.
        */}
        <span className="absolute top-[15%] right-[5%] sm:right-[10%] text-[11px] sm:text-[12px] text-[#1E9BDB] font-medium whitespace-nowrap pointer-events-none">
          Past Events
        </span>
        
        <span className="absolute bottom-[12%] left-[25%] sm:left-[30%] text-[11px] sm:text-[12px] text-[#FFD91A] font-medium whitespace-nowrap pointer-events-none">
          Total Events
        </span>
        
        <span className="absolute top-[16%] left-[8%] sm:left-[12%] text-[11px] sm:text-[12px] text-[#F45B5B] font-medium whitespace-nowrap pointer-events-none">
          Upcoming Events
        </span>
        
      </div>
    </div>
  );
};

export default Events;