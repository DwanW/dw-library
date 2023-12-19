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
        xs: "2",
        sm: "3",
        md: "4",
      }}
      gap={{
        initial: "4",
      }}
      pt="2"
      pb={{
        initial: "8",
      }}
      mb={{
        initial: "8",
      }}
    >
      {list.map(({ path, logo, ...otherProps }, idx) => (
        <Link key={idx} href={path} className="flex justify-center">
          <Card className="w-full">
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
