import connectMongoDB from "@/app/libs/db";
import Vote from "@/models/vote";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const newVote = await req.json();
  await connectMongoDB();
  const createdVote = await Vote.create(newVote);
  return NextResponse.json(
    { message: "New Vote Created", data: createdVote },
    { status: 200 }
  );
}
