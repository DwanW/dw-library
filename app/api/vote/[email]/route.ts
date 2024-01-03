import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "@/app/libs/db";
import Vote from "@/models/vote";

export async function GET(req: NextRequest, { params }: { params: any }) {
  const { email } = params;
  await connectMongoDB();
  const vote = await Vote.findOne({ email: email });
  return NextResponse.json({ vote }, { status: 200 });
}

export async function POST(req: NextRequest, { params }: { params: any }) {
  const { email } = params;
  const { poll } = await req.json();
  await connectMongoDB();
  const vote = await Vote.findOne({ email: email, poll: poll });
  return NextResponse.json({ vote }, { status: 200 });
}
