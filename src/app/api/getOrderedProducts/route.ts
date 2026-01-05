import { auth } from "@/auth";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    const session = await auth();
    const query = {
      buyerEmail:session?.user?.email
    }

    const collection = dbConnect("orders");
    const res = await collection.find(query).toArray();
    return Response.json(res);
  } catch (error) {
     return Response.json({});
  }
}
