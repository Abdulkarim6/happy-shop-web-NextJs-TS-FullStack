"use client"

import { useEffect, useState } from "react";
import { Product } from "@/app/utils/interfaces";
import { Button } from "@/components/ui/button";

const MenProductDetails = ({product} : {product : Product}) => {
    console.log(product);
    
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedSizeOfProduct, setSelectedSizeOfProduct] = useState<string>("");
     const [quantityOfSizes, setQuantityOfSizes] = useState<{ _id: string, quantity: number }[]>([]);  

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    //  Loads quantity of products based on size
    useEffect(() => {
       fetch(`${baseUrl}/api/getQuantityOfItemsForEachSizes`,{
          cache:"no-store",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            subCategory: product?.subCategory,
            targetAudience: product?.targetAudience,
           })
      })
       .then((res) => res.json())
         .then((data) => setQuantityOfSizes(data))
         .catch((err) => console.log("err", err));
    },[])


    return (
      <section className="py-5 px-1">
        <h2 className="text-2xl">{product?.name}</h2>
        <h4 className="text-lg my-5">TK {product?.price}</h4>
        <div className="flex items-center justify-between gap-2 w-full">
          <div className="flex flex-col w-1/3">
            <label htmlFor="fname">Quantity: </label>
            <input
              autoFocus={true}
              min={1}
              value={quantity}
              className="py-1 pl-2 font-semibold text-lg border-gray-400 border-solid border-2"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              type="number"
            />
          </div>
          <div className="flex flex-col w-2/3">
            <label>Size:</label>
            <select
              value={selectedSizeOfProduct} // বর্তমান স্টেট-এর সাথে মান বাইন্ড করা
              onChange={(e) => setSelectedSizeOfProduct(e.target.value)} // onChange ইভেন্ট হ্যান্ডলার যুক্ত করা
              className="py-1 pl-2 font-semibold text-lg border-gray-400 border-solid border-2"
            >
              <option value="" disabled className="text-gray-400">
                Select...
              </option>
              {quantityOfSizes?.map((size, id) => (
                <option key={id} value={size?._id}>
                  {size?._id}
                </option>
              ))}
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
        <Button buttonSize="sm" type="submit" className="w-full rounded-none text-black hover:text-white bg-inherit hover:bg-orange-400 p-4 border-[1px] border-solid border-black mt-2">ADD TO CART</Button>
      </section>
    );
};

export default MenProductDetails;