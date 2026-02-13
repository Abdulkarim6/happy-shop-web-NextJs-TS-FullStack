'use server'

import dbConnect from "@/lib/dbConnect";
import { revalidateTag } from "next/cache";

type payloadType = {
   date: Date,
   rating: number,
   customer: string,
   review: string,
 };

export const addReview = async(payload:payloadType) => {
    try {
        console.log(payload);
        
        // const data = {
        //   review: "add new review",
        //   profile: "yes",
        //   customer: "karim",
        // };

        const collection = dbConnect("reviews");
        const res = await collection.insertOne(payload);
        
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