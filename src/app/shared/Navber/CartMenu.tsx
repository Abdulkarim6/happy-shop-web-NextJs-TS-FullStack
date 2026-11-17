"use client"
import { CartTogglerProvider } from "@/app/contexts/cartTogglerStatesContext/CartTogglerProvider";
import { ShoppingBag } from "lucide-react";
import CartTogglerButton from "./CartTogglerButton";
import ProductsCartMenu from "./ProductsCartMenu";
import { useCart } from "@/app/hooks/useCart";
import { Spinner } from "@/components/ui/spinner";

const CartMenu = () => {
  const {orders , isLoading} = useCart();

  return (
    <div className="relative z-50 hover:bg-accent px-4 py-2">
      <CartTogglerProvider>
        <CartTogglerButton>
          <ShoppingBag className="size-5 lg:size-6 cursor-pointer" />
          {isLoading ? (
            <Spinner className="size-4 md:size-5 absolute bottom-3 left-3" />
          ) : (
            <p className="absolute bottom-3 left-3 text-xs font-medium z-30 bg-black text-white py-0.5 px-1 rounded-full">
              {orders?.length ?? 0}
            </p>
          )}
          
        </CartTogglerButton>
        <ProductsCartMenu orderedProducts={orders} />
      </CartTogglerProvider>
    </div>
  );
};

export default CartMenu;
