"use client";

import Image from "next/image";
import EducationListItem from "./educationListItem";

type Props = {};

const ED = [
  {
    title: "EvolveU",
    subtitle: "Full Stack Developer Program (2020-2020)",
    logo: (
      <Image
        alt="evolveu logo"
        src="/evolve.jpg"
        fill
        priority
        className="rounded-full object-cover"
      />
    ),
  },
  {
    title: "University of Alberta",
    subtitle: "Master of Science In Geology (2014-2016)",
    logo: (
      <Image
        alt="u of a logo"
        src="/ua-ed.jpg"
        fill
        priority
        className="rounded-full object-cover"
      />
    ),
  },
];

export default function EducationList({}: Props) {
  return (
    <div className="mb-12">
      {ED.map((obj, idx) => (
        <EducationListItem key={idx} exp={obj} />
      ))}
    </div>
  );
}
