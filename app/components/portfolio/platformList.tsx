"use client";

import Image from "next/image";
import PlatFormListItem from "./platformListItem";

type Props = {};

const APPS = [
  {
    title: "Vote App",
    subtitle: "Single Transferable Vote(STV) electoral system",
    logo: (
      <Image
        alt="app logo"
        src="/platform/vote-icon.png"
        fill
        priority
        className="rounded-md object-cover"
      />
    ),
    url: "/platform/vote-app",
  },
  {
    title: "Sentiment Analyzer",
    subtitle: "Custom Machine Learning Model for Analyzing Text Sentiment",
    logo: (
      <Image
        alt="app logo"
        src="/platform/feedback.png"
        fill
        priority
        className="rounded-md object-cover"
      />
    ),
    url: "/platform/sentiment-analysis",
  },
];

export default function PlatformList({}: Props) {
  return (
    <div className="mb-12">
      {APPS.map((obj, idx) => (
        <PlatFormListItem key={idx} app={obj} />
      ))}
    </div>
  );
}
