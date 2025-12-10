"use client";
import { OrderedDataype } from "@/app/utils/interfaces";
import { Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type ParamsType = {
  orders: OrderedDataype[];
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CartNavber = ({ orders, setIsCartOpen }: ParamsType) => {
  const [active, setActive] = useState(false);

  return (
   <div className="relative pt-10 pl-2">
    <div className="divide-y-3 divide-solid divide-blue-500">
      {
       orders?.map(order => 
      <div key={order?.productId} className="flex py-3">
        <Image
           alt={order?.productName}
           src={order?.productImg}
           height={150}
           width={120}
        />
        <div className="ml-3">
          <Link 
          prefetch={active ? true : true}
          onMouseEnter={() => setActive(true)}
          onClick={() => setIsCartOpen(false)}
          href={`/productDetails/-/${order?.productId}`}
          >
          <h3 className="text-base md:text-lg hover:underline">{order?.productName}</h3>
          </Link>
          <span>Size: {order?.productQsize}</span>
          <p>TK: {order?.productPrice} x {order?.productQuantity}</p>
          <Trash2 onClick={() => setIsCartOpen(false)} size={30} color="#e70808" 
          className="m-2 p-0.5 border-2 border-solid border-red-500 hover:bg-red-200 rounded cursor-pointer"
          />
        </div>
      </div>    
      )}
    </div>
     
    <X onClick={() => setIsCartOpen(false)} size={30} className="border-2 border-solid border-black rounded absolute top-2 left-2 font-bold cursor-pointer" />
    
   </div>
  );
};

export default CartNavber;