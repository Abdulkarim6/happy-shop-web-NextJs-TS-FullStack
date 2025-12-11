import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    const collection = dbConnect("orders");
    const res = await collection.find({}).toArray();
    return Response.json(res);
  } catch (error) {
     return Response.json({});
  }
}
