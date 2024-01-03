"use client";
import dynamic from "next/dynamic";
import React from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function PollChart() {
  const options = {
    // chart: {
    //   height: 500,
    // },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Korea",
        "Canada",
        "Poland",
        "Italy",
        "France",
        "Japan",
        "China",
      ],
    },
  };
  const series = [
    {
      name: "first choice",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "second choice",
      data: [31, 41, 46, 51, 50, 61, 71, 92],
    },
    {
      name: "third choice",
      data: [31, 41, 46, 51, 50, 61, 71, 92],
    },
  ];
  return (
    <div className="text-black">
      <Chart
        options={options}
        series={series}
        type="bar"
        height="500"
        width="100%"
      />
    </div>
  );
}
