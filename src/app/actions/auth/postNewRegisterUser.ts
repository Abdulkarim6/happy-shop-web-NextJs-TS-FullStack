"use server"

import dbConnect from "@/lib/dbConnect"

export interface UserData {
    name: string;
    email:string;
    password:string;
}
export const postNewRegisterUser = async (userData : UserData) => {
    try {
        const usersCollection = dbConnect("users");
        const email = userData.email;
        const query = {email : email}
    
        const isExistsUser = await usersCollection.findOne(query);
        if(isExistsUser){
           return {
              message: "The email allready exists, Please Login!",
              acknowledged: false
           }
        };
        
        const res = await usersCollection.insertOne(userData);
        console.log(res);
        
        return {
           acknowledged: res.acknowledged,
           insertedId: res.insertedId.toString()
        }

    } catch (error) {
        console.log(error);
        return {message: "Something went wrong",}
    }
}