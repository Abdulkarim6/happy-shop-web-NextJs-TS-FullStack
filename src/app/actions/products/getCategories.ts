"use server"


import { CategoriesType } from "@/app/utils/interfaces";
import dbConnect from "@/lib/dbConnect"

export const getCategories = async (): Promise<CategoriesType[]> =>{
    try {
        const categoriesCollection = await dbConnect("categories");
        const query = {};
        const res = await categoriesCollection.find(query).toArray();
        
        const serialized = res.map(subCategory => ({
            ...subCategory,
            _id : subCategory._id.toString()
        }))
        
        return serialized as CategoriesType[];
        
    } catch (error) {
        console.log(error);
        return [];
        
    }
}