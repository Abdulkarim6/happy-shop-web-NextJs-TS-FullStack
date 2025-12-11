'use client'

import { useCartToggler } from "@/app/contexts/cartTogglerStatesContext/CartTogglerProvider";

const CartTogglerButton = ({children}:{children: React.ReactNode}) => {
    const {isCartOpen, setIsCartOpen} = useCartToggler();
    return (
      <div
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="relative title z-30 cursor-pointer"
      >
       {children}
      </div>
    );
};

export default CartTogglerButton;