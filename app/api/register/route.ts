import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { email, username, password, name } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      username,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
