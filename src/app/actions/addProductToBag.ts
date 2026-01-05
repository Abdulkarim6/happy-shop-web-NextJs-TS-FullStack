"use server"
import dbConnect from "@/lib/dbConnect";
import { OrderedDataype } from "../utils/interfaces";
import { revalidateTag } from "next/cache";
import { auth } from "@/auth";

type OrderResponseType = {
  acknowledged?: boolean,
  modifiedCount?: number,
  upsertedId?: string | null,
  upsertedCount?: number,
  matchedCount?: number,
  error?:string
}

export const addToBag = async (orderedData:OrderedDataype) => {
  try {
    const session = await auth();
    
    if (!session) {
      const res: OrderResponseType = { error: "UNAUTHORIZED" };
      return res;
    }

    const buyerEmail = session?.user?.email;
    const buyerId = session?.user?.provider === "credentials" ? session?.user.credentialsUserId : session?.user.providerAccountId;
    
    const productId = orderedData.productId;
    const productPrice = orderedData.productPrice;
    const { productQuantity, ...otherData } = orderedData;

    const payload = { ...otherData, buyerEmail, buyerId};

    const collection = dbConnect("orders");
    const query = { 
      buyerId, buyerEmail, productId, productPrice
    };

    const res = await collection.updateOne(
      query,
      {
        $inc: { productQuantity: orderedData.productQuantity },
        $setOnInsert: payload,
      },
      {
        upsert: true,
      }
    );
    
    if (res?.acknowledged) {
        revalidateTag("orders");
      }
      console.log(43, res);

    const resSerialize: OrderResponseType = {
      acknowledged: res?.acknowledged,
      upsertedId: res?.upsertedId?.toString() || null,
    };

    return resSerialize;

  } catch (error) {
    console.error(error, "something went wrong");
    const res:OrderResponseType = {
      acknowledged: false,
      upsertedId: null,
    };
    return res;
  }
};