import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import credentials from "next-auth/providers/credentials";
import prisma from "@/libs/prismadb";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    credentials({
      name: "credentials",
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
      async authorize(credentials) {
        if (!credentials) {
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
