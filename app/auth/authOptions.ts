import prisma from "@/prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const authOptions:AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      }),
    ],
    session: {
      strategy: "jwt",
    },
  };

export default authOptions;