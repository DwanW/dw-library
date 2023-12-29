import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "@/app/libs/db";
import Vote from "@/models/vote";

export async function GET(req: NextRequest, { params }: { params: any }) {
  const { email } = params;
  await connectMongoDB();
  const vote = await Vote.findOne({ email: email });
  return NextResponse.json({ vote }, { status: 200 });
}
