import NextAuth, { DefaultSession, AuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "../../../../../prisma/prisma-client"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string
    } & DefaultSession["user"]
  }
}

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || ""
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials) return null

          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          })

          if (!user || user.password !== credentials.password) {
            return null
          }

          return {
            id: String(user.id),
            email: user.email,
            name: user.fullName
          }
        } catch {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt" as const
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }