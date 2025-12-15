// import CredentialsProvider from "next-auth/providers/credentials";
// import dbConnect from "./dbConnect";
// import bcrypt from "bcrypt";

// export const authOptions = {
//   providers: [
//   CredentialsProvider({
//     // The name to display on the sign in form (e.g. "Sign in with...")
//     name: "Credentials",
//     credentials: {
//       loginEmail: { label: "email", type: "email", placeholder: "Your Email" },
//       password: { label: "Password", type: "password" }
//     },
//     // async authorize(credentials, req) {
//     async authorize(credentials) {
//       if(!credentials){
//         throw new Error("No credentials provided"); //Never come credentials type as undefined in this block
//       }
      
//       const {loginEmail, password} = credentials;   
//       const usersCollection = await dbConnect("users");
//       const isExistsUser = await usersCollection.findOne({email : loginEmail});
    
//       const hashedPassword = isExistsUser?.password;
      
//       const isPasswordOk = await bcrypt.compare(password as string, hashedPassword);
      
//       const user = { 
//         id: isExistsUser?._id.toString() ?? "" , 
//         name: isExistsUser?.name, 
//         email: isExistsUser?.email
//       }; 

//       if (isPasswordOk) {
//         // Any object returned will be saved in `user` property of the JWT
//         return user;
//       } else {
//         // If you return null then an error will be displayed advising the user to check their details.
//         return null
//         // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
//       }
//     }
//   })
// ],

// pages: {
//     signIn: "/account/login"
// }
// }