import NextAuth from "next-auth";
import bcrypt from "bcrypt";
import Credentials from "next-auth/providers/credentials";
import prisma from "@/libs/prismadb";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials: any) => {
        try {
          const pwHash = bcrypt.hash(credentials?.password, 10);
          // logic to verify if user exists
          const user = { credentials, pwHash };
          if (!user) {
            throw new Error("User not found.");
          }
          // return json object with the user data
          return user;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  pages: "/login",
  secret: process.env.NEXT_AUTH_SECRET,
});
