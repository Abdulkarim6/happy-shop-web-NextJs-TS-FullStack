'use client'
import { useEffect, useState } from 'react';
import { ManagePageContext } from './ManagePageContext';


const ManagePageContextProvider = ({children}:{children:React.ReactNode}) => {
     const [audience, setAudience] = useState("");
     const [selectedSubCategory, setSelectedSubCategory] = useState("");
     const [page, setPage] = useState(1);
     const [totalPage, setTotalPage] = useState(1);

     useEffect(() =>{
      setSelectedSubCategory("");
      setPage(1);
    },[audience])
    
    return (
        <ManagePageContext.Provider
        value={{audience, setAudience,selectedSubCategory,setSelectedSubCategory,page,setPage,totalPage,setTotalPage}}
        >
        {children}
        </ManagePageContext.Provider>
    );
};

export default ManagePageContextProvider;