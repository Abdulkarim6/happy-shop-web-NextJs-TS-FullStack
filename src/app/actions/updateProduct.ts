"use server"

import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb";
import { revalidateTag } from "next/cache";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
});

type InitialStateType = {
    productid?:string,  message?: string, acknowledged?: boolean | string, date?:Date,
    modifiedCount?: number, upsertedId?: string | null, upsertedCount?: number, matchedCount?:number
 };
export const updateProduct = async(prevState:InitialStateType, formData : FormData) => {
    try {
      const file = formData.get("image") as File;
      
      let imageUrl;
      if (file.size != 0) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      imageUrl = await new Promise<UploadApiResponse | undefined>((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {folder:"fromHappyShop"},
          (err, res) =>{
            if(err) reject(err);
            else resolve(res);
          }
        ).end(buffer);
      })
      }

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
        image: imageUrl?.secure_url as string,
        color: formData.get("color"),
        ageGroup: formData.get("ageGroup") as string | null,
      //   DateAdded: today as Date,
      };
     
      const updateFields = Object.fromEntries(
        Object.entries(rawData).filter(
          ([_, v]) => v !== "" && v !== null && v !== undefined && v !== 0
        )
      );

      if (Object.keys(updateFields).length === 0) {
        return {
          message: "No fields to update",
          acknowledged: "failed",
        };
      }
      
      const collection = dbConnect("products");
      const query = {_id : new ObjectId(prevState.productid)}
      const updateFieldsAndDate = {
        ...updateFields,
        DateAdded: prevState?.date as Date,
      };
      console.log(updateFields);
      
      const payload = {
        $set: updateFieldsAndDate,
      };
      const options = {
          upsert : true
      }
      const res = await collection.updateOne(query, payload, options);
      if(res?.acknowledged) revalidateTag(`allProducts`);

      return {
        productid: prevState.productid,
        message: "Modified Product Successfully",
        acknowledged: res?.acknowledged === true ? "success" : "",
        modifiedCount: res?.modifiedCount,
        upsertedId: res?.upsertedId?.toString() || null,
        upsertedCount: res?.upsertedCount,
        matchedCount: res?.matchedCount,
      };
    } catch (error) {
        return {
          productid: prevState.productid,
          message: "Failed to Modified",
          acknowledged: "failed",
        };
    }
}