import connectMongoDB from "@/app/libs/db";
import Poll from "@/models/poll";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  await connectMongoDB();
  const polls = await Poll.find({});
  return NextResponse.json({ polls });
}

export async function POST(req: NextRequest) {
  const newPoll = await req.json();
  await connectMongoDB();
  await Poll.create(newPoll);
  return NextResponse.json({ message: "New poll Created" }, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Poll.findByIdAndDelete(id);
  return NextResponse.json({ message: "Poll deleted" }, { status: 200 });
}
