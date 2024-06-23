import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const body = await req.json();
  try {
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
    console.log(user);

    return user;
  } catch (error) {
    console.log(error);
  }
}
