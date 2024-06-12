import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import credentials from "next-auth/providers/credentials";
import prisma from "@/libs/prismadb";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials: any) => {
        // logic to salt and hash password

        // logic to verify if user exists
        const user = credentials;

        console.log(credentials);

        // return user object with the their profile data
        return user;
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
});
