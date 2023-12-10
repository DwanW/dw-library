"use client";

import Image from "next/image";
import homeImg2 from "public/2.jpg";
import TimelineItem from "./timelineItem";

type Props = {};

const EXP = [
  {
    title: "lt3",
    subtitle: "company description",
    duty: "main duty",
    logo: (
      <Image
        alt="image2"
        src={homeImg2}
        fill
        priority
        className="rounded-2xl object-cover"
      />
    ),
  },
  {
    title: "lt3",
    subtitle: "company description",
    duty: "main duty",
    logo: (
      <Image
        alt="image2"
        src={homeImg2}
        fill
        priority
        className="rounded-2xl object-cover"
      />
    ),
  },
];

export default function TimelineList({}: Props) {
  return (
    <div>
      {EXP.map((obj, idx) => (
        <TimelineItem
          key={obj.title}
          exp={obj}
          isLast={idx + 1 === EXP.length}
        />
      ))}
    </div>
  );
}
