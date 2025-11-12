// export const dynamic = "force-dynamic"
export const dynamic = "force-static"
import dbConnect from "@/lib/dbConnect";

export async function GET() {
   try {
    console.log("calls for get newArrivals in route");
    
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
    console.log("data from newArrivals route");
    
    return Response.json({data});

   } catch (error) {
     console.error("Something went wrong. Failed to fetch newArrivals Products", error);
     return Response.json(
       { error: "Failed to fetch newArrivals products" },
       { status: 500 }
     );
     
   }
};