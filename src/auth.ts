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
    async authorize(credentials, req) {
      if(!credentials){
        throw new Error("No credentials provided"); //Never come credentials type as undefined in this block
      }
      
      const {email, password} = credentials;   
      const usersCollection = dbConnect("users");
      const isExistsUser = await usersCollection.findOne({email : email});
    
      const hashedPassword = isExistsUser?.password;
      
      const isPasswordOk = await bcrypt.compare(password as string, hashedPassword);
      
      const user = { 
        id: isExistsUser?._id.toString() ?? "" , 
        name: isExistsUser?.name, 
        email: isExistsUser?.email
      }; 

      if (isExistsUser && isPasswordOk) {
        return user;
      } else {
        return null
      }
    },
  }),

  Google,  GitHub, 
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
