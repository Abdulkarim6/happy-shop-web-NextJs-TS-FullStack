export const dynamic = "force-dynamic"
import dbConnect from "@/lib/dbConnect";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
      const searchParams = request.nextUrl.searchParams;
      const queryFor = searchParams.get("search");

      const collection = dbConnect("products");

    if (queryFor) {
        const query = { subCategory : {
                     $regex : `^${queryFor}`, 
                      $options:"i"  // 'i' means Case-Insensitive
                    }};

        const res = await collection.find(query).toArray();
        return Response.json( res );
    } else {
        return Response.json( [] );
    }
      
    } catch (error) {
      console.log(error);
      return Response.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}