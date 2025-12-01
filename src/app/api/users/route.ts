import dbConnect from "@/lib/dbConnect";

export async function GET() {
    try {
        console.log('found a call for users', new Date().getSeconds());
        
        const collection = dbConnect("users");
        const res = await collection.find().toArray();
        
        return Response.json(res);
        
    } catch (error) {
        
    }
}