import ManagePageContextProvider from "@/app/contexts/managePageStatesContext/ManagePageContextProvider";
import { getCategories } from '@/app/utils/getCategories';
import { Product } from "@/app/utils/interfaces";
import FIlterFields from "./FIlterFields";
import ManageProductsTable from "./ManageProductsTable";
import Pagination from "./Pagination";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { FilterFieldSkeleton, ProductsManageSkeleton } from "@/app/Skeletons/ProductsManageSkeleton";

const ManageProducts = async({allProductsOfCategoriesPromise}:{allProductsOfCategoriesPromise: Promise<Product[]>}) => {
  
  // const [allCategories, allProductsOfCategories] = await Promise.all([
  //   allCategoriesPromise, allProductsOfCategoriesPromise //parallaly loads data
  // ]);
  
  const allProductsOfCategories = await allProductsOfCategoriesPromise;
  const allCategories = await getCategories();

    return (
      <ManagePageContextProvider>
        {/* <ManageProductsClient
          allProductsOfCategories={allProductsOfCategories}
          allCategories={allCategories}
        /> */}

        <div className="w-full">
          <div className="w-full flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3 px-3">
            
            <Suspense fallback={<FilterFieldSkeleton />}>
             <FIlterFields allCategories={allCategories} />
            </Suspense>

            <div className="w-fit flex items-center space-x-2">
              <Pagination/>
            </div>
          </div>
          <Suspense fallback={<ProductsManageSkeleton/>}>
           <ManageProductsTable allProductsOfCategories={allProductsOfCategories}/>
          </Suspense>
        </div>
      </ManagePageContextProvider >
    );
};

export default ManageProducts;