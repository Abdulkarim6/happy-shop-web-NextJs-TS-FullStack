import { loadAddress } from '@/app/actions/checkoutActions';
import CheckoutClient from '@/app/bag-checkoutComponents/CheckoutClient';
import getOrderedProducts from '@/app/utils/getOrderedProducts';
import React from 'react';

const page = async() => {

   const [addressesResult, ordersResult] = await Promise.allSettled([
     loadAddress(),
     getOrderedProducts(),
   ]);

   const addresses = addressesResult.status === "fulfilled" ? addressesResult.value : [];

   const orders = ordersResult.status === "fulfilled" ? ordersResult.value : [];

    return (
      <div>
        <CheckoutClient addresses={addresses} orders={orders} />
      </div>
    );
};

export default page;