export const dynamic = "force-dynamic";
import { auth } from "@/auth";
import dbConnect from "@/lib/dbConnect";

export async function GET() {
  try {
    const session = await auth();
    const email = session?.user?.email;
    if (!email) return Response.json([], { status: 401 });

    const res = await dbConnect("orders").find({ buyerEmail: email }).toArray();
    return Response.json(res);
  } catch (error) {
    console.error(error);
    return Response.json([], { status: 500 });
  }
}
