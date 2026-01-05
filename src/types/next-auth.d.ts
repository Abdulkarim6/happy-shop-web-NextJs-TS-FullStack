import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    role?: string;
    credentialsUserId?: string;
    OAuthUserId?: string;
    provider?: string;
    providerAccountId?: string;
  }

  interface Session extends DefaultSession {
    user: {
      role?: string;
      credentialsUserId?: string;
      OAuthUserId?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    credentialsUserId?: string;
    OAuthUserId?: string;
  }
}
