"use client";
import { VoteStats } from "@/app/platform/vote-app/[id]/page";
import dynamic from "next/dynamic";
import React from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function PollChart({ voteStats }: { voteStats: VoteStats }) {
  const categories = voteStats.map((s) => s[0].title);
  const firstChoices = voteStats.map((s) => s[1].firstOption);
  const secondChoices = voteStats.map((s) => s[1].secondOption);
  const thirdChoices = voteStats.map((s) => s[1].thirdOption);
  const series = [
    {
      name: "first choice",
      data: firstChoices,
    },
    {
      name: "second choice",
      data: secondChoices,
    },
    {
      name: "third choice",
      data: thirdChoices,
    },
  ];
  return (
    <div className="text-black">
      <Chart
        options={{
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: categories,
            tickAmount: "dataPoints",
          },
        }}
        series={series}
        type="bar"
        height="500"
        width="100%"
      />
    </div>
  );
}
