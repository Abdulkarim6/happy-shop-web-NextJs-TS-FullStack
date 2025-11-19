'use server'

import dbConnect from "@/lib/dbConnect";
import { revalidateTag } from "next/cache";

export const addReview = async() => {
    try {
        
        const data = {
          review: "add new review",
          profile: "yes",
          customer: "karim",
        };

        const collection = dbConnect("reviews");
        const res = await collection.insertOne(data);
        
        if (res?.acknowledged) {
          revalidateTag("reviews");
        }
        const resSerialize = {
          acknowledged: res?.acknowledged,
          insertedId: res?.insertedId.toString()
        };
        return resSerialize;

    } catch (error) {
        console.error(error);
        return null
    }
};