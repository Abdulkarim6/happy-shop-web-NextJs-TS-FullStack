"use server";

import { signOut } from "@/auth"; // আপনার auth.ts ফাইলের সঠিক পাথ দিন (যেমন @/auth বা @/lib/auth)

export async function signOutAction() {
  await signOut({ redirectTo: "/" }); // লগআউট হওয়ার পর কোন পেজে যাবে তা এখানে দিতে পারেন
}
