import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prismadb";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          throw new Error("Please provide the credentials");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email as string,
          },
        });

        if (!user) {
          throw new Error("Invalid User!");
        }

        return user;
      },
    }),
  ],

  secret: process.env.NEXT_AUTH_SECRET,
});
