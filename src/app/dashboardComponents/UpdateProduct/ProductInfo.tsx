import { getAllProducts } from '@/app/utils/getAllProducts';
import { Product } from '@/app/utils/interfaces';
import Image from 'next/image';
import React from 'react';
import DateTime from './DateTime';

const ProductInfo = async({productid}:{productid:string}) => {
    const product:Product = await getAllProducts()?.then(it => 
      it?.find((product:Product) => product?._id === productid));
  
    return (
    <div className='px-2 md:px-24 rounded-none pt-3 md:pt-5 w-full'>
      <div className="flex flex-col md:flex-row justify-around gap-3 w-full">
        <div className="w-full md:w-1/2">
          {product?.image && (
            <Image
              alt="product" quality={100} src={product.image}
              height={800} width={500} priority
            />
          )}
        </div>

        <div className="w-full md:w-1/2">
          <div className="py-5 px-1">
            <h2 className="text-2xl">{product?.name}</h2>
            <h4 className="text-lg my-3">TK {product?.price}.00</h4>
            <div className="flex flex-col w-2/5 md:w-1/3">
              <label className="text-start">
                Stock: {product?.inStock} peace
              </label>
            </div>
            <div className="flex my-2 space-x-5">
              <label className="text-start">Size:</label>
              {product?.size?.map((s: string) => (
                <span className="space-x-5" key={s}>
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-3 mb-5 px-1 flex justify-between items-center border-solid border-b-1 border-gray-500">
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
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row space-x-20'>
        <h4 className="text-lg">Sub Category:{` `+ product?.subCategory}</h4>
        <h4 className="text-lg">Target Audience:{` `+ product?.targetAudience}</h4>
       <h4 className="text-lg">Colors:{` `+ product?.color}</h4>
       <DateTime date={product?.DateAdded?.toString()}/>
      </div>
    </div>
    );
};

export default ProductInfo;