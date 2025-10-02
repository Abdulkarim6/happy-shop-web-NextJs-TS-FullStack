"use server"

import { Product } from "@/app/utils/interfaces";
import dbConnect from "@/lib/dbConnect"

export const getAllProducts = async () : Promise<Product[]> => {
    try {
    //    const collection = dbConnect("products");
       const collection = dbConnect("products");
       const data = await collection.find({}).toArray();
       
       const serialized = data.map(subCategory => ({
            ...subCategory,
            _id : subCategory._id.toString()
        }))

       return serialized as Product[];
       
    } catch (error) {
        console.log(error);
        return [];
    }
}