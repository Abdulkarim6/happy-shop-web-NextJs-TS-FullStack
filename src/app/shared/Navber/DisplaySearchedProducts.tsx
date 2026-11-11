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

    useEffect(()=> {
      const query = searchForProducts.trim();
      if (!query) {
        setSearchedProducts([]);
        setSearchedProductsLoading(false);
        return;
      }
      if(query.length < 2){
        setSearchedProducts([]);  setSearchedProductsLoading(false);
        return;
      }

      const productSearchController = new AbortController();
      setSearchedProductsLoading(true);

      const timer = setTimeout(async() => {
        try {
         const res = await fetch(`${baseUrl}/api/searchingProducts?search=${searchForProducts}`, {signal: productSearchController.signal})
         if (!res?.ok) { throw new Error("Failed to fetch products"); }

         const data = await res.json();
         if (productSearchController.signal.aborted) return;
         setSearchedProducts(data);

        } catch (error) {
          if (error instanceof Error && error.name === "AbortError") { return; }
          console.error(error);
          setSearchedProducts([]);
        } finally {
          if (!productSearchController.signal.aborted) { setSearchedProductsLoading(false); }
        }
      }, 300)

      return () =>{ clearTimeout(timer); productSearchController.abort() }
    }, [searchForProducts])
    
    return (
        <div
          aria-hidden={!searchForProducts}
          className={`absolute left-0 right-0 top-full z-50 mx-auto w-full md:w-[96%]
            h-[calc(100svh-100px)] overflow-y-auto bg-white px-1 md:px-3 py-2 shadow-lg
            transition-all duration-300 ease-out
            ${searchForProducts
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0 pointer-events-none"}`}
          >

          <div className="w-full flex justify-between">
           <span className="flex gap-0.5 items-center"><Search size={16}/><p className="font-medium"> Search: shirt, t-shirt, panjabi, tops, saree...</p> </span>
           <SquareX onClick={() => setSearchForProducts("")} className="cursor-pointer size-5 md:size-10" />
          </div>

          <h2 className="text-2xl font-semibold">Results: {searchForProducts}</h2>
          {
            searchedProductsLoading ?
            <Loader/>
            :
             searchedProducts.length > 0 ?
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {searchedProducts.map((product: Product) => (
                  <div key={product?._id}>
                     <div className="relative group overflow-hidden">
                       <Link
                        onClick={() => setSearchForProducts("")}
                        href={`/productDetails/${product?.subCategory?.split(" ").join("-")}/${product?._id}`}
                       >
                          <Image
                            src={product?.image}
                            alt={product?.name} width={250} height={300}
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