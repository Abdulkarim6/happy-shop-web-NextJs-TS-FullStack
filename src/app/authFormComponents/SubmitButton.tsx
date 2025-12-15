"use client"

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { useActionState } from "react";
import { InitialStateType, authFormSubmit } from "../actions/authFormSubmit";

const SubmitButton = () => {
    const {pending} = useFormStatus();
    const pathName = usePathname();
    const isRegisterPage = pathName.includes("register");

   const initialState : InitialStateType= {isRegisterPage:isRegisterPage, message: "", acknowledged: "", insertedId: "" };
    const [state, formAction, isPanding] = useActionState<InitialStateType, FormData>(authFormSubmit, initialState);


    return (
    <div>
      <Button formAction={formAction} disabled={pending} className="w-full">
        {isRegisterPage ? "REGISTER" : "LOGIN"}
      </Button>
    </div>
    );
};

export default SubmitButton;