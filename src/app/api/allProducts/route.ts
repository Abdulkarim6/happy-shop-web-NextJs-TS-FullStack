export const dynamic = "force-static";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    const collection = dbConnect("products");
    const res = await collection.find({}).toArray();

    return Response.json(res);
    
  } catch (error) {
    console.error("Something went wrong", error);
    return Response.json(
      { error: "Failed to fetch products from database" },
      { status: 500 }
    );
  }
}
