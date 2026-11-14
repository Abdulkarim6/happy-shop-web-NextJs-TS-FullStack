import dbConnect from "@/lib/dbConnect";
import { unstable_cache } from "next/cache";
import { Product } from "./interfaces";

export const getProductsByAudience = unstable_cache(
  async(decodedParams: string[]) => {
    try {

      if (!decodedParams || decodedParams.length < 2) { return []; }

      const collection = dbConnect("products");
      const filterDocuments = { targetAudience: decodedParams[0], categorySlug: decodedParams[1]};
      const res = await collection.find(filterDocuments).collation({locale:"en", strength:2}).toArray();
      const productsByAudience = res.map(({_id, ...res}) => ({...res, _id : _id.toString()})) as Product[];
      console.log(productsByAudience);
      
      return productsByAudience;

    } catch (error) { 
      console.error("Error fetching products:", error);
      return [];
    }
  },
   ["products-by-audience"], 
    {
      revalidate: 3600, 
      tags: ["products"], 
    }
);


// collation({locale:"en", strength:2}) 👉 match feild with case insensetive
// project({ targetAudience: 0, subCategory: 0}) 👉 documents fetch excludes these feilds