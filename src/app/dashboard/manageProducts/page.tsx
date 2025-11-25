import React from 'react';
import ManageProducts from '../dashboardComponents/ManageProducts/ManageProducts';
import { getAllProducts } from '@/app/utils/getAllProducts';

const page = async () => {
  const allProductsOfCategories = await getAllProducts();
  return (
    <div>
      <ManageProducts allProductsOfCategories={allProductsOfCategories}/>
    </div>
  );
};

export default page;