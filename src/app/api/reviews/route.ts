export const dynamic = "force-static";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    const collection = dbConnect("reviews");
    const data = await collection.find({}).toArray();
    return Response.json({ data });

  } 
  catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
