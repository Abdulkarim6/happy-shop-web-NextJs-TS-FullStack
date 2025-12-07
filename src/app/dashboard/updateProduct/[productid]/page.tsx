import ProductInfo from "@/app/dashboardComponents/UpdateProduct/ProductInfo";
import UpdateProduct from "@/app/dashboardComponents/UpdateProduct/UpdateProduct";
import Loader from "@/app/shared/Loader/Loader";
import { Suspense } from "react";

const page = async({params}:{params: Promise<{productid : string}>}) => {
    const {productid} = await params;
    
    return (
      <div>
        <h3 className="text-base md:text-xl font-semibold">Update Information of the product, ID: {productid}</h3>
        <Suspense fallback={<Loader />}>
          <UpdateProduct productid={productid} />
        </Suspense>
        <h3 className="mt-5 text-base md:text-xl font-semibold">Current Details of the Product, ID: {productid}</h3>
        <Suspense>
          <ProductInfo productid={productid} />
        </Suspense>
      </div>
    );
};

export default page;