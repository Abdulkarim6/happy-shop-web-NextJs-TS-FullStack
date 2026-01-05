import { cookies } from "next/headers";

export const getOrderedProducts = async() => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
     const res = await fetch(`${baseUrl}/api/getOrderedProducts`, {
       headers: {
         // ব্রাউজার থেকে আসা সব কুকি এপিআই রিকোয়েস্টে পাঠিয়ে দেওয়া হচ্ছে
         Cookie: (await cookies()).toString(),
       },
       next: { tags: ["orders"] },
       cache: "force-cache",
     });
     return await res.json();
};

export default getOrderedProducts;