"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const AuthDropdownMenu = () => {
  const { data: session, status } = useSession();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  
  const handleSignOut = async () => {
    try {
    setIsLoggingOut(true);
    await signOut({ callbackUrl: "/" });
  } catch (error) {
    setIsLoggingOut(false);
  }
  };

  if (isLoggingOut || status === "unauthenticated") {
    return (
      <Link href="/account/auth?mode=login">
        <Button variant="ghost" className="text-base lg:text-lg py-1 px-2">
          Login
        </Button>
      </Link>
    );
  }

  if (status === "loading") {
    return <div className="w-16 h-8" />;
  }

  return (
    <div>
      {session?.user && (
        <Button onClick={handleSignOut} type="button" variant="ghost">
          SignOut
        </Button>
      )}
    </div>
  );
};

export default AuthDropdownMenu;
