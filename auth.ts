import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import credentials from "next-auth/providers/credentials";
import prisma from "@/libs/prismadb";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || typeof credentials.username !== "string") {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username,
          },
        });
        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
});
