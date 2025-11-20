"use server"

import dbConnect from "@/lib/dbConnect"

export const addProduct = async(formData : FormData) =>{
    try {
        const rawData = {
          name: formData.get("name") as string,
          description: formData.get("description") as string,
          brand: formData.get("brand") as string,
          subCategory: formData.get("subCategory") as string,
          targetAudience: formData.get("targetAudience") as string,

          // size array → comma separated input ধরে split
          size: (formData.get("size") as string)
            ?.split(",")
            .map((s) => s.trim()),

          price: Number(formData.get("price")),

          // inStock (string/number/boolean যাই হোক)
          inStock: (() => {
            const v = formData.get("inStock") as string;
            if (v === "true") return true;
            if (v === "false") return false;
            if (!isNaN(Number(v))) return Number(v);
            return v;
          })(),

          rating: (() => {
            const v = formData.get("rating") as string;
            if (!isNaN(Number(v))) return Number(v);
            return v;
          })(),

          image: formData.get("image") as string,
          color: formData.get("color") as string,

          ageGroup: formData.get("ageGroup") as string | null,

          DateAdded: formData.get("DateAdded") as string,
        };
  console.log(rawData);
  
        
    //     const collection = dbConnect("products");
    //     const res = await collection.insertOne({});

    // return res;

    } catch (error) {
        
    }
}