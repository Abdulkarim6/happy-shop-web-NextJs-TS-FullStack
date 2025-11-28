import ManageProductsClient from "./ManageProductsClient";
import { getAllProducts } from '@/app/utils/getAllProducts';
import { getCategories } from '@/app/utils/getCategories';

const ManageProducts = async() => {
  const allProductsOfCategoriesPromise = getAllProducts();
  const allCategoriesPromise =  getCategories();
  
  const [allCategories, allProductsOfCategories] = await Promise.all([
    allCategoriesPromise, allProductsOfCategoriesPromise //parallaly loads data
  ]);
  
  // const allProductsOfCategories = await getAllProducts();
  // const allCategories = await getCategories();

    return (
      <ManageProductsClient allProductsOfCategories={allProductsOfCategories} allCategories={allCategories}/>
    );
};

export default ManageProducts;