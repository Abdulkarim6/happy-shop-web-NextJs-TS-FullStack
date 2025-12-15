import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";
import type { Provider } from "next-auth/providers";
import dbConnect from "./lib/dbConnect";
import bcrypt from "bcrypt";

// Initialized providers
const providers: Provider[] = [
  Credentials({
    credentials: {
      email: {},
      password: {},
    },
    async authorize(credentials) {
      // if return null, the null set an error internally and pass to signIn function
      if (!credentials) return null;

      const { email, password } = credentials;

      if (!email || !password) return null;

      const usersCollection = await dbConnect("users");

      const userFromDb = await usersCollection.findOne({ email });

      if (!userFromDb || !userFromDb.password) {
        return null;
      }

      const isPasswordOk = await bcrypt.compare(
        password as string,
        userFromDb.password
      );

      if (!isPasswordOk) {
        return null;
      }

      return {
        id: userFromDb._id.toString(),
        name: userFromDb.name,
        email: userFromDb.email,
      };
    },
  }),

  Google,
  GitHub,
];


// Ignoor credentials for OAuth login Buttons(social)
export const providerMap = providers?.map(provider => {
  const providerType = typeof provider === "function" ? provider() : provider;
  return { id: providerType.id, name: providerType.name };
})?.filter((provider) => provider?.id !== "credentials")


// Export NextAuth
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: "/account/login",
  },
});
