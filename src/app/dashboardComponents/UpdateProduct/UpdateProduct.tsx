import React from 'react';
import UpdateProductClient from './UpdateProductClient';
import { getCategories } from '@/app/utils/getCategories';

const UpdateProduct = async({productid}:{productid:string}) => {
    const categoriesForAll = await getCategories();
    return (
      <UpdateProductClient
        productid={productid}
        categoriesForAll={categoriesForAll}
      />
    );
};

export default UpdateProduct;