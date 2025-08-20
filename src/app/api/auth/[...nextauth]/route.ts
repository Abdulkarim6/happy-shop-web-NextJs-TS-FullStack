import CredentialsProvider from "next-auth/providers/credentials"

import NextAuth from "next-auth"
import { authOptions } from "@/lib/authOptions"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }