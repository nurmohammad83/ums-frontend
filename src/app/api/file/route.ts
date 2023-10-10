import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export function POST(req: NextApiRequest, res: NextApiResponse) {
  return NextResponse.json({ name: "File upload" });
}
