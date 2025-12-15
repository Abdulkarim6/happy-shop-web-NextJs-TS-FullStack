// "use client";

// import { useFormState } from "react-dom";
// import { loginAction } from "./actions";
// import { useEffect } from "react";
// import Swal from "sweetalert2";

// export default function AlertListener() {
//   const [state] = useFormState(loginAction, null);

//   useEffect(() => {
//     if (state?.ok === false) {
//       Swal.fire({
//         icon: "error",
//         title: "Login Failed",
//         text:
//           state.error === "CredentialsSignin"
//             ? "ইমেইল বা পাসওয়ার্ড ভুল"
//             : "কিছু একটা সমস্যা হয়েছে",
//       });
//     }
//   }, [state]);

//   return null; // UI কিছু render করে না
// }
