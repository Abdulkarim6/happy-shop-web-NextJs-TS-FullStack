'use client'
import Image from "next/image";
import Link from "next/link";
import QuickViewDialog from "../QuickViewDialog/QuickViewDialog";
import { Product } from "@/app/utils/interfaces";
import { useProductsPageStates } from "@/app/contexts/productsPageStatesContext/useProductsPageStates";
type ParamsTypes = {
  dataBySubcategory : Product[];
}
const DisplayProducts = ({dataBySubcategory}: ParamsTypes) => {
  const { sizes,price,colors,inStock} = useProductsPageStates();

    function normalizeSize(size: string | string[]): string[] {
    if (Array.isArray(size)) {
      return size;
    }
    if (typeof size === "string" && size.trim() !== "") {
      return [size];
    }
    return []; // empty হলে খালি array ফেরত দিবে
    }

  const filteredProducts = dataBySubcategory?.filter((product: Product) => {
  // price filter
  const matchPrice =
    price ? product.price <= parseInt(price) : true;

  // size filter (যদি product.size string[] হয় → some দিয়ে চেক করবো, 
  // যদি শুধু string হয় → includes দিয়ে)
  const matchSize =
    sizes.length > 0
      ? normalizeSize(product.size).some((s) => sizes.includes(s)) : true;

  // inStock filter (inStock যেহেতু string | number | boolean → প্রথমে normalize করতে হবে)
  let isAvailable: boolean = false;
  if (typeof product.inStock === "boolean") {
    isAvailable = product.inStock;
  } else if (typeof product.inStock === "number") {
    isAvailable = product.inStock > 0;
  } else if (typeof product.inStock === "string") {
    isAvailable = product.inStock.toLowerCase() === "true" || product.inStock !== "0";
  }

  const matchAvailability = inStock ? isAvailable : true;

  // color filter
  const matchColor =
    colors.length > 0 ? colors.some((c) => product.color.includes(c)) : true;

  return matchPrice && matchSize && matchAvailability && matchColor;
});

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredProducts?.map((product: Product) => (
              <div key={product?._id}>
                 <div className="relative group overflow-hidden">
                   <Link
                     href={`/productDetails/${product?.subCategory?.split(" ").join("-")}/${product?._id}`}
                   >
                      <Image
                        src={product?.image}
                        alt="Picture of the author" width={450} height={550}
                        className=" hover:scale-105 transition-transform opacity-90"
                      />
                   </Link>
                   <QuickViewDialog 
                     product={product}
                   ></QuickViewDialog>
                 </div>
                
                <Link
                  href={`/productDetails/${product?.subCategory?.split(" ").join("-")}/${product?._id}`}
                >
                  <h3 className="text-sm md:text-xl text-center font-medium my-2">
                    {product?.name}
                  </h3>
                </Link>
               
                <p className="text-base">{product?.description}</p>
                <p className="text-lg font-light">BDT {product?.price} TK</p>
              </div>
            ))}
        </div>
    );
};

export default DisplayProducts;