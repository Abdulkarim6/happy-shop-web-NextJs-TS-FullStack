"use client";
import { deleteOrder } from "@/app/actions/deleteOrder";
import { OrderedDataype, Toast } from "@/app/utils/interfaces";
import { Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { useCartToggler } from "@/app/contexts/cartTogglerStatesContext/CartTogglerProvider";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
type ParamsType = {
  orderedProducts: OrderedDataype[];
};
const CartNavberClient = ({ orderedProducts }: ParamsType) => {
  const router = useRouter();
  const {isCartOpen, setIsCartOpen } = useCartToggler();
  const [isDeleteOrder, setIsDeleteOrder] = useState<{
    isPending: boolean; productId: string; }>({ isPending: false, productId: "", });

  // for prefetch links because the component is outside from layout
  const [active, setActive] = useState(false);

  const handleDelete = async (order: OrderedDataype) => {
    setIsDeleteOrder({ isPending: true, productId: order?.productId });
    const data = await deleteOrder(order);
    if (data?.acknowledged) {
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
    <>
      <div
        className={`  h-screen w-[80%] md:w-[35%] overflow-y-scroll fixed top-0 right-0 z-50 rounded transform 
        transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex relative">
          
          <X
            onClick={() => setIsCartOpen(false)}
            size={30}
            className=" bg-slate-100 border-2 border-solid border-black rounded sticky top-2 font-bold cursor-pointer"
          />
          
          <div className="bg-slate-100 pl-2 w-full h-screen">
          <p className="text-center font-medium my-2">Your shopping bag</p>
          <div className="divide-y-3 divide-solid divide-blue-500">
            { orderedProducts && orderedProducts?.length ? 
             orderedProducts?.map((order, i) => (
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
                    <h3 className="text-base md:text-lg hover:underline">
                      {order?.productName}
                    </h3>
                  </Link>
                  <span>Size: {order?.productQsize}</span>
                  <p> TK: {order?.productPrice} x {order?.productQuantity} </p>

                  <div className="w-fit m-2 p-0.5 border-2 border-solid border-red-500 hover:bg-red-200 rounded cursor-pointer">
                    {isDeleteOrder &&
                    isDeleteOrder?.productId === order?.productId ? (
                      <Spinner className="!size-[30px] text-red-700" />
                    ) : (
                      <Trash2
                        onClick={() => handleDelete(order)}
                        size={30}
                        color="#e70808"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))
            :
            <div>
                <div className="flex py-16 flex-col gap-y-4 items-center justify-center">
                  <div className="bg-gray-900 text-small-regular flex items-center justify-center w-6 h-6 rounded-full text-white">
                    <span>0</span>
                  </div>
                  <span>Your shopping bag is empty.</span>
                  <div>
                    <Link href="/">
                      <>
                        <span className="sr-only">Go to home page</span>
                        <Button onClick={() => setIsCartOpen(false)}>Explore products</Button>
                      </>
                    </Link>
                  </div>
                </div>
              </div>
          }
          </div>

          <div className="flex flex-col space-y-2 px-10 [&>*]:w-full [&>*]:rounded-none [&>*]:h-7 [&>*]:md:h-10 [&>*]:text-black [&>*]:hover:text-white [&>*]:bg-inherit [&>*]:p-0 [&>*]:md:p-2 [&>*]:text-center [&>*]:font-semibold [&>*]:border [&>*]:border-black">
            <Link href={``} className="hover:bg-black"> VIEW BAG </Link>
            <Link href={``} className="hover:bg-orange-400"> CHACKOUT </Link>
          </div>
          </div>

        </div>
      </div>

      <div
        onClick={() => setIsCartOpen(!isCartOpen)}
        className={`z-40 bg-black/90 opacity-50 w-[100%] h-full overflow-y-scroll fixed top-0 right-0 rounded transform 
        transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>

      {/* {isCartOpen && 
        <div className="fixed top-0 right-0 left-0 bottom-0 w-[100%] h-full bg-black/90 opacity-50 z-10"></div>
      } */}
    </>
  );
};

export default CartNavberClient;
