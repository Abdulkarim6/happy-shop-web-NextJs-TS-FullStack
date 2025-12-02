import { getAllProducts } from '@/app/utils/getAllProducts';
import ProductsTableClient from './ProductsTableClient';

const ManageProductsTable = async() => {
  const allProductsOfCategories = await getAllProducts();

  return <ProductsTableClient allProductsOfCategories={allProductsOfCategories}/>;
};

export default ManageProductsTable;