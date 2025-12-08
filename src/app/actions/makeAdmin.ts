"use server";

import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidateTag } from "next/cache";

export const makeAdmin = async (id: string) => {
  try {
    const collection = dbConnect("users");
    const query = { _id: new ObjectId(id) };
    const payload = {
        $set:{isAdmin:true}
    }
    const options = {
        upsert:true
    }
    const res = await collection.updateOne(query,payload, options );

    if (res?.acknowledged) {
      revalidateTag("users");
    }

    return {
    //   acknowledged: res?.acknowledged === true ? "success" : "",
      modifiedCount: res?.modifiedCount,
      upsertedId: res?.upsertedId?.toString() || null,
      upsertedCount: res?.upsertedCount,
      matchedCount: res?.matchedCount,

      acknowledged: res?.acknowledged,
    //   deletedCount: res?.deletedCount,
      message: "Made Admin Successfully",
    };
  } catch (error) {
    console.error("somethinf went wrong: ", error);
    return {
      acknowledged: false,
      deletedCount: 0,
      message: "Failed to Made Admin",
    };
  }
};
