"use server";

import dbConnect from "@/lib/dbConnect";
import { unstable_cache } from "next/cache";
import { OrderedDataype } from "../utils/interfaces";

export const getAllOrders = async () =>
  unstable_cache(
    async () => {
      const addresses = await dbConnect("orders")
        .find({ })
        .toArray();
      const res = addresses.map((address) => ({
        ...address,
        _id: address._id.toString(),
      }));
      return res as OrderedDataype[];
    },
    ["addresses-list"], // cache key
    {
      tags: ["addresses"],
    }
  )();