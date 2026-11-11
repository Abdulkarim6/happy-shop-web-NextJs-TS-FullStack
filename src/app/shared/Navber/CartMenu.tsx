import { CartTogglerProvider } from "@/app/contexts/cartTogglerStatesContext/CartTogglerProvider";
import { OrderedDataype } from "@/app/utils/interfaces";
import { ShoppingBag } from "lucide-react";
import CartTogglerButton from "./CartTogglerButton";
import ProductsCartMenu from "./ProductsCartMenu";

type ParamsType = {
  orderedProductsPromise: Promise<OrderedDataype[]>;
};

const CartMenu = async ({ orderedProductsPromise }: ParamsType) => {
  const orderedProducts = await orderedProductsPromise;

  return (
    <div className="relative z-50 hover:bg-accent px-4 py-2">
      <CartTogglerProvider>
        <CartTogglerButton>
          <ShoppingBag className="size-5 lg:size-6 cursor-pointer" />
          {orderedProducts && (
            <p className="absolute bottom-3 left-3 text-xs font-medium z-30 bg-black text-white py-0.5 px-1 rounded-full">
              {orderedProducts?.length | 0}
            </p>
          )}
        </CartTogglerButton>
        <ProductsCartMenu orderedProducts={orderedProducts} />
      </CartTogglerProvider>
    </div>
  );
};

export default CartMenu;
