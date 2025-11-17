"use server"

import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { Product } from "@/app/utils/interfaces";
import { notFound } from "next/navigation";

export const getProduct = async (id: string): Promise<Product> => {
     const collection = dbConnect("products");
     const isValidId = id?.slice(0, 24);

     if (!ObjectId?.isValid(isValidId)) {
       notFound();
     }
     
     const query = { _id: new ObjectId(isValidId)}; //slice for fix the error(input must be a 24 character hex string, 12 byte Uint8Array, or an integer)
     const product = await collection.findOne(query);
     
     const serializedData = {
        ...product,
        _id: product?._id.toString()
     }
    
    return serializedData as Product;
};

export async function preloadProduct(id:string){
    void getProduct(id);
}