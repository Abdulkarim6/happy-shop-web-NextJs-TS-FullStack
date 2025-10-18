"use server"

import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { Product } from "@/app/utils/interfaces";

const getProduct = async (id: string): Promise<Product> => {
     const collection = await dbConnect("products");
     const query = { _id: new ObjectId(id) };

     const product = await collection.findOne(query);
     
     const serializedData = {
        ...product,
        _id: product?._id.toString()
     }
    
    return serializedData as Product;
};

export default getProduct;