import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
});

// import { handlers } from "@/auth"; // Referring to the auth.ts we just created
// import { PrismaAdapter } from '@next-auth/prisma-adapter';
// import Credentials from 'next-auth/providers/credentials';
// export const { GET, POST } = handlers;
