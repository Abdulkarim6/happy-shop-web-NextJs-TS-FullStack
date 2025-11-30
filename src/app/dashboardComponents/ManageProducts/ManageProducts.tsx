import ManageProductsClient from "./ManageProductsClient";
import { getCategories } from '@/app/utils/getCategories';
import { Product } from "@/app/utils/interfaces";

const ManageProducts = async({allProductsOfCategoriesPromise}:{allProductsOfCategoriesPromise: Promise<Product[]>}) => {
  
  // const allCategoriesPromise =  getCategories();
  
  // const [allCategories, allProductsOfCategories] = await Promise.all([
  //   allCategoriesPromise, allProductsOfCategoriesPromise //parallaly loads data
  // ]);
  
  const allProductsOfCategories = await allProductsOfCategoriesPromise;
  const allCategories = await getCategories();

    return (
      <ManageProductsClient allProductsOfCategories={allProductsOfCategories} allCategories={allCategories}/>
    );
};

export default ManageProducts;