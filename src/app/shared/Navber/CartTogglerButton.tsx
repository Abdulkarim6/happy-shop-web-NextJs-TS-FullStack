'use client'

import { useCartToggler } from "@/app/contexts/cartTogglerStatesContext/CartTogglerProvider";

const CartTogglerButton = ({children}:{children: React.ReactNode}) => {
    const {isCartOpen, setIsCartOpen} = useCartToggler();
    return (
      <div
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="relative title z-30 cursor-pointer"
      >
       {/* The children is actualy cart button(cart icon and order quantity number) */}
       {children}
      </div>
    );
};

export default CartTogglerButton;