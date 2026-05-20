import React from "react";
import ReactApexChart from "react-apexcharts";

const EventAnalytics = () => {
  const chartData = {
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
      },

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "45%",
          borderRadius: 2,
        },
      },

      dataLabels: {
        enabled: false,
      },

      stroke: {
        show: true,
        width: 1,
        colors: ["transparent"],
      },

      xaxis: {
        labels: {
          show: false,
        },

        axisBorder: {
          show: false,
        },

        axisTicks: {
          show: false,
        },
      },

      yaxis: {
        title: {
          text: "",
        },
      },

      fill: {
        opacity: 1,
      },

      legend: {
        position: "top",
        horizontalAlign: "right",
      },

      colors: ["#18C400", "#FFD600", "#E74C4C"],

      grid: {
        borderColor: "#dcdcdc",
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.08)] overflow-hidden border-b-2 border-[#d9d9d9]">
      {/* Heading */}
      <div className="text-[18px] font-semibold text-[#000000E5] p-4">
        Data Management
      </div>

      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default EventAnalytics;
