// export const dynamic = "auto";
import ManageProducts from "@/app/dashboardComponents/ManageProducts/ManageProducts";
import { getAllProducts } from "@/app/utils/getAllProducts";

const page = () => {
  
  const allProductsOfCategoriesPromise = getAllProducts();

  return <ManageProducts allProductsOfCategoriesPromise={allProductsOfCategoriesPromise} />;
};

export default page;