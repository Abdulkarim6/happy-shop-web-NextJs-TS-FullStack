"use server"
import bcrypt from "bcrypt";

import dbConnect from "@/lib/dbConnect"
import { AuthActionReturnType } from "../authFormComponents/SubmitButton";

export interface UserData {
    name: string;
    email:string;
    password:string;
}

export const postNewRegisterUser = async (payload : UserData) => {
    try {
        const usersCollection = await dbConnect("users");
        const {email, password} = payload;
        const query = {email : email}
    
        const isExistsUser = await usersCollection.findOne(query);
        if(isExistsUser){
            const res:AuthActionReturnType = {
            acknowledged: false,
            message: "The email allready exists, Please Login!",
            }
         return res;
        };
        
        const hashingPassword = await bcrypt.hash(password, 10);
        payload.password = hashingPassword;
        const promise = await usersCollection.insertOne(payload);

        const res: AuthActionReturnType = {
          acknowledged: promise?.acknowledged,
          insertedId: promise?.insertedId.toString(),
          message: "Account created successfully, Please Login!",
        };
        return res;

    } catch (error) {
        const res: AuthActionReturnType = {
            acknowledged:false, 
            error: "Registration failed. Please try again." 
        };
        return res;
    }
}