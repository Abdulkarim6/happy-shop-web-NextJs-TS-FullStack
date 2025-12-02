import ManagePageContextProvider from "@/app/contexts/managePageStatesContext/ManagePageContextProvider";
import FIlterFields from "./FIlterFields";
import ManageProductsTable from "./ManageProductsTable";
import Pagination from "./Pagination";
import { Suspense } from "react";
import { FilterFieldSkeleton, ProductsManageSkeleton } from "@/app/Skeletons/ProductsManageSkeleton";

const ManageProducts = () => {
  
  // const [allCategories, allProductsOfCategories] = await Promise.all([
  //   allCategoriesPromise, allProductsOfCategoriesPromise //parallaly loads data
  // ]);
  
  return (
      <ManagePageContextProvider>
        <div className="w-full">
          <div className="w-full flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3 px-3">
            
            <Suspense fallback={<FilterFieldSkeleton />}>
             <FIlterFields />
            </Suspense>

            <div className="w-fit flex items-center space-x-2">
              <Pagination/>
            </div>
          </div>
          <Suspense fallback={<ProductsManageSkeleton/>}>
           <ManageProductsTable />
          </Suspense>
        </div>
      </ManagePageContextProvider >
    );
};

export default ManageProducts;