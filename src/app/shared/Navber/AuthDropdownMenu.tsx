"use client"

// import { signOutAction } from "@/app/actions/authActions";
// import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthDropdownMenu = () => {
    const { data: session, status } = useSession();
    console.log(session);

    const handleSignOut = async () => {
    //   setIsLoggingOut(true); // ক্লিক করার সাথে সাথেই UI হাইড করে দেবে
    //   await update(null); // গ্লোবাল সেশন স্টেট সাথে সাথে খালি করবে (Dashboard বাটনও হাইড হবে)
      await signOut({ callbackUrl: "/" }); // কুকি ক্লিয়ার করে হোমপেজে পাঠাবে
    };
    

    return (
      <div>
        {session?.user ? (
          //   <form action={signOutAction}>
          <Button onClick={handleSignOut} type="submit" variant="ghost">
            SignOut
          </Button>
        ) : (
          //   </form>
          <Link href="/account/auth?mode=login">
            <Button variant="ghost" className="text-base lg:text-lg py-1 px-2">
              Login
            </Button>
          </Link>
        )}
      </div>
    );
};

export default AuthDropdownMenu;