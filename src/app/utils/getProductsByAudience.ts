import dbConnect from "@/lib/dbConnect";
import { unstable_cache } from "next/cache";
import { Product } from "./interfaces";

const fetchCachedProducts = unstable_cache(
  async(decodedParams: string[]) => {
      if (!decodedParams || decodedParams.length < 2) { return []; }

      const collection = dbConnect("products");
      const filterDocuments = { targetAudience: decodedParams[0], categorySlug: decodedParams[1]};
      const res = await collection.find(filterDocuments).collation({locale:"en", strength:2}).toArray();
      const productsByAudience = res.map(({_id, ...res}) => ({...res, _id : _id.toString()})) as Product[];
      // console.log(productsByAudience);
      
      return productsByAudience;
  },
   ["products-by-audience"], 
    {
      revalidate: 3600, 
      tags: ["products"], 
    }
);

export async function getProductsByAudience(decodedParams: string[]) {
  try {
    return await fetchCachedProducts(decodedParams);
  } catch (error) {
    console.error("Database Error in getAllProducts:", error);
    throw new Error("Failed to load products from database.");
  }
}

// collation({locale:"en", strength:2}) 👉 match feild with case insensetive
// project({ targetAudience: 0, subCategory: 0}) 👉 documents fetch excludes these feilds