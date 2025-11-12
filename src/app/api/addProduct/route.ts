import dbConnect from "@/lib/dbConnect";
import { revalidateTag } from "next/cache";

export async function POST(){
  const collection = dbConnect("products");
  const payload = {
    name : "check"
  }
  const res = await collection.insertOne(payload);
  if(res?.acknowledged){
    revalidateTag("allProducts");
    // revalidateTag("getNewArrivals");
  }

  console.log(res);
  
}