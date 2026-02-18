"use client"
import React, { useState, useTransition } from "react";
import { OrderedDataype, Toast } from "../utils/interfaces";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { proceedToCheckout } from "../actions/checkoutActions";
import { useRouter } from "next/navigation";
import { deleteOrder } from "../actions/deleteOrder";
import { Spinner } from "@/components/ui/spinner";

const BagClient = ({orderedProducts}:{orderedProducts:OrderedDataype[]}) => {
    const [products, setProductsOrderQuantity] = useState<OrderedDataype[]>(orderedProducts);
    
    React.useEffect(() => {
      setProductsOrderQuantity(orderedProducts);
    }, [orderedProducts]);

    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const [isDeleteOrder, setIsDeleteOrder] = useState<{
    isPending: boolean; productId: string; }>({ isPending: false, productId: "", });

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
      // const result:ResType =  await proceedToCheckout(products)
      await proceedToCheckout(products)
      })
    };

    const handleDelete = async (order: OrderedDataype) => {
      setIsDeleteOrder({ isPending: true, productId: order?.productId });
      const data = await deleteOrder(order);
      if (data?.acknowledged) {
        setProductsOrderQuantity((prev) =>
        prev.filter((item) => item.productId !== order.productId)
        );
        router.refresh();
        Toast.fire({
          icon: "success",
          title: "Succesfully delete the order",
        });
        setIsDeleteOrder({ isPending: false, productId: "" });
      } else {
        Toast.fire({
          icon: "error",
          title: "Faild to delete",
        });
        setIsDeleteOrder({ isPending: false, productId: "" });
      }
    };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div className="lg:col-span-2">
        <h2 className="text-lg font-medium mb-4">Products</h2>

        <div className="bg-white border border-gray-200 md:p-5 relative mb-6">
          {
          !products.length ?
          <h2 className="text-lg font-medium mb-4">Your cart is empty</h2>
              :
          products?.map((order: OrderedDataype, i) => {
            const currentQty = order.productQuantity || 1;
            const itemTotal = Number(order.productPrice) * currentQty;

            return (
              <div key={i} className="w-full flex md:gap-5 mb-5">
                <div className="w-8 h-8 m-0.5 p-0.5 border-2 border-solid border-red-500 hover:bg-red-200 rounded cursor-pointer">
                {isDeleteOrder &&
                    isDeleteOrder?.productId === order?.productId ? (
                      <Spinner className="!size-[30px] text-red-700" />
                    ) : (
                      <Trash2
                        onClick={() => handleDelete(order)}
                        size={25}
                        color="#e70808"
                      />
                )}
                </div>
                {/* <Trash2
                  // onClick={() => setIsCartOpen(false)}
                  onClick={() => handleDelete(order)}
                  size={30}
                  className="p-1 bg-red-500 border-2 border-solid border-black rounded sticky top-2 font-bold cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-red-800"
                /> */}

                <div className="flex gap-1 md:gap-5">
                  <Image
                    alt={order?.productName}
                    src={order?.productImg}
                    width={200} // এটি ইমেজের আসল কোয়ালিটি বা রেশিও ঠিক রাখে
                    height={250}
                    // রেস্পন্সিভ ক্লাসগুলো এখানে যোগ করা হয়েছে
                    className="w-[100px] h-auto md:w-[200px] object-cover rounded-md flex-shrink-0"
                  />

                  <div className="w-full flex-row">
                    <h3 className="text-sm md:text-base md:font-medium text-gray-900">
                      {order?.productName}
                    </h3>
                    <div className="flex flex-row md:flex-col gap-5 items-center md:items-start">
                      <p className="text-gray-500 text-sm mt-1 md:mb-4">
                        size: {order?.productQsize}
                      </p>
                      <p className="text-gray-600 font-semibold md:mb-4">
                        Tk:{order?.productPrice}
                      </p>
                    </div>

                    <div className="flex items-center border border-gray-300 w-max mb-4">
                      <button
                        onClick={() =>
                          handleQuantityChange(order.productId, -1)
                        }
                        className="px-2 py-1 hover:bg-gray-100 border-r"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 font-semibold">{currentQty}</span>
                      <button
                        onClick={() => handleQuantityChange(order.productId, 1)}
                        className="px-2 py-1 hover:bg-gray-100 border-l"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <p className="text-gray-500 text-sm">
                      Total Tk:{" "}
                      <strong className="text-gray-800">{itemTotal}</strong>
                    </p>
                  </div>
                </div>
              </div>
            );})}
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

        </div>
      </div>
    </div>
  );
};

export default BagClient;
