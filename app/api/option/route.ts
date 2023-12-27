import connectMongoDB from "@/app/libs/db";
import Option from "@/models/option";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  await connectMongoDB();
  const options = await Option.find({});
  return NextResponse.json({ options });
}

export async function POST(req: NextRequest) {
  const newOption = await req.json();
  await connectMongoDB();
  await Option.create(newOption);
  return NextResponse.json({ message: "New Option Created" }, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Option.findByIdAndDelete(id);
  return NextResponse.json({ message: "Option deleted" }, { status: 200 });
}
