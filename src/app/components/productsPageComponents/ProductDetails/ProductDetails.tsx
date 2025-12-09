"use client"

import { useState } from "react";
import { Product, Toast } from "@/app/utils/interfaces";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { addToBag } from "@/app/actions/addProductToBag";

const ProductDetails = ({product} : {product : Product}) => {
   // console.log(product);
    const [loading, setLoading] = useState(false);
    const [orderQuantity, setorderQuantity] = useState<number>(1);
    const [selectedSizeOfProduct, setSelectedSizeOfProduct] = useState<string>("");
     const handleOrderQuantityControll = (param : "plus" | "minus") =>{
      if (param === "plus") {
        // when input field is NaN(empty), the condition will apply
        setorderQuantity(prev => (!Number.isNaN(prev) ? ++prev : 1));
      }
      if (param === "minus") {
        setorderQuantity(prev => (prev > 1 && !Number.isNaN(prev) ? --prev : 1));
      }
    }

    const handleAddToBag = async(product:Product) =>{
      setLoading(true);
      const orderedData = {
        productId: product?._id,
        productQuantity: orderQuantity,
        productQsize: selectedSizeOfProduct,
        productPrice: product?.price,
      };

      const res = await addToBag(orderedData);  
      if(res?.acknowledged){
        Toast.fire({
          icon:"success",
          title:"Succesfully added to the Bag"
        });
      }
      else{
        Toast.fire({
          icon:"error",
          title:"Faild to add to the Bag"
        });
      }

      setLoading(false);
    }

    return (
      <section className="py-5 px-1">
        <h2 className="text-2xl">{product?.name}</h2>
        <h4 className="text-lg my-5">TK {product?.price}.00</h4>
        <div className="flex items-center justify-between gap-2 w-full">
          <div className="flex flex-col w-2/5 md:w-1/3">
            <label className="text-start">Quantity: </label>
            <div className="flex justify-between p-1 border-2 border-gray-400 h-8 md:h-10 rounded">
              <Minus onClick={() => handleOrderQuantityControll("minus")} className="cursor-pointer"/>
                <input
                //  autoFocus={true} value={orderQuantity} min={1} 
                 value={orderQuantity ? orderQuantity : ""} 
                 className="no-select font-semibold text-center h-full cursor-default border-none focus:outline-none md:text-[17px] w-12 md:w-15"
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
              <option value="" disabled className="text-gray-400">
                Select...
              </option>
                {product?.size?.map((size , id)=> 
                  <option key={id} value={size}>{size}</option>
                )}
            </select>
          </div>
        </div>

        <div className="my-5 px-1 flex justify-between items-center border-solid border-b-1 border-gray-500">
            <span>Product Code</span>
            <span>{product?._id.slice(0, 6)}</span>
        </div>
        <div className="my-5 px-1 flex justify-between items-center border-solid border-b-1 border-gray-500">
            <span>Brand</span>
            <span>{product?.brand}</span>
        </div>
        <div className="my-5 px-1 flex justify-between items-center border-solid border-b-1 border-gray-500">
            <span>InStock</span>
            <span>{product?.inStock ? "Available" : "Out of Stock"}</span>
        </div>
        <div className="my-5 px-1 flex flex-col justify-between border-solid border-b-1 border-gray-500">
            <span>Description:</span>
            <span>{product?.description}</span>
        </div>
        <div className="my-5 px-1 flex justify-between items-center border-solid border-b-1 border-gray-500">
            <span>Rating:</span>
            <span>{product?.rating}</span>
        </div>
        <Button disabled={loading} onClick={() => handleAddToBag(product)} buttonSize="sm" type="submit" className="w-full rounded-none text-black hover:text-white bg-inherit hover:bg-orange-400 p-4 border-[1px] border-solid border-black mt-2">
          ADD TO BAG
        </Button>
      </section>
    );
};

export default ProductDetails;