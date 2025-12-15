"use client"
import { Button } from "@/components/ui/button";
// import { useFormState, useFormStatus } from "react-dom";
// import { useActionState, useEffect, useState } from "react";
import { authFormSubmit } from "../actions/authFormSubmit";
import { Toast } from "../utils/interfaces";
import { redirect, useRouter } from "next/navigation";

export type AuthActionReturnType = {
  message?: string | null;
  acknowledged?: boolean | string;
  insertedId?: string | null;
  error?: string | null
} | undefined;


const SubmitButton = ({mode}:{mode:"login" | "register"}) => {
  const isRegisterPage = mode === "register";
  const router = useRouter();

  const formAction = async(formdata : FormData) =>{
      const res = await authFormSubmit(mode, formdata);
      console.log(res);

      // Logic for register page
      if(mode === "register"){
      console.log("this call from is register block");
        if (res?.acknowledged && res?.message) {
          router.push("/account/auth?mode=login");
          Toast.fire({
            icon: "success",
            title: `${res?.message}`,
          });
        } else if(!res?.acknowledged && res?.message){
          router.push("/account/auth?mode=login");
          Toast.fire({
            icon: "info",
            title: `${res?.message}`,
          });
        } else if(!res?.acknowledged && res?.error){
          Toast.fire({
            icon: "error",
            title: `${res?.error}`,
          });
        }
      };


    // Logic for login page
    if(mode === "login"){
      console.log("this call from is login block");
      
        if (!res?.error) {
          Toast.fire({
            icon: "success",
            title: `LoggedIn Successfully`,
          });
        } else {
          let title = "";

          switch (res?.error) {
            case "CredentialsSignin":
             title = "Invalid email or password";
            break;

            case "AccessDenied":
             title = "Access denied";
            break;

            case "OAuthCallbackError":
             title = "OAuth login failed";
            break;

            default:
             title = "Authentication error";
            break;
          }

          Toast.fire({
            icon: "error",
            title: `${title}`,
          });
        }

    }
  }

    
    return (
    <div>
      <Button formAction={formAction} disabled={false} className="w-full">
        {isRegisterPage ? "REGISTER" : "LOGIN"}
      </Button>
    </div>
    );
};

export default SubmitButton;