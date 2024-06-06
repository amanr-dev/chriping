import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import prisma from "@/libs/prismadb";

// TODO
//  1) Fix next-auth
//  2) Implement Authentication

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      // Authorize function
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Invalid Credentials");
        }

        // Find the user
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("Invalid Credentials");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid Credentials");
        }
        return user;
      },
    }),
  ],

  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    //     secret: process.env.NEXT_JWT_SECRET,

    encode: ({ secret, token }) => {},
    decode: async ({ secret, token }) => {},
  },
  secret: process.env.NEXT_AUTH_SECRET,
});

// import { handlers, signIn, auth, signOut } from "@/auth";
// export const { GET, POST } = handlers;
