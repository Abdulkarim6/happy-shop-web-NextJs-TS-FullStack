import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const role = req.auth?.user?.role;
  const { pathname } = req.nextUrl;

  // চেক করছি ইউজার ড্যাশবোর্ড বা অ্যাডমিন এরিয়াতে যাওয়ার চেষ্টা করছে কি না
  const isAdminRoute = pathname.startsWith("/dashboard");

  // কন্ডিশন ১: লগইন নেই কিন্তু ড্যাশবোর্ডে যেতে চায়
  if (!isLoggedIn && isAdminRoute) {
    console.log("log from 1st condition", req.url);
    const callbackUrl = encodeURIComponent(pathname);
    return NextResponse.redirect(
      new URL(`/account/auth?mode=login&callbackUrl=${callbackUrl}`, req.url)
    );
  }

  // কন্ডিশন ২: লগইন আছে কিন্তু অ্যাডমিন না হয়েও ড্যাশবোর্ডে যেতে চায়
  if (isLoggedIn && isAdminRoute && role !== "admin") {
    // তাকে ড্যাশবোর্ডে ঢুকতে না দিয়ে হোম পেজে পাঠিয়ে দেওয়া হচ্ছে
    console.log("log from 2nd condition",req.nextUrl.origin);
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
});

export const config = {
  runtime:"nodejs",
  matcher: ["/dashboard/:path*"],
};
