import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "@/libs/db";
import User from "@/models/user";

export async function PUT(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  const { name, email } = await req.json();
  await connectMongoDB();
  await User.findByIdAndUpdate(id, { name, email });
  return NextResponse.json({ message: "user updated" }, { status: 200 });
}

export async function GET(req: NextRequest, { params }: { params: any }) {
  const { id } = params;
  await connectMongoDB();
  const user = await User.findById(id);
  return NextResponse.json({ user }, { status: 200 });
}
