"use client";

import Link from "next/link";
import React from "react";

interface navigationProps {}

const Navigation: React.FC<navigationProps> = ({}) => {
  return (
    <div>
      <div>
        <Link href={"/"}>Home</Link>
      </div>
      <div>
        <Link href={"/portfolio"}>Portfolio</Link>
      </div>
    </div>
  );
};

export default Navigation;
