"use server";
import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { OrderedDataype } from "../utils/interfaces";
import { revalidateTag } from "next/cache";

export const deleteOrder = async(orderdProduct:OrderedDataype) =>{
    try {
      const session = await getServerSession(authOptions);
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