"use server"
import { authOptions } from "@/lib/authOptions";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
type OrderedDataype = {
    productId :string;
    productQuantity:number;
    productQsize:string;
    productPrice:number;
}
export const addToBag = async (orderedData:OrderedDataype) => {
  try {
    const session = await getServerSession(authOptions);

    const payload = {
      ...orderedData,
      buyer: session?.user?.email,
    };

    const collection = dbConnect("orders");
    const res = await collection.insertOne(payload);

    const resSerialize = {
      acknowledged: res?.acknowledged,
      insertedId: res?.insertedId?.toString(),
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