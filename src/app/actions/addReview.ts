'use server'

import dbConnect from "@/lib/dbConnect";
import { revalidateTag } from "next/cache";

export const addReview = async() => {
    try {
        console.log('log from addreview server. entry');
        
        const data = {
          review: "add new review",
          profile: "yes",
          customer: "karim",
        };

        const collection = dbConnect("reviews");
        const res = await collection.insertOne(data);
        console.log("res from action add review:", res);
        
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