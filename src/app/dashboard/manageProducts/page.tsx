// export const dynamic = "force-dynamic";
import ManageProducts from "@/app/dashboardComponents/ManageProducts/ManageProducts";
import { getAllProducts } from "@/app/utils/getAllProducts";

const page = () => {
  
  const allProductsOfCategoriesPromise = getAllProducts();

  return <ManageProducts allProductsOfCategoriesPromise={allProductsOfCategoriesPromise} />;
};

export default page;