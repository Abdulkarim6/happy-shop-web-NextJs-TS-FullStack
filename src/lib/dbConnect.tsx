// const { MongoClient, ServerApiVersion } = require("mongodb");
import { MongoClient, ServerApiVersion } from "mongodb";
const uri ="mongodb+srv://AbdulKarim:r16karim90i@cluster0.6ertblk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
function dbConnect(collectionName : string){

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

  return client.db("happyShop").collection(collectionName);
}


export default dbConnect;

// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.MONGO_URI as string;

// let client: MongoClient;

// declare global {
//   var _mongoClientPromise: Promise<MongoClient> | undefined;
// }

// if (!global._mongoClientPromise) {
//   client = new MongoClient(uri, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     },
//   });
//   global._mongoClientPromise = client.connect();
// }

// const clientPromise: Promise<MongoClient> = global._mongoClientPromise!; // ✅ const

// export default async function dbConnect(collectionName: string) {
//   const conn = await clientPromise;
//   return conn.db("happyShop").collection(collectionName);
// }
