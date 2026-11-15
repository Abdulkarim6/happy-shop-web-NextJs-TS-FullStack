export const dynamic="force-dynamic";
import ManagePageContextProvider from "@/app/contexts/managePageStatesContext/ManagePageContextProvider";
import { Suspense } from "react";
import { FilterFieldSkeleton, ProductsManageSkeleton } from "@/app/Skeletons/ProductsManageSkeleton";
import FIlterFields from "@/app/dashboardComponents/ManageProducts/FIlterFields";
import Pagination from "@/app/dashboardComponents/ManageProducts/Pagination";
import ManageProductsTable from "@/app/dashboardComponents/ManageProducts/ManageProductsTable";

const page = () => {
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

export default page;