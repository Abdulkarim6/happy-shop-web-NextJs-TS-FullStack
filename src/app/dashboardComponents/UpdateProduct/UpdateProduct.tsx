import React from 'react';
import UpdateProductClient from './UpdateProductClient';
import { getCategories } from '@/app/utils/getCategories';

const UpdateProduct = async({productid}:{productid:string}) => {
    const allCategories = await getCategories();
    return (
      <UpdateProductClient
        productid={productid}
        allCategories={allCategories}
      />
    );
};

export default UpdateProduct;