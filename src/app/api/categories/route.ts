import dbConnect from "@/lib/dbConnect";

export async function GET() {
    // const data = await dbConnect("categories").find({}).toArray();
    try {
        const categoriesCollection = await dbConnect("categories");
        const data = await categoriesCollection.find({}).toArray();
    
        return Response.json(data)
    } catch (error) {
        console.log(error);
        return Response.json({ error: "Failed to fetch" }, { status: 500 });
    }
}
