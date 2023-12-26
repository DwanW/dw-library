import connectMongoDB from "@/libs/db";
import User from "@/models/user";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
  await connectMongoDB();
  const users = await User.find({});
  return NextResponse.json({ users });
}

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();
  await connectMongoDB();
  await User.create({ name, email });
  return NextResponse.json({ message: "user created" }, { status: 200 });
}

// export async function DELETE(req: NextRequest) {
//   const id = req.nextUrl.searchParams.get("id");
//   await connectMongoDB();
//   await User.findByIdAndDelete(id);
//   return NextResponse.json({ message: "user deleted" }, { status: 200 });
// }
