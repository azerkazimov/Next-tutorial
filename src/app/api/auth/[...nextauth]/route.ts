import NextAuth, { DefaultSession, AuthOptions } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "../../../../../prisma/prisma-client"
import bcrypt from "bcryptjs"


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
          if (!credentials?.email || !credentials.password) return null

          const user = await prisma.user.findUnique({
            where: { email: credentials.email }
          })

          if (!user) return null

          const passwordCompare = await bcrypt.compare(credentials.password, user.password)
          if (!passwordCompare) return null


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
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string
      }
      return session
    }
  },
  session: {
    strategy: "jwt" as const
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }