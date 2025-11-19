import { Product } from "@/app/utils/interfaces";
import DisplayProducts from "./DisplayProducts";
import ProductsClientAsideNav from "./ProductsClientAsideNav";
import ProductsPageStatesContextProvider from "@/app/contexts/productsPageStatesContext/ProductsPageStatesContextProvider";
import DrawerOpenButton from "./DrawerOpenButton";
import { filteredDataBySubcategory } from "@/app/utils/filteredDataBySubcategory";
import { notFound } from "next/navigation";
import { getAllProducts } from "@/app/utils/getAllProducts";

type GroupPropsTypes = {
  urlPathe:string;
  decodedSub_categories : string[];
};

const Products = async({ decodedSub_categories, urlPathe} : GroupPropsTypes) => {
  let dataBySubcategory;
  
  const allProductsOfCategories = await getAllProducts();

  if (urlPathe.startsWith("men/")) {
    dataBySubcategory = 
     allProductsOfCategories?.filter((allProductsOfCategory:Product) => 
     filteredDataBySubcategory(allProductsOfCategory, decodedSub_categories));    
  } 
  else if(urlPathe.startsWith("women/") ) {
     dataBySubcategory = 
      allProductsOfCategories?.filter((allProductsOfCategory:Product) => 
      filteredDataBySubcategory(allProductsOfCategory, decodedSub_categories));
  }
  else if(urlPathe.startsWith("kids/")) {
     dataBySubcategory = 
      allProductsOfCategories?.filter((allProductsOfCategory:Product) => 
      filteredDataBySubcategory(allProductsOfCategory, decodedSub_categories));
  }
  else if(urlPathe.startsWith("accessories/")) {
     dataBySubcategory = 
      allProductsOfCategories?.filter((allProductsOfCategory:Product) => 
      filteredDataBySubcategory(allProductsOfCategory, decodedSub_categories));
  }

  if (dataBySubcategory?.length <= 0) {
    notFound();
  }
  
  return (
    <section className="relative ">
      {/* Filter drawer open button for mobile view*/}
    <ProductsPageStatesContextProvider>
      <div className="block md:hidden">
        <DrawerOpenButton/>
      </div>

      <div className="w-full flex gap-2 z-30">         
          {/* Filtered Area */}
          <ProductsClientAsideNav 
            decodedSub_categories={decodedSub_categories}
          />

         {/* products display area */}
         <div className="w-full md:w-4/5 px-1 z-10">
           <DisplayProducts
             dataBySubcategory={dataBySubcategory}
           />
         </div>
      </div>
    </ProductsPageStatesContextProvider>
    </section>
  );
};

export default Products;