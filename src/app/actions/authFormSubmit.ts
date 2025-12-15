"use server";

import { auth, signIn } from "@/auth";
import { UserData, postNewRegisterUser } from "./postNewRegisterUser";
import { AuthError } from "next-auth";

export const authFormSubmit = async ( mode: "login" | "register", formData: FormData ) => {
  const session = await auth();

    // 1. If user loggedIn, return from here
    if (session?.user) 
    return { 
      // isRegisterPage: prevState?.isRegisterPage,
      acknowledged: "false", 
      message: "You are already logged in."
    };


    // make user object
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const payload: UserData = {
      name: name, email: email, password: password,
    };


    // 3. Register user logic
    if (mode === "register") {
        const res = await postNewRegisterUser(payload);
         console.log("log from server inside the new user stored:", res, "time:", new Date().toLocaleString());
        
        return {
          acknowledged: res?.acknowledged,
          insertedId: res?.insertedId,
          message: res?.message,
          error: res?.error,
        };
    };


    // 4. Login user logic
    if (mode === "login" && !session?.user?.email) {
      try {
        await signIn("credentials", { email, password, redirectTo: "/", });
      } catch (error) {
        if (error instanceof AuthError) {
          return { error: error?.type };
        }
        // executes the throw if signIn action success or not
        // redirectTo function executes from the block with "throw"
        throw error; 
      }
    };
};

