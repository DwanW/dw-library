import connectMongoDB from "@/app/libs/db";
import Tag from "@/models/tag";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  await connectMongoDB();
  const tags = await Tag.find({});
  return NextResponse.json({ tags });
}

export async function POST(req: NextRequest) {
  const newTag = await req.json();
  await connectMongoDB();
  await Tag.create(newTag);
  return NextResponse.json({ message: "New tag Created" }, { status: 200 });
}
