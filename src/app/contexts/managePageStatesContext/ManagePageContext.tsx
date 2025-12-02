'use client'
import { createContext } from "react";

interface stateType {
    audience: string;
    setAudience: React.Dispatch<React.SetStateAction<string>>;
    selectedSubCategory:string;
    setSelectedSubCategory:React.Dispatch<React.SetStateAction<string>>;
    page:number;
    setPage:React.Dispatch<React.SetStateAction<number>>;
    totalPage:number;
    setTotalPage:React.Dispatch<React.SetStateAction<number>>;
}
export const ManagePageContext = createContext<stateType|undefined>(undefined);