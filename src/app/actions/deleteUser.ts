"use server";

import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidateTag } from "next/cache";

export const deleteUser = async (id: string) => {
  try {
    const collection = dbConnect("users");
    const res = await collection.deleteOne({ _id: new ObjectId(id) });

    if (res?.acknowledged) {
      revalidateTag("users");
    }

    return {
      acknowledged: res?.acknowledged,
      deletedCount: res?.deletedCount,
      message: "Deleted Successfully",
    };
  } catch (error) {
    console.error("somethinf went wrong: ", error);
    return {
      acknowledged: false,
      deletedCount: 0,
      message: "Failed to delete",
    };
  }
};
