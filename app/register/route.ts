// import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "POST") {
//     return res.status(405).end();
//   }

//   const { email, username, name, password } = req.body;

//   try {
//     console.log("Request Body:" + req.body);

//     if (!email || !username || !name || !password) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);

//     // Create User to db
//     const user = await prisma.user.create({
//       data: {
//         email,
//         username,
//         name,
//         hashedPassword,
//       },
//     });

//     return res.status(200).json(user);
//   } catch (error) {
//     console.log(error);
//     return res.status(400).end();
//   }
// }

export async function POST(request: Request) {
  // const body = await request.json();

  // const { email, username, name, password } = body;

  // const hashedPassword = await bcrypt.hash(password, 12);

  // // Create User to db
  // const user = await prisma.user.create({
  //   data: {
  //     email,
  //     username,
  //     name,
  //     hashedPassword,
  //   },
  // });

  // return NextResponse.json(user);

  console.log("Register route is working");
}
