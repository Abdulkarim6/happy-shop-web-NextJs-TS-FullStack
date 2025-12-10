"use server";
import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { OrderedDataype } from "../utils/interfaces";

export const deleteOrder = async(orderdProduct:OrderedDataype) =>{
    const session = await getServerSession(authOptions);
    const query = {
        buyerEmail: session?.user?.email,
        productId: orderdProduct?.productId
    };

    const collection = dbConnect("orders");
    const res = await collection.deleteOne(query);
    console.log(res);

    return {
      acknowledged: res?.acknowledged,
      deletedCount: res?.deletedCount,
      message: "Deleted Successfully",
    };
    
}