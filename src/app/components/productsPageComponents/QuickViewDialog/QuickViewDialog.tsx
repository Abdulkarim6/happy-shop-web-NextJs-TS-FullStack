"use client"

import { addToBag } from "@/app/actions/addProductToBag";
import { Product, Toast } from "@/app/utils/interfaces";
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Eye, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

type propsTypes = {
  product: Product;
};
const QuickViewDialog = ({product} : propsTypes) => {
    const [orderQuantity, setorderQuantity] = useState<number>(1);
    const [selectedSizeOfProduct, setSelectedSizeOfProduct] = useState<string>("");
    const [addToBagProcessing, setAddToBagProcessing] = useState<boolean>(false);
    // console.log(orderQuantity);

    const handleOrderQuantityControll = (param : "plus" | "minus") =>{
      if (param === "plus") {
        // when input field is NaN(empty), the condition will apply
        setorderQuantity(prev => (!Number.isNaN(prev) ? ++prev : 1));
      }
      if (param === "minus") {
        setorderQuantity(prev => (prev > 1 && !Number.isNaN(prev) ? --prev : 1));
      }
    };

    const pathname = usePathname();
    const router = useRouter();
    const handleAddToBag = async (product: Product) => {
      setAddToBagProcessing(true);
      const payload = {
        productId: product?._id,
        productName: product?.name,
        productImg: product?.image,
        productQuantity: orderQuantity,
        productQsize: selectedSizeOfProduct,
        productPrice: product?.price,
      };

      const res = await addToBag(payload);

      if (res?.error === "UNAUTHORIZED") {
        router.push(
          `/account/auth?mode=login&callbackUrl=${encodeURIComponent(pathname)}`
        );
      } else if (res?.acknowledged) {
        Toast.fire({
          icon: "success",
          title: "Succesfully added to the Bag",
        });
      } else {
        Toast.fire({
          icon: "error",
          title: "Faild to add to the Bag",
        });
      }
      setAddToBagProcessing(false);
    };

    return (
        <section>
            <Dialog>
              {/* <DialogTrigger asChild className="absolute bottom-0 group-hover:bottom-0 w-full bg-black/50 transition-all ease-in"> */}
              <DialogTrigger asChild className="absolute bottom-0 md:-bottom-10 group-hover:bottom-0 w-full bg-black/50 transition-all ease-in">
                 <Button className="flex items-center text-white py-0 md:py-2 h-6 md:h-8 rounded">
                    <Eye className="size-6"/><h5>QUICK VIEW</h5>
                  </Button>
              </DialogTrigger>
             
              <DialogContent className="no-select sm:max-w-[425px] md:max-w-[900px] h-[76%] md:h-[80%] overflow-scroll rounded-none bg-slate-100 p-3 flex flex-col md:flex-row gap-2 md:gap-3">
                <div className="w-full md:w-3/5">
                  <Image
                    alt="" quality={100}
                    src={product?.image}
                    height={800} width={500} 
                    className="rounded"
                  />
                </div>
                <div className="w-full md:w-2/5 py-2 md:py-5 px-1">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{product?.name}</DialogTitle>
                    <h4 className="text-xl my-3 text-start">TK {product?.price}.00</h4>
                     <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 w-full">
                        <div className="flex flex-col w-2/5 md:w-1/3">
                          <label className="text-start">Quantity: </label>
                          <div className="flex justify-between items-center p-1 border-2 border-gray-400 h-8 md:h-10 rounded">
                            <Minus onClick={() => handleOrderQuantityControll("minus")} className="cursor-pointer"/>
                              <input
                              //  autoFocus={true} value={orderQuantity} min={1} 
                               value={orderQuantity ? orderQuantity : ""} 
                               className="no-select font-semibold text-center h-full cursor-default border-none focus:outline-none text-lg w-12 md:w-15"
                               onChange={(e) => setorderQuantity(parseInt(e.target.value))}
                               type="text"/>
                            <Plus onClick={() => handleOrderQuantityControll("plus")} className="cursor-pointer"/>
                          </div>
                        </div>
                        <div className="flex flex-col w-3/5 md:w-2/3">
                          <label className="text-start">Size:</label>
                          <select 
                           value={selectedSizeOfProduct} // বর্তমান স্টেট-এর সাথে মান বাইন্ড করা
                           onChange={(e) => setSelectedSizeOfProduct(e.target.value)} // onChange ইভেন্ট হ্যান্ডলার যুক্ত করা
                           className="py-0 pl-2 h-8 md:h-10 font-semibold text-lg border-gray-400 border-2"
                          >
                            <option value="" disabled className="text-gray-400">Select...</option>
                            {product?.size?.map((size , id)=> 
                               <option key={id} value={size}>{size}</option>
                            )}
                          </select>
                        </div>
                      </div>
                   </DialogHeader>
                  <DialogFooter className="flex !flex-col mt-10 gap-2">
                    <Link href={`/productDetails/${product?.subCategory?.split(" ").join("-")}/${product?._id}`} className="w-full rounded-none h-7 md:h-10 text-black hover:text-white bg-inherit hover:bg-black p-0 md:p-2 text-center font-semibold border border-black">VIEW DETAILS</Link>
                    <Button disabled={addToBagProcessing} 
                    onClick={() => handleAddToBag(product)}
                    buttonSize="sm" type="submit" className="w-full rounded-none text-black hover:text-white bg-inherit hover:bg-orange-400 p-4 border-[1px] border-solid border-black mt-2">
                      ADD TO BAG
                    </Button>
                  </DialogFooter>
                </div>
              </DialogContent>
            </Dialog> 
        </section>
    );
};

export default QuickViewDialog;