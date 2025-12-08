'use client'
import React, { ReactNode, createContext, useState } from 'react';
type StateType = {
  query: string;
  setQuery:React.Dispatch<React.SetStateAction<string>>;
};
export const UsersContext = createContext<StateType | undefined>(undefined);

const UsersContextProvider = ({children}:{children : React.ReactNode}) => {
    
    const [query, setQuery] = useState("");
    return (
        <UsersContext.Provider value={{query, setQuery}}>
           {children}
        </UsersContext.Provider>
    );
};

export default UsersContextProvider;