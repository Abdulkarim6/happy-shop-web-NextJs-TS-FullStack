import "server-only";
import { unstable_cache } from "next/cache";
import dbConnect from "@/lib/dbConnect";
import { CategoriesType } from "./interfaces";

export const getCategories = unstable_cache(
  async (): Promise<CategoriesType[]> => {
    const docs = await dbConnect("categories").find({}).toArray();
    const data = docs.map(({ _id, ...rest }) => ({ ...rest, _id: _id.toString() })) as CategoriesType[];
    return data;
  },
  
  ["categories"],
  { tags: ["categories"], revalidate: 3600 }
);
