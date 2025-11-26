export const dynamic = "force-dynamic";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
   try {
    
    const collection = dbConnect("products");
    const today = new Date();
    const thirtyDaysAgo = new Date(today.setDate(today.getDate() - 30));
    const data = await collection.find({
        DateAdded : {
            $gte : thirtyDaysAgo
        }
    }).sort({
        DateAdded : -1
    }).toArray();
    
    return Response.json({data});

   } catch (error) {
     console.error("Something went wrong. Failed to fetch newArrivals Products", error);
     return Response.json(
       { error: "Failed to fetch newArrivals products" },
       { status: 500 }
     );   
   }
};