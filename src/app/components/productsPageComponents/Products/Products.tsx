import { Product } from "@/app/utils/interfaces";
import DisplayProducts from "./DisplayProducts";
import ProductsClientAsideNav from "./ProductsClientAsideNav";
import ProductsPageStatesContextProvider from "@/app/contexts/productsPageStatesContext/ProductsPageStatesContextProvider";
import DrawerOpenButton from "./DrawerOpenButton";

type GroupPropsTypes = {
  decodedParams: string[];
  productsByAudience: Product[];
};

const Products = async ({productsByAudience, decodedParams }: GroupPropsTypes) => {
  const urlPath = decodedParams?.join("/").toLocaleLowerCase();

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
            <DisplayProducts productsByAudience={productsByAudience} urlPath={urlPath}/>
          </div>
        </div>
      </ProductsPageStatesContextProvider>
    </section>
  );
};

export default Products;
