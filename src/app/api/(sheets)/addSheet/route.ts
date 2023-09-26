import { NextRequest, NextResponse } from "next/server";
import sheets from "@/db/schemas/sheets";
import { clientPromise } from "@/db/db";

export async function POST(req: NextRequest) {
  const { name, short_name, fields, entries, users, templates } =
    await req.json();

  await clientPromise();
  await sheets.create({ name, short_name, fields, entries, users, templates });

  return NextResponse.json({ message: `${name} Sheet added` }, { status: 201 });
}
