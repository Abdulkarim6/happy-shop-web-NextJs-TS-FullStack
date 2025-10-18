"use client"

import { Product } from "@/app/utils/interfaces";
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type propsTypes = {
  product: Product;
  quantityOfSizes: { _id: string, quantity: number }[]
};
const QuickViewDialog = ({product , quantityOfSizes} : propsTypes) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedSizeOfProduct, setSelectedSizeOfProduct] = useState<string>("");
   // console.log(path);

    return (
        <section>
            <Dialog>
              <DialogTrigger asChild className="absolute bottom-0 group-hover:bottom-0 w-full bg-black/50 transition-all ease-in">
              {/* <DialogTrigger asChild className="absolute -bottom-10 group-hover:bottom-0 w-full bg-black/50 transition-all ease-in"> */}
                 <Button className="flex items-center text-white">
                    <Eye className="size-6"/><h5>QUICK VIEW</h5>
                  </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] md:max-w-[900px] md:h-[80%] rounded-none bg-slate-100 p-3 flex gap-3 w-full">
                <div className="w-3/5">
                  <Image
                    alt="" quality={100}
                    src={product?.image}
                    height={800} width={500} 
                    className="rounded"
                  />
                </div>
                <div className="w-2/5 py-5 px-1">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{product?.name}</DialogTitle>
                    <h4 className="text-xl my-3">TK {product?.price}</h4>
                     <div className="flex items-center justify-between gap-2 w-full">
                        <div className="flex flex-col w-1/3">
                          <label htmlFor="fname">Quantity: </label>
                          <input
                           autoFocus={true} value={quantity}
                           className="py-1 pl-2 font-semibold text-lg border-gray-400 border-solid border-2"
                           onChange={(e) => setQuantity(parseInt(e.target.value))}
                           type="number"/>
                        </div>
                        <div className="flex flex-col w-2/3">
                          <label>Size:</label>
                          <select 
                           value={selectedSizeOfProduct} // বর্তমান স্টেট-এর সাথে মান বাইন্ড করা
                           onChange={(e) => setSelectedSizeOfProduct(e.target.value)} // onChange ইভেন্ট হ্যান্ডলার যুক্ত করা
                           className="py-1 pl-2 font-semibold text-lg border-gray-400 border-solid border-2"
                          >
                            <option value="" disabled className="text-gray-400">Select...</option>
                            {quantityOfSizes?.map((size , id)=> 
                               <option key={id} value={size?._id}>{size?._id}</option>
                            )}
                          </select>
                        </div>
                      </div>
                   </DialogHeader>
                  <DialogFooter className="flex sm:flex-col mt-10 gap-2">
                    <Link href={`/productDetails/${product?.subCategory?.split(" ").join("-")}/${product?._id}`} className="w-full rounded-none text-black hover:text-white bg-inherit hover:bg-black p-2 text-center font-semibold border-[1px] border-solid border-black">VIEW DETAILS</Link>
                    <Button buttonSize="sm" type="submit" className="w-full rounded-none text-black hover:text-white bg-inherit hover:bg-orange-400 p-4 border-[1px] border-solid border-black mt-2">ADD TO CART</Button>
                  </DialogFooter>
                </div>
              </DialogContent>
            </Dialog> 
        </section>
    );
};

export default QuickViewDialog;