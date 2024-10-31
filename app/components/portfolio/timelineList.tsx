"use client";

import Image from "next/image";
import TimelineItem from "./timelineItem";

type Props = {};

const EXP = [
  {
    title: "LT3 ATG",
    subtitle: "Full Stack Developer (2021-2023)",
    duties: [
      "Analyze user requirements and convert them into software solutions.",
      "Debug and troubleshoot issues, identifying root causes and implementing solutions.",
      "Contribute to the design and architecture of software systems.",
    ],
    logo: (
      <Image
        alt="image2"
        src="/lt3-work.jpg"
        fill
        priority
        className="rounded-2xl object-cover"
      />
    ),
  },
  {
    title: "DW Interactive Dev",
    subtitle: "Full Stack Developer (2020-2021)",
    duties: [
      "Engage with clients to understand their requirements, expectations, and project scope",
      "Write, test, and maintain code to deliver the agreed-upon software solution.",
      "Offer ongoing maintenance and support services, addressing any issues that arise after the initial deployment",
    ],
    logo: (
      <Image
        alt="image2"
        src="/dw-work.jpg"
        fill
        priority
        className="rounded-2xl object-cover"
      />
    ),
  },
];

export default function TimelineList({}: Props) {
  return (
    <div className="max-w-md m-auto">
      {EXP.map((obj, idx) => (
        <TimelineItem key={obj.title} exp={obj} />
      ))}
    </div>
  );
}
