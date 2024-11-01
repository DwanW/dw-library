import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "@/app/libs/db";
import Poll from "@/models/poll";
import Vote from "@/models/vote";
import { getPollResult } from "./util";
import { ObjectId } from "mongoose";
import Option from "@/models/option";

export async function PUT(req: NextRequest, props: { params: Promise<any> }) {
  const params = await props.params;
  const { id } = params;
  const { _id, ...updatedPoll } = await req.json();
  await connectMongoDB();
  await Poll.findByIdAndUpdate(id, updatedPoll);
  return NextResponse.json({ message: "Poll Updated" }, { status: 200 });
}
type Option = {
  _id: ObjectId;
  title: string;
};
type Poll = {
  _id: ObjectId;
  tag: ObjectId;
  endDate: Date;
};
type Vote = {
  _id: ObjectId;
  email: string;
  poll: string;
  firstOption: ObjectId;
  secondOption: ObjectId | undefined;
  thirdOption: ObjectId | undefined;
  createdAt: Date;
};
export async function GET(req: NextRequest, props: { params: Promise<any> }) {
  const params = await props.params;
  const { id } = params;
  await connectMongoDB();
  const poll: Poll | null = (await Poll.findById(id)
    .lean()
    .exec()) as Poll | null;
  // calculate result if currentDate is greater or equal to the poll endDate
  const currentDate = new Date().toISOString();
  const votes: Vote[] = (await Vote.find({ poll: id }).lean().exec()) as Vote[];
  if (poll && poll?.endDate.toISOString() <= currentDate) {
    const options: Option[] = (await Option.find({
      tag: poll.tag,
    })
      .lean()
      .exec()) as Option[];
    const { winners: result, voteStats } = getPollResult(votes, options);

    let optionsById: { [key: string]: Option } = {};
    options.forEach((option) => (optionsById[option._id.toString()] = option));

    const resultWithPopulatedOptions = result.map((w) => [
      optionsById[w[0]],
      w[1],
    ]);

    const voteStatsWithPopulatedOptions = Object.entries(voteStats)
      .sort(
        (a, b) =>
          b[1].firstOption - a[1].firstOption ||
          b[1].secondOption - a[1].secondOption ||
          b[1].thirdOption - a[1].thirdOption
      )
      .map((s) => [optionsById[s[0]], s[1]]);

    return NextResponse.json(
      {
        poll,
        result: resultWithPopulatedOptions,
        count: votes.length,
        voteStats: voteStatsWithPopulatedOptions,
      },
      { status: 200 }
    );
  }
  return NextResponse.json({ poll, count: votes.length }, { status: 200 });
}
