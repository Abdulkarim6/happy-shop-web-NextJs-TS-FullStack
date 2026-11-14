import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function PATCH() {
  try {
    const collection = await dbConnect("categories"); // আপনার কালেকশনের নাম দিন

    const res = await collection.updateOne(
      { targetAudience: "women" },
      {
        $set: {
          "women.$[saree].subCategoryTitle": "Saree",
          "women.$[saree].subCategorySlug": "saree",

          "women.$[burqa].subCategoryTitle": "Burqa",
          "women.$[burqa].subCategorySlug": "burqa",

          "women.$[tops].subCategoryTitle": "Tops",
          "women.$[tops].subCategorySlug": "tops",
        },
      },
      {
        arrayFilters: [
          { "saree.subCategory": "Saree" },
          { "burqa.subCategory": "Burqa" },
          { "tops.subCategory": "Tops" },
          { "tshirts.subCategory": "T-Shirts" },
          { "threePiece.subCategory": "3-piece sets" },
          { "shirtGown.subCategory": "Stylish Shirt Gaun" }, // ডাটাবেজের বানান অনুযায়ী Gaun রাখা হয়েছে
        ],
      }
    );

    console.log(res);

    return NextResponse.json({ success: true, data: res }, { status: 200 });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { success: false, error: "আপডেট করতে সমস্যা হয়েছে" },
      { status: 500 }
    );
  }
}
