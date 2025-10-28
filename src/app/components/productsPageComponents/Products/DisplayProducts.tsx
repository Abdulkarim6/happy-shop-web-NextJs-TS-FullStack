import Image from "next/image";
import Link from "next/link";
import QuickViewDialog from "../QuickViewDialog/QuickViewDialog";
import { Product } from "@/app/utils/interfaces";
type ParamsTypes = {
    filteredProducts: Product[];
}
const DisplayProducts = ({filteredProducts}: ParamsTypes) => {
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