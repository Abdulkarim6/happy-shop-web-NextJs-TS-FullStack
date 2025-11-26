// export const dynamic = 'force-dynamic';
import ProductsManageSkeleton from "@/app/Skeletons/ProductsManageSkeleton";
import ManageProducts from "@/app/dashboardComponents/ManageProducts/ManageProducts";
import { getAllProducts } from "@/app/utils/getAllProducts";
import { Suspense } from "react";

const page = () => {
  
  void getAllProducts();

  return (
    <Suspense fallback={<ProductsManageSkeleton/>}>
      <ManageProducts />
    </Suspense>
  );
};

export default page;