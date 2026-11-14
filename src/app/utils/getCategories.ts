import "server-only";
import { unstable_cache } from "next/cache";
import dbConnect from "@/lib/dbConnect";
import { CategoriesForAllType } from "./interfaces";

export const getCategories = unstable_cache(
  async (): Promise<CategoriesForAllType[]> => {
    const docs = await dbConnect("categories").find({}).toArray();
    const data = docs.map(({ _id, ...rest }) => ({ ...rest, _id: _id.toString() })) as CategoriesForAllType[];
    return data;
  },
  
  ["categories"],
  { tags: ["categories"], revalidate: 3600 }
);
