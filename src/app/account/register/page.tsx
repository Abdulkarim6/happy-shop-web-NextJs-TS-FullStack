import Form from "@/app/components/Form/Form";



const registerFromPage = () => {
    return (
      <div>
       {/* <Form /> */}
      </div>
    );
};

export default registerFromPage;

// const [width, setWidth] = useState<number>(0);

// useEffect(() => {
//   const handleResize = () => setWidth(window.innerWidth);
//   handleResize();
//   window.addEventListener("resize", handleResize);
//   return () => window.removeEventListener("resize", handleResize);
// }, []);


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
