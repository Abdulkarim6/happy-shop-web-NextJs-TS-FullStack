import { getProduct } from '@/app/actions/products/getProduct';
import ProductDetails from '@/app/components/productsPageComponents/ProductDetails/ProductDetails';
import { Product } from '@/app/utils/interfaces';
import Image from 'next/image';
import React from 'react';

const ProductBlock = async({id}:{id:string}) => {
    const product : Product = await getProduct(id);

    return (
        <div className="px-2 md:px-24 rounded-none bg-slate-100 pt-3 md:pt-5 flex flex-col md:flex-row justify-around gap-3 w-full">
         <div className="w-full md:w-1/2">
           {product?.image && (
            <Image
              alt="product" quality={100}
              src={product.image}
              height={800} width={500}
              priority
            />
           )}
         </div>
     
         <div className="w-full md:w-1/2">
          <ProductDetails product={product} />
         </div>
       </div>
    );
};

export default ProductBlock;