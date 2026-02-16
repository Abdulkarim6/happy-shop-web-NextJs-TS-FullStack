"use server";
import { redirect } from "next/navigation";
import { revalidatePath, revalidateTag } from "next/cache";
import { OrderedDataype } from "../utils/interfaces";
import dbConnect from "@/lib/dbConnect";

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
