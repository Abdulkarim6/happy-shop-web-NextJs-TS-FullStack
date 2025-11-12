import { Product } from "@/app/utils/interfaces";
import { Search, SquareX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";

type ParamsType = {
  searchForProducts : string ;
  setSearchForProducts: React.Dispatch<React.SetStateAction<string>>;
}

const DisplaySearchedProducts = ({searchForProducts, setSearchForProducts}:ParamsType) => {
    const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
    const [searchedProductsLoading, setSearchedProductsLoading] = useState<boolean>(false);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    useEffect(() => {
      setSearchedProductsLoading(true);
      fetch(`${baseUrl}/api/searchingProducts?search=${searchForProducts}`, {cache:"no-cache"})
      .then(res => res.json())
      .then(data => setSearchedProducts(data))
      .finally(() => setSearchedProductsLoading(false))
    }, [searchForProducts, baseUrl]);
    
    return (
        <div className={`w-full md:w-[96%] mx-auto absolute bg-white left-0 right-0 px-1 md:px-3 py-2
          ${searchForProducts ? "top-full h-[calc(100svh-100px)] overflow-y-scroll":"bottom-0 z-0"} transition-all duration-300
           `}>

          <div className="w-full flex justify-between">
           <span className="flex gap-0.5 items-center"><Search size={16}/><p className="font-medium"> Search: shirt, t-shirt, panjabi, tops, saree...</p> </span>
           <SquareX onClick={() => setSearchForProducts("")} className="cursor-pointer size-5 md:size-10" />
          </div>

          <h2 className="text-2xl font-semibold">Results: {searchForProducts}</h2>
          {
            searchedProductsLoading ?
            <Loader/>
            :
             searchedProducts?.length > 0 ?
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {searchedProducts?.map((product: Product) => (
                  <div key={product?._id}>
                     <div className="relative group overflow-hidden">
                       <Link
                        onClick={() => {
                          setTimeout(() => setSearchForProducts(""), 300);
                        }}
                         href={`/productDetails/${product?.subCategory?.split(" ").join("-")}/${product?._id}`}
                       >
                          <Image
                            src={product?.image}
                            alt="Picture of the author" width={250} height={300}
                            className=" hover:scale-105 transition-transform opacity-90"
                          />
                          <h3 className="text-xs md:text-sm text-center md:font-medium my-1">
                            {product?.name}
                          </h3>
                       </Link>
                     </div>
                  </div>
                ))}
              </div>
              :
              <div className="w-full text-center mt-5">
              <p>Sorry, no items matched your search request.</p>
              <p>Try typing a different word into the search box above.</p>
              </div>
          }
          
        </div>
    );
};

export default DisplaySearchedProducts;