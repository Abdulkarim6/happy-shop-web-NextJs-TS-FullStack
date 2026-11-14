import { Product } from "@/app/utils/interfaces";
import DisplayProducts from "./DisplayProducts";
import ProductsClientAsideNav from "./ProductsClientAsideNav";
import ProductsPageStatesContextProvider from "@/app/contexts/productsPageStatesContext/ProductsPageStatesContextProvider";
import DrawerOpenButton from "./DrawerOpenButton";
import { notFound } from "next/navigation";
import { getProductsByAudience } from "@/app/utils/getProductsByAudience";

type GroupPropsTypes = {
  decodedParams: string[];
};

const Products = async ({ decodedParams }: GroupPropsTypes) => {
  const productsByAudience :Product[] = await getProductsByAudience(decodedParams);

  // if (dataBySubcategory?.length <= 0) {
  //   notFound();
  // }

  return (
    <section className="relative ">
      {/* Filter drawer open button for mobile view*/}
      <ProductsPageStatesContextProvider>
        <div className="block md:hidden">
          <DrawerOpenButton />
        </div>

        <div className="w-full flex gap-2 z-30">
          {/* Filtered Area */}
          <ProductsClientAsideNav decodedParams={decodedParams} />

          {/* products display area */}
          <div className="w-full md:w-4/5 px-1 z-10">
            <DisplayProducts productsByAudience={productsByAudience} />
          </div>
        </div>
      </ProductsPageStatesContextProvider>
    </section>
  );
};

export default Products;
