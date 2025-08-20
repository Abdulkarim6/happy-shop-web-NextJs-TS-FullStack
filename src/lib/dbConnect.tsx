// const { MongoClient, ServerApiVersion } = require("mongodb");
import { MongoClient, ServerApiVersion } from "mongodb";
const uri ="mongodb+srv://AbdulKarim:r16karim90i@cluster0.6ertblk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
console.log(uri);

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

