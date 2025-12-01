"use server"

import dbConnect from "@/lib/dbConnect";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import { revalidateTag } from "next/cache";
import { getAllProducts } from "../utils/getAllProducts";
import { getNewArrivals } from "../utils/getNewArrivals";

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
});

type InitialStateType = { message: string, acknowledged: boolean | string, insertedId: string | null };

export const addProduct = async(prevState:InitialStateType, formData : FormData) =>{
    try {
      const today = new Date();
      const file = formData.get("image") as File;
      
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const imageUrl = await new Promise<UploadApiResponse | undefined>((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {folder:"fromHappyShop"},
          (err, res) =>{
            if(err) reject(err);
            else resolve(res);
          }
        ).end(buffer);
      })

        const rawData = {
          name: formData.get("name"),
          description: formData.get("description"),
          brand: formData.get("brand"),
          subCategory: formData.get("subCategory"),
          targetAudience: formData.get("targetAudience"),

          // size array → comma separated input ধরে split
          size: (formData.get("size") as string)
            ?.split(",") .map((s) => s.trim()),

          price: Number(formData.get("price")),

          // inStock (string/number/boolean যাই হোক)
          inStock: (() => {
            const v = formData.get("inStock") as string;
            if (v === "true") return true;
            if (v === "false") return false;
            if (!isNaN(Number(v))) return Number(v);
          })(),

          image: imageUrl?.secure_url,
          color: formData.get("color"),
          ageGroup: formData.get("ageGroup") as string | null,
          DateAdded: today as Date,
        };
        
        
        const collection = dbConnect("products");
        const res = await collection.insertOne(rawData);
        if(res.acknowledged){
          void Promise.all([
            revalidateTag("allProducts"),
            revalidateTag("newArrivals"),
          ]);

          void Promise.all([
            getAllProducts(),
            getNewArrivals()
          ]);
        }
        // console.log(66, rawData);

    return {
      acknowledged: res?.acknowledged  === true ? "success" : "",
      insertedId: res?.insertedId.toString(),
      message:"Added Successfully"
    }

    } catch (error) {
      console.error(error);
      return {
      acknowledged: "failed",
      insertedId: null,
      message:"Failed to add Product"
    }
    }
}















// "use server"
// import dbConnect from "@/lib/dbConnect";
// import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
// import { revalidateTag } from "next/cache";
// import { getAllProducts } from "../utils/getAllProducts";
// import { getNewArrivals } from "../utils/getNewArrivals";

// cloudinary.config({
//   cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
//   api_key:process.env.CLOUDINARY_API_KEY,
//   api_secret:process.env.CLOUDINARY_API_SECRET
// });

// type InitialStateType = { message: string, acknowledged: boolean | string, insertedId: string | null };

// export const addProduct = async(prevState:InitialStateType, formData : FormData) =>{
//     try {
//         if(true){
//           void Promise.all([
//             revalidateTag("allProducts"),
//             revalidateTag("newArrivals"),
//           ]);

//           void Promise.all([
//             getAllProducts(),
//             getNewArrivals()
//           ]);
//         }
//         // console.log(66, rawData);

//     return {
//       acknowledged: true  === true ? "success" : "",
//       insertedId: '',
//       message:"Added Successfully"
//     }

//     } catch (error) {
//       console.error(error);
//       return {
//       acknowledged: "failed",
//       insertedId: null,
//       message:"Failed to add Product"
//     }
//     }
// }