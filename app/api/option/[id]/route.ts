import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "@/app/libs/db";
import Option from "@/models/option";

export async function PUT(req: NextRequest, props: { params: Promise<any> }) {
  const params = await props.params;
  const { id } = params;
  const { _id, ...updatedOption } = await req.json();
  await connectMongoDB();
  await Option.findByIdAndUpdate(id, updatedOption);
  return NextResponse.json({ message: "Option Updated" }, { status: 200 });
}

export async function GET(req: NextRequest, props: { params: Promise<any> }) {
  const params = await props.params;
  const { id } = params;
  await connectMongoDB();
  const option = await Option.findById(id);
  return NextResponse.json({ option }, { status: 200 });
}
