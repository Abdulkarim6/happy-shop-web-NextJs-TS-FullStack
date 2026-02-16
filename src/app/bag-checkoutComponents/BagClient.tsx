"use client"
import React, { useState, useTransition } from "react";
import { OrderedDataype } from "../utils/interfaces";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { proceedToCheckout } from "../actions/proceedToCheckout";
type ResType = {
    success: boolean;
    modifiedCount: number;
    matchedCount: number;
    error?: undefined;
} | {
    success: boolean;
    error: string;
    modifiedCount?: undefined;
    matchedCount?: undefined;
} 
const BagClient = ({orderedProducts}:{orderedProducts:OrderedDataype[]}) => {
    const [products, setProductsOrderQuantity] = useState<OrderedDataype[]>(orderedProducts);
    const [isPending, startTransition] = useTransition();
     const handleQuantityChange = (id:string, delta:number) =>{
        setProductsOrderQuantity(prev =>
            prev?.map(item =>
            item?.productId === id ?
            {...item, productQuantity: Math.max(1, (item.productQuantity || 1) + delta)}    
            :
            item
            ));
    };
 
    const subTotal = products.reduce((acc, item) =>
      acc + (Number(item.productPrice) * (item.productQuantity || 1)), 0
    );

    const handleCheckout = () => {
      startTransition(async () =>{
      // await new Promise(resolve => setTimeout(resolve, 2000))
      // const result:ResType =  await proceedToCheckout(products)
      await proceedToCheckout(products)
      })
    }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">
        <h2 className="text-lg font-medium mb-4">Products</h2>

        <div className="bg-white border border-gray-200 p-5 relative mb-6">
          {
          !products.length ?
          <h2 className="text-lg font-medium mb-4">Your cart is empty</h2>
              :
          products?.map((order: OrderedDataype) => {
            const currentQty = order.productQuantity || 1;
            const itemTotal = Number(order.productPrice) * currentQty;

            return (<div key={order?.productName} className="flex gap-5 mb-5">
              <Trash2
                // onClick={() => setIsCartOpen(false)}
                size={30}
                className="p-1 bg-red-500 border-2 border-solid border-black rounded sticky top-2 font-bold cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-red-800"
              />

              <div className="flex gap-5">
                <Image
                  alt={order?.productName}
                  src={order?.productImg}
                  height={250}
                  width={200}
                />

                <div className="flex-grow">
                  <h3 className="text-base font-medium text-gray-900">
                    {order?.productName}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 mb-4">
                    size: {order?.productQsize}
                  </p>
                  <p className="text-gray-600 font-semibold mb-4">
                    Tk:{order?.productPrice}
                  </p>

                  <div className="flex items-center border border-gray-300 w-max mb-4">
                    <button 
                        onClick={() => handleQuantityChange(order.productId, -1)}
                        className="px-2 py-1 hover:bg-gray-100 border-r"
                    >
                        <Minus size={16}/>
                    </button>
                    <span className="px-4 font-semibold">{currentQty}</span>
                    <button 
                        onClick={() => handleQuantityChange(order.productId, 1)}
                        className="px-2 py-1 hover:bg-gray-100 border-l"
                    >
                        <Plus size={16}/>
                    </button>
                  </div>

                  <p className="text-gray-500 text-sm">
                    Total : <strong className="text-gray-800">{itemTotal}</strong>
                  </p>
                </div>
              </div>
            </div>
          )})}
        </div>

      </div>

      <div className="lg:col-span-1">
        <h2 className="text-lg font-medium mb-4">Order Summary</h2>

        <div className="bg-transparent">
          <div className="flex justify-between items-center text-sm font-medium mb-6">
            <span>Subtotal :</span>
            <span className="text-lg">TK: {subTotal}</span>
          </div>

          {/* <button className="w-full bg-black text-white py-3 px-4 text-sm font-medium text-left mb-4 hover:bg-gray-800 transition">
            Add a note to your order
          </button> */}

          <p className="text-sm text-gray-500 italic mb-4 leading-relaxed">
            Shipping, taxes, and discounts will be calculated at checkout.
          </p>

          <button
          onClick={handleCheckout}
          disabled={isPending}  
          className="w-full bg-black text-white py-3.5 px-4 text-sm font-medium mb-3 hover:bg-gray-800 transition uppercase tracking-wide text-center">
            {isPending ? "updating cart..." : "Proceed to Checkout"}
          </button>

          {/* <button className="w-full bg-black text-white py-3 px-4 text-sm font-medium flex justify-between items-center hover:bg-gray-800 transition">
            <span>Get shipping estimates</span>
            <i className="fas fa-chevron-down"></i>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default BagClient;
