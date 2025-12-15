"use server";
import dbConnect from "@/lib/dbConnect";
import { OrderedDataype } from "../utils/interfaces";
import { revalidateTag } from "next/cache";
import { auth } from "@/auth";

export const deleteOrder = async(orderdProduct:OrderedDataype) =>{
    try {
      const session = await auth();
      const query = {
        buyerEmail: session?.user?.email,
        productId: orderdProduct?.productId,
      };

      const collection = dbConnect("orders");
      const res = await collection.deleteOne(query);

      if (res?.acknowledged) {
        console.log('log from deleteorder route');
        
        revalidateTag("orders");
      }

      return {
        acknowledged: res?.acknowledged,
        deletedCount: res?.deletedCount,
        message: "Deleted Successfully",
      };
    } catch (error) {
      return {
        acknowledged: false,
        deletedCount: 0,
        message: "Something went wrong to delete",
      };
    }
}