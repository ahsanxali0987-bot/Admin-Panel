import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [state] = React.useState({
    series: [200, 215, 15],

    options: {
      chart: {
        type: "pie",
      },

      labels: ["Past Events", "Total Events", "Upcoming Events"],

      colors: ["#1E9BDB", "#FFD91A", "#F45B5B"],

      legend: {
        show: false,
      },

      dataLabels: {
        enabled: true,
        style: {
          fontSize: "12px",
          fontWeight: 500,
          colors: ["#fff"],
        },
      },

      stroke: {
        width: 0,
      },
    },
  });

  return (
    <div className="relative flex items-center justify-center h-[265px]">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="pie"
        width={260}
      />
      <span className="absolute top-[38px] right-[65px] text-[12px] text-[#1E9BDB]">
        Past Events
      </span>
      <span className="absolute bottom-[30px] left-[120px] text-[12px] text-[#FFD91A]">
        Total Events
      </span>
      <span className="absolute top-[40px] left-[55px] text-[12px] text-[#F45B5B]">
        Upcoming Events
      </span>
    </div>
  );
};

export default ApexChart;
