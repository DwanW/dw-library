import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "@/app/libs/db";
import Option from "@/models/option";

export async function GET(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  await connectMongoDB();
  const options = await Option.find({ tag: id });
  return NextResponse.json({ options }, { status: 200 });
}
