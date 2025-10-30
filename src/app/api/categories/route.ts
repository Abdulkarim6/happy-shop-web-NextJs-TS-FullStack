export const dynamic = "force-static";
import dbConnect from "@/lib/dbConnect";

export async function GET(request: Request) {
  try {
    const collection = dbConnect("categories");
    const data = await collection.find({}).toArray();

    return Response.json({ data: data || []});
  } catch (error) {
    console.log(17, error);
    return Response.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
