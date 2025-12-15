import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import authenticateImg from "../../../../public/bannerImages/authenticate.jpg";
import FormSwitch from "@/app/authFormComponents/FormSwitch";
import SocialLoginButtons from "@/app/authFormComponents/SocialLoginButtons";
import SubmitButton from "@/app/authFormComponents/SubmitButton";

export type InitialStateType = {
  isRegisterPage?:boolean;
  message?: string;
  acknowledged?: boolean | string;
  insertedId?: string | null;
};


const Form = async({mode}:{mode:"login" | "register"}) => {
    const isRegisterPage = (mode === "register");

    return (
      <div className="flex flex-col gap-6 w-full">
        <div className="fixed h-screen w-screen overflow-hidden -z-1 opacity-80">
        <Image
          alt="Mountains" src={authenticateImg} placeholder="blur"
          quality={100} fill sizes="100vw"
          style={{
            objectFit: "cover",
          }}
         />
        </div>
      {/* isRegisterPage means the feild see only new user */}
      <Card className={`overflow-hidden bg-slate-100 opacity-90 ${ isRegisterPage ? "mt-5" : "mt-7"} mx-auto w-full max-w-sm`}>
        <CardContent className="p-0">
         <form className="p-6 md:p-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">
                    {isRegisterPage ? "Create An Account" : "Welcome back"}
                  </h1>
                </div>
                {isRegisterPage && 
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input name="name" id="name" type="text" placeholder="Your Name" required />
                </div>
                }
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input name="email" id="email" type="email" placeholder="Your Email" required />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="password">Password</Label>
                  <Input name="password" id="password" type="password" 
                    placeholder={`Enter ${isRegisterPage ? "a" : "your" } Password`} required />
                </div>
                
                {/* form Submit button with action trigger*/}
                <SubmitButton mode={mode}/>

                {/* use link to switch form*/}
                <FormSwitch mode={mode}/>

              </div>
            </form>
        </CardContent>

        <CardContent>
            {/* Continue with Social Login*/}
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-card text-muted-foreground relative z-10 px-2">
                Or continue with
              </span>
            </div>
            <SocialLoginButtons/>
        </CardContent>
      </Card>
      </div>
    );
};

export default Form;