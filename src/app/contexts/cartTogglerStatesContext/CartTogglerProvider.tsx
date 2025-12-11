"use client"

import { createContext, useContext, useState } from "react";

interface stateType {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartTogglerContext = createContext<stateType | undefined>(undefined);

export const CartTogglerProvider = ({children}:{children: React.ReactNode}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <CartTogglerContext.Provider value={{isCartOpen, setIsCartOpen}}>
            {children}
        </CartTogglerContext.Provider>
    );
};

export const useCartToggler = () => {
  const context = useContext(CartTogglerContext);

  if (!context) {
    throw new Error("useCartToggler must be used within a CartTogglerProvider");
  }

  return context;
};