import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is not set");

const g = globalThis as unknown as { _mongo?: MongoClient };

const client =
  (g._mongo ??= new MongoClient(uri, {
    serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
    maxPoolSize: 10,
  }));

export default function dbConnect(collectionName: string) {
return client.db("happyShop").collection(collectionName);
};

// import { MongoClient, ServerApiVersion } from "mongodb";
// function dbConnect(collectionName : string){

//     const client = new MongoClient(uri, {
//       serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//       },
//     });

//   return client.db("happyShop").collection(collectionName);
// }
// export default dbConnect;