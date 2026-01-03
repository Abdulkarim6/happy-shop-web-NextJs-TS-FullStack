"use client"
import { Button } from "@/components/ui/button";
// import { useFormState, useFormStatus } from "react-dom";
// import { useActionState, useEffect, useState } from "react";
import { authFormSubmit } from "../actions/authFormSubmit";
import { Toast } from "../utils/interfaces";
import { redirect, useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

export type AuthActionReturnType = {
  message?: string | null;
  acknowledged?: boolean | string;
  insertedId?: string | null;
  error?: string | null
} | undefined;

type PropsType = {
    mode: "login" | "register";
    callbackUrl: string | undefined;
};

const SubmitButton = ({mode, callbackUrl}:PropsType) => {
  console.log(callbackUrl);
  
  const isRegisterPage = mode === "register";
  const router = useRouter();
  const { pending } = useFormStatus();
  
  const formAction = async(formdata : FormData) =>{
      const res = await authFormSubmit(mode, callbackUrl, formdata);

      // Logic for register page
      if(mode === "register"){
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
     if (res?.acknowledged) {
        try {
          router.refresh()
        } finally {
          Toast.fire({
            icon: "success",
            title: `${res?.message}`,
          });
          redirect(callbackUrl ?? "/");
        }
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
      <Button formAction={formAction} disabled={pending} className="w-full">
        {isRegisterPage ? "REGISTER" : "LOGIN"}
      </Button>
    </div>
    );
};

export default SubmitButton;