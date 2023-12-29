import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "@/app/libs/db";
import Poll from "@/models/poll";

export async function PUT(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  const { _id, ...updatedPoll } = await req.json();
  await connectMongoDB();
  await Poll.findByIdAndUpdate(id, updatedPoll);
  return NextResponse.json({ message: "Poll Updated" }, { status: 200 });
}

export async function GET(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  await connectMongoDB();
  const poll = await Poll.findById(id);
  return NextResponse.json({ poll }, { status: 200 });
}
