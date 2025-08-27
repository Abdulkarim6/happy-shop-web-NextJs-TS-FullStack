export const dynamic = 'auto'
import dbConnect from "@/lib/dbConnect";

export async function GET(request: Request){
    try {
        // const collection = dbConnect("categories");
        // const data = await collection.find({}).toArray();

        const data = {
            name:"karim",
            roll:"100010023",
            dep:"CSE",
            cgpa:"3.71"
        }

        return Response.json({data})

    } catch (error) {
        console.log(17, error);
        return Response.json(
          { error: "Failed to fetch" }, // শুধু body
          { status: 500 }              // status এখানে
        );   
    }
}