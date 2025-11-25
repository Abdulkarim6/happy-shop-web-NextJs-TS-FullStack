import React from 'react';
import ManageProducts from '../dashboardComponents/ManageProducts/ManageProducts';
import { getAllProducts } from '@/app/utils/getAllProducts';
import { getCategories } from '@/app/utils/getCategories';

const page = async () => {
  const allProductsOfCategories = await getAllProducts();
  const allCategories = await getCategories();
  return (
    <div>
      <ManageProducts allProductsOfCategories={allProductsOfCategories} allCategories={allCategories}/>
    </div>
  );
};

export default page;