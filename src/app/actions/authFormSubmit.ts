"use server";

import { auth, signIn } from "@/auth";
import { UserData, postNewRegisterUser } from "./auth/postNewRegisterUser";

export type InitialStateType = {
  isRegisterPage?:boolean;
  message?: string;
  acknowledged?: boolean | string;
  insertedId?: string | null;
};

export const authFormSubmit = async (prevState:InitialStateType, formData : FormData) => {
  const session = await auth();

    const payload: UserData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    
  if(prevState?.isRegisterPage) {
    {/**New user data send in database */}
    const res = await postNewRegisterUser(payload);

    return {
      acknowledged: res.acknowledged,
      insertedId: res.insertedId,
      message: res?.message
    };
  }

 // IF user exist in login page and the user not logged in 
 if (!prevState?.isRegisterPage && !session?.user) {
   const res = await signIn("credentials", formData);
   console.log(37, res);
 }

  return {
    acknowledged: true,
    message: "",
  };

//   if (isRegisterPage) {
//     {/**New user data send in database */}
//     // setLoading(true);
//     const res = await postNewRegisterUser(payload);

//      if(res?.acknowledged){
//        Toast.fire({
//          icon: "success",
//          title: "You created account successfully",
//        });
//      }
//      if(res?.message){
//        Toast.fire({
//          icon: "info",
//          title: `${res?.message}`,
//        });
//      }
//     form.reset();
//     // setLoading(false);
//   }

//   if (isLoginPage) {
//   //  setLoading(true);
//    const res = await signIn("credentials", {redirect: false, loginEmail: payload?.email, password: payload?.password});
//    if(res?.ok){
//        Toast.fire({
//          icon: "success",
//          title: "Login successfully",
//        });
//     }else{
//        Toast.fire({
//         icon: "error",
//         title: "Invalid credentials",
//        });
//     }
//    form.reset();
//   //  setLoading(false);
//   }
};
