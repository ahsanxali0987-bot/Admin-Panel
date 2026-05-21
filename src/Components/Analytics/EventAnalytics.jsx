import React from "react";
import ReactApexChart from "react-apexcharts";

const EventAnalytics = () => {
  const chartData = {
    // Figma/Mock Data Values
    series: [
      {
        name: "Players Joined",
        data: [132, 101, 132, 127, 116],
      },
      {
        name: "Teams Formed",
        data: [112, 89, 112, 108, 99],
      },
      {
        name: "Average Engagement",
        data: [121, 95, 121, 116, 107],
      },
    ],

    options: {
      chart: {
        type: "bar",
        toolbar: {
          show: false,
        },
        fontFamily: "Poppins, sans-serif",
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "50%",
          borderRadius: 4, // Clean slightly rounded corners for modern look
          borderRadiusApplication: "end",
        },
      },

      dataLabels: {
        enabled: false,
      },

      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },

      // X-Axis configurations fixed with readable labels
      xaxis: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
        labels: {
          show: true,
          style: {
            colors: "#9CA3AF", // Tailwind gray-400 equivalent
            fontSize: "12px",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },

      yaxis: {
        labels: {
          style: {
            colors: "#9CA3AF",
            fontSize: "12px",
          },
        },
      },

      fill: {
        opacity: 1,
      },

      legend: {
        position: "top",
        horizontalAlign: "right",
        fontSize: "13px",
        fontWeight: 500,
        labels: {
          colors: "#374151", // Tailwind gray-700
        },
        markers: {
          radius: 12, // Circular legend dots
        },
      },

      // Premium dashboard flat color schema
      colors: ["#18C400", "#FFD600", "#E74C4C"],

      grid: {
        borderColor: "#F3F4F6", // Ultra-light lines for clean spacing
        strokeDashArray: 4,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      tooltip: {
        theme: "light",
        y: {
          formatter: function (val) {
            return val + " Units";
          },
        },
      },
    },
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-solid border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.02)] overflow-hidden font-[Poppins]">
      {/* Dynamic Header Section */}
      <div className="flex justify-between items-center p-5 border-b border-solid border-gray-50">
        <h3 className="text-[16px] font-bold text-gray-900 m-0">
          Data Management
        </h3>
        <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2.5 py-1 rounded-md">
          Live Metrics
        </span>
      </div>

      {/* Chart Canvas Area Wrapper with padding */}
      <div className="p-4 sm:p-5 w-full box-border overflow-hidden">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={320}
        />
      </div>
    </div>
  );
};

export default EventAnalytics;
