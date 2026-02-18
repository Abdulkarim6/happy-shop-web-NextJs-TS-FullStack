"use server";
import { redirect } from "next/navigation";
import { unstable_cache } from "next/cache";
import { revalidateTag } from "next/cache";
import { AddressType, OrderedDataype } from "../utils/interfaces";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function proceedToCheckout(latestCartData: OrderedDataype[]) {
  try {
    const collection = dbConnect("orders");

    // bulkWrite operations তৈরি করা
    const operations = latestCartData.map((item) => ({
      updateOne: {
        filter: { productId: item.productId, buyerId: item.buyerId },
        update: { $set: { productQuantity: item.productQuantity } },
        // upsert: false (ডিফল্ট), যদি আইটেম না থাকে তাহলে নতুন তৈরি করবে না
      },
    }));
    // Error handling: ordered: false দিলে একটি আইটেম ফেল করলেও বাকিগুলো আপডেট হবে।
    await collection.bulkWrite(operations, { ordered: false });

    revalidateTag("orders");
  } catch (error) {
    console.error("Quantity update failed:", error);
    return { success: false, error: "Failed to update quantities" };
  }

  redirect("/checkout");
}


export async function saveAddressAction(formData: FormData) {
  const rawData = {
   name : formData.get("name"),
   region : formData.get("region"),
   phone : formData.get("phone"),
   city : formData.get("city"),
   building : formData.get("building"),
   area : formData.get("area"),
   colony : formData.get("colony"),
   address : formData.get("address"),
  };
  
  try {
    const collection = dbConnect("addresses");
    const res = await collection.insertOne(rawData);
    console.log(res);
    if(res.acknowledged){
      revalidateTag("addresses");
      return { success: true, message: "Address saved successfully!" };
    }
  } catch (error) {
    return { success: false, message: "Failed to save address." };
  }
}


export const loadAddress = unstable_cache(
  async () => {
    const addresses = await dbConnect("addresses").find({}).toArray();
    const res = addresses.map((address) => ({
      ...address,
      _id: address._id.toString(), 
    }));
    return res as AddressType[];
  },
  ["addresses-list"], // cache key 
  {
    tags: ["addresses"], 
  }
);


export async function deleteAddress(addId: string) {
  const query = { _id: new ObjectId(addId) };
  const res = await dbConnect("addresses").deleteOne(query);
  if (res.acknowledged) {
    revalidateTag("addresses");
  }
}
