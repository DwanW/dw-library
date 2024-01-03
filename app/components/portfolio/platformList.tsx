"use client";

import Image from "next/image";
import VoteLogo from "public/platform/vote-icon.png";
import PlatFormListItem from "./platformListItem";

type Props = {};

const APPS = [
  {
    title: "Vote App",
    subtitle: "Single Transferable Vote(STV) electoral system",
    logo: (
      <Image
        alt="app logo"
        src={VoteLogo}
        fill
        priority
        className="rounded-md object-cover"
      />
    ),
    url: "/platform/vote-app",
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
