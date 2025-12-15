import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { providerMap, signIn , auth} from "@/auth";
// import SubmitButton from "@/app/authFormComponents/SubmitButton";

const SIGNIN_ERROR_URL = "/error";

// const login = async({ searchParams }: { searchParams: { callbackUrl?: string }})=> {
const login = async()=> {
  // const params = await searchParams;

  return (
    <div className="flex flex-col gap-2">
      <form
        action={async (formData) => {
          "use server";
          try {
            await signIn("credentials", {email:formData.get("email"), password:formData.get("password"), redirect:false});
            redirect("/")
          } catch (error) {
            if (error instanceof AuthError) {
              return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
            }
            throw error;
          }
        }}
      >
        <label htmlFor="email">
          Email
          <input name="email" id="email" />
        </label>
        <label htmlFor="password">
          Password
          <input name="password" id="password" />
        </label>
        <input type="submit" value="Sign In" />
      </form>

      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            "use server";
            try {
              await signIn(provider.id, {
                // redirectTo: params?.callbackUrl ?? "",
              });
            } catch (error) {
              // Signin can fail for a number of reasons, such as the user
              // not existing, or the user not having the correct role.
              // In some cases, you may want to redirect to a custom error
              if (error instanceof AuthError) {
                return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
              }

              // Otherwise if a redirects happens Next.js can handle it
              // so you can just re-thrown the error and let Next.js handle it.
              // Docs:
              // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
              throw error;
            }
          }}
        >
          <button type="submit">
            <span>Sign in with {provider.name}</span>
          </button>
        </form>
      ))}

    {/* <SubmitButton/> */}
    </div>
  );
}


export default login;






// console.log("mode from submitButton component:", mode);
//     const isRegisterPage = (mode === "register");

//     const getInitialState = (isRegisterPage: boolean) => ({
//       isRegisterPage,
//       message: null,
//       acknowledged: false,
//       insertedId: null,
//       error: null,
//     });

//     console.log("check page type from submitButton component:", mode, isRegisterPage);

    
//     const [initialState, setInitialState] = useState<AuthActionReturnType>(getInitialState(isRegisterPage));
//     console.log(initialState, 35);
    
//     useEffect(() => {
//       setInitialState(getInitialState(isRegisterPage));
//     }, [mode]);
    
//     const [state, formAction, isPending] = useActionState
//     <AuthActionReturnType, FormData>(authFormSubmit, initialState);
//     console.log("state:", state, "Ispending:", isPending);

//     useEffect(() => {
//       console.log("check from useEffet. IsRegister Page?:",state?.isRegisterPage);
      
//       // Logic for register page
//       if(state?.isRegisterPage){
//       console.log("this call from is register block");
//         if (state?.acknowledged === "true") {
//           Toast.fire({
//             icon: "success",
//             title: `${state?.message}`,
//           });
//           setInitialState({isRegisterPage:isRegisterPage, message: null, acknowledged: false, insertedId: null })
//           redirect("/account/auth?mode=login");
//         } else if(state?.acknowledged === "false"){
//           Toast.fire({
//             icon: "info",
//             title: `${state?.message}`,
//             // title: `register error ${state.message}`,
//           });
//         }
//         setInitialState({isRegisterPage:isRegisterPage, message: null, acknowledged: false, insertedId: null })
//       };


//     // Logic for login page
//     if(!state?.isRegisterPage){
//       console.log("this call from is login block");
      
//         if (!state?.error) {
//           Toast.fire({
//             icon: "success",
//             title: `LoggedIn Successfully`,
//           });
//         setInitialState({isRegisterPage:isRegisterPage, message: null, acknowledged: false, insertedId: null });
//         } else {
//           let title = "";

//           switch (state?.error) {
//             case "CredentialsSignin":
//              title = "Invalid email or password";
//             break;

//             case "AccessDenied":
//              title = "Access denied";
//             break;

//             case "OAuthCallbackError":
//              title = "OAuth login failed";
//             break;

//             default:
//              title = "Authentication error";
//             break;
//           }

//           Toast.fire({
//             icon: "info",
//             title: `${title}`,
//           });
//         }
//         setInitialState({isRegisterPage:isRegisterPage, message: "", acknowledged: false, insertedId: null })
//       }
//     },[state, isPending])

























// "use server";

// import { auth, signIn } from "@/auth";
// import { UserData, postNewRegisterUser } from "./postNewRegisterUser";
// import { AuthError } from "next-auth";
// import { AuthActionReturnType } from "../authFormComponents/SubmitButton";

// export const authFormSubmit = async (
//   prevState: AuthActionReturnType,
//   formData: FormData
// ) => {
//   const session = await auth();

//   // 1. If user loggedIn, return from here
//   if (session?.user)
//     return {
//       isRegisterPage: prevState?.isRegisterPage,
//       acknowledged: "false",
//       message: "You are already logged in.",
//     };

//   // make user object
//   const name = formData.get("name") as string;
//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;
//   const payload: UserData = {
//     name: name,
//     email: email,
//     password: password,
//   };

//   // 3. Register user logic
//   if (prevState?.isRegisterPage) {
//     const res = await postNewRegisterUser(payload);
//     console.log(
//       "log from server inside the new user stored:",
//       res,
//       "time:",
//       new Date().toLocaleString()
//     );

//     return {
//       isRegisterPage: prevState?.isRegisterPage,
//       acknowledged: res?.acknowledged ? "true" : "false",
//       insertedId: res?.insertedId,
//       message: res?.message,
//     };
//   }

//   // 4. Login user logic
//   if (!prevState?.isRegisterPage && !session?.user?.email) {
//     try {
//       await signIn("credentials", { email, password, redirectTo: "/" });
//     } catch (error) {
//       if (error instanceof AuthError) {
//         return {
//           isRegisterPage: prevState?.isRegisterPage,
//           error: error?.type,
//         };
//       }
//       // executes the throw if signIn action success or not
//       // redirectTo function executes from the block with "throw"
//       throw error;
//     }
//   }
// };

