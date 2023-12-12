"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {};

const PROJECT = [
  {
    path: "/project/aaaa",
  },
  {
    path: "/project/bbbb",
  },
];

export default function ProjectList({}: Props) {
  return (
    <div className="mb-12">
      {PROJECT.map((obj, idx) => (
        <Link key={idx} href={obj.path}>
          link
        </Link>
      ))}
    </div>
  );
}
