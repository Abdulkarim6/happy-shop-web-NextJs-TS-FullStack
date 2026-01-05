"use server"
import dbConnect from "@/lib/dbConnect";
import { OrderedDataype } from "../utils/interfaces";
import { revalidateTag } from "next/cache";
import { auth } from "@/auth";
import { ObjectId } from "mongodb";

export const addToBag = async (orderedData:OrderedDataype) => {
  try {
    const session = await auth();
    const buyerEmail = session?.user?.email;
    const buyerId = session?.user?.provider === "credentials" ? session?.user.credentialsUserId : session?.user.providerAccountId;
    console.log(13, buyerId);
    
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
console.log(res);

    const resSerialize = {
      acknowledged: res?.acknowledged,
      insertedId: res?.upsertedId?.toString(),
    };

    return resSerialize;
  } catch (error) {
    console.error(error, "something went wrong");
    return {
      acknowledged: false,
      insertedId: null,
    };
  }
};