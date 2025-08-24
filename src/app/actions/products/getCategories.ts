"use server"

import dbConnect from "@/lib/dbConnect"

export const getCategories = async () =>{
    try {
        const categoriesCollection = dbConnect("categories");
        const query = {};
        const res = await categoriesCollection.find({}).toArray();

        const serialized = res.map(category => ({
            ...category,
            _id : category._id.toString()
        }))
        
        return serialized;
        
    } catch (error) {
        console.log(error);
        return [];
        
    }
}