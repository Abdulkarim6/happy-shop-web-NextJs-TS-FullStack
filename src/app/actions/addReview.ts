'use server'
import { auth } from "@/auth";
import dbConnect from "@/lib/dbConnect";
import { revalidateTag } from "next/cache";

type review = {
   rating: number,
   review: string,
 };

export const addReview = async(review:review) => {
    try {
        const session = await auth();

        if (!session?.user) return {error: "UNAUTHORIZED. Please Login"}

        const payload = {
          ...review,
          customerName: session?.user?.name,
          createdAt: new Date() as Date
        }
        
        const collection = dbConnect("reviews");
        const {acknowledged, insertedId} = await collection.insertOne(payload);
        
        if (acknowledged) {revalidateTag("reviews")};

        const resSerialize = { acknowledged, insertedId: insertedId ? insertedId.toString() : null  };
        return resSerialize;

    } catch (error) {
        console.error(error);
        return null
    }
};