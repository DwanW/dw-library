"use client";

import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { usePathname } from "next/navigation";

const navData = [
  {
    label: "Home",
    link: "/",
    icon: (color: string | undefined) => (
      <FontAwesomeIcon icon={faHome} color={color} />
    ),
  },
  {
    label: "Portfolio",
    link: "/portfolio",
    icon: (color: string | undefined) => (
      <FontAwesomeIcon icon={faBriefcase} color={color} />
    ),
  },
  {
    label: "Project",
    link: "/project",
    icon: (color: string | undefined) => (
      <FontAwesomeIcon icon={faDev} color={color} />
    ),
  },
  {
    label: "Contact",
    link: "/contact",
    icon: (color: string | undefined) => (
      <FontAwesomeIcon icon={faPaperPlane} color={color} />
    ),
  },
];

interface navigationProps {}

const Navigation: React.FC<navigationProps> = ({}) => {
  let pathname = usePathname() || "/";

  return (
    <div className="absolute left-0 right-0 bottom-0 sm:bottom-auto pb-8 sm:pt-8 sm:pb-0 bg-transparent backdrop-blur-sm">
      <div className="hidden sm:flex max-w-md mx-auto justify-center text-sm sm:text-base">
        {navData.map((nav) => {
          const isActive = nav.link === pathname;
          return (
            <div
              key={nav.label}
              className={`p-2 px-3 ${isActive ? "text-blue-500" : ""}`}
            >
              <Link href={nav.link}>{nav.label}</Link>
            </div>
          );
        })}
      </div>
      <div className="max-w-md mx-auto flex sm:hidden justify-center text-sm sm:text-base">
        {navData.map((nav) => {
          const isActive = nav.link === pathname;
          return (
            <div key={nav.label} className="p-2 px-3">
              <Link href={nav.link}>
                {nav.icon(isActive ? "#3b82f6" : undefined)}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
