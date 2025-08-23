"use server"
import bcrypt from "bcrypt";

import dbConnect from "@/lib/dbConnect"

export interface UserData {
    name: string;
    email:string;
    password:string;
}
export const postNewRegisterUser = async (payload : UserData) => {
    try {
        const usersCollection = dbConnect("users");
        const {email, password} = payload;
        const query = {email : email}
    
        const isExistsUser = await usersCollection.findOne(query);
        if(isExistsUser){
           return {
              message: "The email allready exists, Please Login!",
              acknowledged: false
           }
        };
        
        const hashingPassword = await bcrypt.hash(password, 10);
        payload.password = hashingPassword;
        const res = await usersCollection.insertOne(payload);
       
        return {
           acknowledged: res.acknowledged,
           insertedId: res.insertedId.toString()
        }

    } catch (error) {
        console.log(error);
        return {message: "Something went wrong",}
    }
}