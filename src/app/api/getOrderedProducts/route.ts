import dbConnect from "@/lib/dbConnect";

export async function GET(){
    const collection = dbConnect("orders");
    const res = await collection.find({}).toArray();
    // console.log(res);
    return Response.json(res);
    
}