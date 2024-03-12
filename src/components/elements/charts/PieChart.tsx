import React from "react";
import ReactApexChart from "react-apexcharts";

type PieChartProps = {
  labels: string[];
  series: number[];
};

const PieChart: React.FC<PieChartProps> = ({ labels, series }) => {
  const options = {
    series: series,
    chart: {
      width: 380,
    },
    labels: labels,
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: false,
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <ReactApexChart options={options} series={options.series} type="pie" />
  );
};

export default PieChart;
