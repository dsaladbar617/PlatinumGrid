import { clientPromise } from "@/db/db";
import { NextRequest, NextResponse } from "next/server";
import users from "@/db/schemas/users";

export async function POST(request: NextRequest) {
  const { name, email } = await request.json();
  await clientPromise();
  await users.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}
