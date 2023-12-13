"use client";

import { Card, Grid, Inset } from "@radix-ui/themes";

import Link from "next/link";

import ProjectListItem from "./projectListItem";

type Props = {
  list: {
    path: string;
    title: string;
    description: string;
    logo: JSX.Element;
    badges: JSX.Element;
  }[];
};

export default function ProjectList({ list }: Props) {
  return (
    <Grid
      columns={{
        initial: "1",
        sm: "2",
        md: "3",
      }}
      gap={{
        initial: "4",
      }}
      py={{
        initial: "0",
        xs: "9",
      }}
      mb={{
        initial: "8",
      }}
    >
      {list.map(({ path, logo, ...otherProps }, idx) => (
        <Link key={idx} href={path} className="flex justify-center">
          <Card className="min-w-[256px]">
            <Inset clip="padding-box" side="top" pb="current">
              {logo}
            </Inset>
            <ProjectListItem project={otherProps} />
          </Card>
        </Link>
      ))}
    </Grid>
  );
}
