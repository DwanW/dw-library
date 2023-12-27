import connectMongoDB from "@/app/libs/db";
import vote from "@/models/vote";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const newvote = await req.json();
  await connectMongoDB();
  await vote.create(newvote);
  return NextResponse.json({ message: "New vote Created" }, { status: 200 });
}
