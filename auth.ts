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
          let user = null;

          // logic to salt and hash password
          const pwHash = bcrypt.hash(credentials?.password, 10);

          // logic to verify if user exists

          if (!user) {
            throw new Error("User not found.");
          }

          // return json object with the user data
          return user;
        } catch (error) {
          if (error) {
            // Return `null` to indicate that the credentials are invalid
            console.log(error);

            return null;
          }
        }
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
});
