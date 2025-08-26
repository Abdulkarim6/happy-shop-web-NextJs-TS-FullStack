"use server"


import { CategoryDocument } from "@/app/interfaces/product";
import dbConnect from "@/lib/dbConnect"

export const getCategories = async (): Promise<CategoryDocument[]> =>{
    try {
        const categoriesCollection = await dbConnect("categories");
        const query = {};
        const res = await categoriesCollection.find(query).toArray();
        
        const serialized = res.map(category => ({
            ...category,
            _id : category._id.toString()
        }))
        
        return serialized as CategoryDocument[];
        
    } catch (error) {
        console.log(error);
        return [];
        
    }
}