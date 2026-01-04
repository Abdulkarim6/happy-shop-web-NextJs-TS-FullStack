import dbConnect from "@/lib/dbConnect";

export async function GET() {
    try {
        const collection = dbConnect("users");
        const res = await collection.find().toArray();
        
        return Response.json(res);
        
    } catch (error) {
        
    }
}