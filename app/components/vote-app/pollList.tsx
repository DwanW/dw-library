import { Card, Grid } from "@radix-ui/themes";
import Link from "next/link";
import PollListItem from "./pollListItem";
import { Key } from "react";
import { getPolls } from "@/app/libs/functions";

export type Poll = {
  _id: String;
  title: String;
  description: String;
  endDate: Date;
  private: Boolean;
  passPhrase: String;
  tag: String;
};

export default async function PollList() {
  const data = await getPolls();
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
      {data.polls.map((poll: Poll, idx: Key) => (
        <Link
          key={idx}
          href={`vote-app/${poll._id}`}
          className="flex justify-center"
        >
          <Card className="w-full">
            <PollListItem poll={poll} />
          </Card>
        </Link>
      ))}
    </Grid>
  );
}
