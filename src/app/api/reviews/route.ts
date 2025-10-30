export const dynamic = "force-dynamic";
import dbConnect from "@/lib/dbConnect";

export async function GET(request: Request) {
  try {
    const collection = dbConnect("reviews");
    const data = await collection.find({}).toArray();
    return Response.json({ data });

  } 
  catch (error) {
    console.log(error);
    return Response.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
