'use server'

import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb";
import { revalidateTag } from "next/cache";

export const deleteProduct = async(id:string) => {
    try {
        const collection = dbConnect("products");
        const res = await collection.deleteOne({_id : new ObjectId(id)});
        
        if(res?.acknowledged) {
          revalidateTag("allProducts")
          revalidateTag("newArrivals");
        }

        return {
            acknowledged: res?.acknowledged,
            deletedCount: res?.deletedCount,
            message:"Deleted Successfully"
        }
    } catch (error) {
        console.error("somethinf went wrong: ", error);
      return {
        acknowledged: false,
        deletedCount: 0,
        message:"Failed to delete"
      }; 
    }
}