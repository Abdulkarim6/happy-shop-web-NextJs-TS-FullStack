"use server"

import { CategoriesType } from "@/app/utils/interfaces";
import dbConnect from "@/lib/dbConnect"

export const getCategories = async (): Promise<CategoriesType[]> =>{
    try {
        const categoriesCollection = dbConnect("categories");
        const res = await categoriesCollection.find({}).toArray();
        
        const serialized = res?.map(subCategory => ({
            ...subCategory,
            _id : subCategory?._id?.toString()
        }))
        
        return serialized as CategoriesType[];
        
    } catch (error) {
        console.log(error);
        return [];
        
    }
}