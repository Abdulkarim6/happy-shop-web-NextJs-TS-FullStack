import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";
import type { Provider } from "next-auth/providers";
import dbConnect from "./lib/dbConnect";
import bcrypt from "bcrypt";

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

      if (isPasswordOk) {
        return user;
      } else {
        return null
      }
    },
  }),

  Google,  GitHub, 
];

export const providerMap = providers?.map(provider => {
    if(typeof(provider) === "function"){
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
        return { id: provider.id, name: provider.name };
    }
})?.filter((provider) => provider?.id !== "credentials")


export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: "/account/login",
  },
});
