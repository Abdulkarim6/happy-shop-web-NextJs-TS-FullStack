import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google"
import LinkedIn from "next-auth/providers/linkedin";
import Credentials from "next-auth/providers/credentials";
import type { Provider } from "next-auth/providers";
import dbConnect from "./lib/dbConnect";
import bcrypt from "bcryptjs";


// Initialized providers
const providers: Provider[] = [
  Credentials({
    credentials: {
      email: {},
      password: {},
    },
    async authorize(credentials) {
      // console.log( "log from server inside the auth.ts file", credentials, "time:", new Date().toLocaleString() );
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
        role: userFromDb?.role,
      };
    },
  }),
  Google({
    authorization: {
      params: {
        // prompt: "consent",
        prompt: "select_account",
        access_type: "offline",
        response_type: "code",
      },
    },
  }),
  GitHub({
    authorization: {
      params: {
        prompt: "consent",
      },
    },
  }),
  LinkedIn({
    authorization: {
      params: {
        prompt: "login",
        access_type: "offline",
        response_type: "code",
      },
    },
  }),
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

  callbacks: {
    async signIn({user,account,credentials,profile}) {
    // console.log( "log from callback signIn", "time:", new Date().toLocaleString() );
    // console.log("u:", user, "a:", account, "c:", credentials, "p:", profile);
     // signIn logics handled by events object for fast OAuth login, 
     // evants logic executes in background without block OAuth Flow
    return true;
    },

    //set extra data from db to token
    async jwt({token,user,account}){
      // console.log( "log from callback jwt", "time:", new Date().toLocaleString() );
      // console.log('log from inside the jwt', 't',token, user,account);
          
      if (user && account) {
      // Credentials user → role already present
      if (account.provider === "credentials") {
        
        token.provider = account.provider,
        token.role = user?.role as string;
        token.credentialsUserId = user?.id as string;
      }

      // OAuth user → fetch role from DB
      if (account.provider !== "credentials") {
        const users = dbConnect("users");

        const dbUser = await users.findOne({
          provider: account.provider,
          providerAccountId: account.providerAccountId,
        });
        token.provider = account.provider,
        token.role = dbUser?.role || "user";
        token.providerAccountId = account.providerAccountId;
      }

    }
    
    return token;
    },

    //set extra data from token to session
    async session({ session, token, user }) {
    if(token){
      session.user.provider = token.provider as string;
      session.user.credentialsUserId = token.credentialsUserId as string;
      // session.user.OAuthUserId = token.OAuthUserId as string;
      session.user.role = token?.role as string;
      session.user.providerAccountId = token?.providerAccountId as string;
    }
 
    return session
   }
  },

  events: {
    // OAuth providers → first time insert OAuth user data to db and then next times allow to signIn
  async signIn({ user, account }) {
    // console.log( "log from callback signIn events", "time:", new Date().toLocaleString() );
       // Credentials → just allow to sugnIn
       if (account?.provider === "credentials") return; 

       // OAuth providers → first time insert OAuth user data to db and then next times allow to signIn
       if (account) {
        //console.log("log from event signIn entry", "time:", new Date().toLocaleString());
         const users = dbConnect("users");

         const existingUser = await users.findOne({
           provider: account.provider,
           providerAccountId: account.providerAccountId,
         });

         if (!existingUser) {

         const payload = {
           name: user.name, email: user.email, image: user.image,
           role: "user", provider: account.provider, providerAccountId: account.providerAccountId,
         };

           await users.insertOne(payload);
          }
         //console.log( "log from event signIn after end", "time:", new Date().toLocaleString() );
          return;
        }
  },
},

});
