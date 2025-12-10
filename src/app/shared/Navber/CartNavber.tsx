"use client";
import { deleteOrder } from "@/app/actions/deleteOrder";
import { OrderedDataype, Toast } from "@/app/utils/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Loader from "../Loader/Loader";
import { Spinner } from "@/components/ui/spinner";
type ParamsType = {
  orders: OrderedDataype[];
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const CartNavber = ({ orders, setIsCartOpen }: ParamsType) => {
  const [active, setActive] = useState(false);

  // Access the client
    const queryClient = useQueryClient()
    // Mutations
    const {isPending, mutate} = useMutation({
      mutationFn: deleteOrder,
      onSuccess: (data, variables, context) => {
        if (data?.acknowledged) {
          Toast.fire({
            icon: "success",
            title: "Succesfully delete the order",
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "Faild to delete",
          });
        }
        // Invalidate and refetch
        queryClient.invalidateQueries({ queryKey: ["orders"] });
      },
    });
    

  return (
   <div className="relative pt-10 pl-2">
    <div className="divide-y-3 divide-solid divide-blue-500">
      {
       orders?.map((order, i) => 
      <div key={i} className="flex py-3">
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

          {
            isPending ?
            <Spinner className="m-2 p-0.5 border-2 border-solid border-red-500 hover:bg-red-200 rounded cursor-pointer"/>
            :
          <Trash2
          onClick={() => { mutate(order); }}
          size={30} color="#e70808"
          className="m-2 p-0.5 border-2 border-solid border-red-500 hover:bg-red-200 rounded cursor-pointer"
          />
          }

        </div>
      </div>    
      )}
    </div>
     
    <X onClick={() => setIsCartOpen(false)} size={30} className="border-2 border-solid border-black rounded absolute top-2 left-2 font-bold cursor-pointer" />
    
   </div>
  );
};

export default CartNavber;