"use client"
import { CartTogglerProvider } from "@/app/contexts/cartTogglerStatesContext/CartTogglerProvider";
import { OrderedDataype } from "@/app/utils/interfaces";
import { ShoppingBag } from "lucide-react";
import CartTogglerButton from "./CartTogglerButton";
import ProductsCartMenu from "./ProductsCartMenu";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

type ParamsType = {
  orderedProductsPromise: Promise<OrderedDataype[]>;
};

export const getOrderedProducts = async (session: Session) => {
  console.log(session);
  
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/api/getOrderedProducts`);
  console.log(res);
  
  return res.json();
}

const CartMenu = () => {
// const CartMenu = async ({ orderedProductsPromise }: ParamsType) => {
  // const orderedProducts = await orderedProductsPromise;

  const { data: session, status } = useSession();
  const [orderedProducts, setOrderedProducts] = useState<OrderedDataype[]>([]);
 
   useEffect(() => {
     if (session?.user) {
       getOrderedProducts(session)
         .then((data) => {
           setOrderedProducts(Array.isArray(data) ? data : data?.data || []);
         })
         .catch((err) => console.error("Error fetching cart:", err));
     } else {
       setOrderedProducts([]);
     }
   }, [session]);

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
